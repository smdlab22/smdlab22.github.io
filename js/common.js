/* ============================================================
   common.js
   모든 페이지에서 공통으로 불러 쓰는 스크립트입니다.
   - 언어 상태를 localStorage에 저장해서, 페이지를 이동해도
     선택한 언어가 유지됩니다. (기본값: 영어)
   - 로고 클릭 시 index.html(Home)로 이동 (링크는 HTML에서 처리)
   - 상단 내비게이션 / 하단 푸터를 data.js 내용으로 채웁니다.
   ============================================================ */

const LANG_KEY = "smdlab-lang";
let currentLang = localStorage.getItem(LANG_KEY) || "en";

function t(kr, en) {
  return currentLang === "kr" ? kr : en;
}

/* data-kr / data-en 속성이 붙은 모든 정적 텍스트 요소 처리 */
function applyStaticText(root = document) {
  /* 히어로 영역: data.js(LAB_DATA.hero)에서 최신 텍스트를 가져와 data-* 속성을 갱신 */
  if (typeof LAB_DATA !== "undefined" && LAB_DATA.hero) {
    const h = LAB_DATA.hero;
    const heroTitle = root.querySelector("#hero h1");
    if (heroTitle) { heroTitle.dataset.kr = h.titleKr; heroTitle.dataset.en = h.titleEn; }
    const heroBody = root.querySelector("#hero .hero-body");
    if (heroBody) { heroBody.dataset.kr = h.bodyKr; heroBody.dataset.en = h.bodyEn; }
    const heroCta = root.querySelector("#hero .cta");
    if (heroCta) { heroCta.dataset.kr = h.ctaKr; heroCta.dataset.en = h.ctaEn; }
    const heroEyebrow = root.querySelector("#hero .eyebrow");
    if (heroEyebrow) { heroEyebrow.dataset.kr = h.eyebrowKr; heroEyebrow.dataset.en = h.eyebrowEn; }
  }

  root.querySelectorAll("[data-kr]").forEach((el) => {
    const value = currentLang === "kr" ? el.dataset.kr : el.dataset.en;
    if (value === undefined || value === "") return;
    if (el.tagName === "TITLE") {
      document.title = value;
    } else if (el.hasAttribute("data-attr")) {
      el.setAttribute(el.getAttribute("data-attr"), value);
    } else {
      el.textContent = value;
    }
  });
  document.documentElement.lang = currentLang === "kr" ? "ko" : "en";
}

function renderNav() {
  const nav = document.getElementById("site-nav");
  if (!nav) return;
  nav.innerHTML = "";
  const here = location.pathname.split("/").pop() || "index.html";
  LAB_DATA.nav.forEach((item) => {
    const a = document.createElement("a");
    a.href = item.href;
    a.textContent = currentLang === "kr" ? item.kr : item.en;
    if (item.href === here) a.setAttribute("aria-current", "page");
    nav.appendChild(a);
  });
}

function renderFooter() {
  const s = LAB_DATA.site;
  const labEl = document.getElementById("footer-lab");
  const updEl = document.getElementById("footer-updated");
  if (labEl) {
    labEl.textContent = `\u00A9 ${new Date().getFullYear()} ${t(s.labNameKr, s.labNameEn)} (${t(s.labFullNameKr, s.labFullNameEn)}), ${t(s.universityKr, s.universityEn)}`;
  }
  if (updEl) {
    updEl.textContent = t("\uB9C8\uC9C0\uB9C9 \uC5C5\uB370\uC774\uD2B8: ", "Last updated: ") + s.lastUpdated;
  }
}

function updateLangToggleLabel() {
  const btn = document.getElementById("lang-toggle");
  if (!btn) return;
  // 버튼에는 "전환할 언어"를 보여줍니다 (현재 영어라면 "한국어" 표시)
  btn.textContent = currentLang === "kr" ? "EN" : "\uD55C\uAD6D\uC5B4";
}

function renderCommon() {
  applyStaticText();
  renderNav();
  renderFooter();
  updateLangToggleLabel();
}

function setupMobileNav() {
  const header = document.querySelector(".site-header");
  const nav = document.getElementById("site-nav");
  if (!header || !nav) return;

  /* create hamburger button if not already present */
  if (!document.getElementById("nav-burger")) {
    const burger = document.createElement("button");
    burger.id = "nav-burger";
    burger.className = "nav-burger";
    burger.setAttribute("aria-label", "Menu");
    burger.innerHTML = "<span></span><span></span><span></span>";
    /* insert before header-right */
    const headerRight = header.querySelector(".header-right");
    if (headerRight) {
      header.insertBefore(burger, headerRight);
    } else {
      header.appendChild(burger);
    }

    burger.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      burger.classList.toggle("active", isOpen);
      burger.setAttribute("aria-expanded", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    /* close menu when a link is tapped */
    nav.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        burger.classList.remove("active");
        burger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderCommon();
  setupMobileNav();
  // 각 페이지 전용 렌더 함수가 있다면 실행 (page-*.js 에서 정의)
  if (typeof renderPage === "function") renderPage();

  const btn = document.getElementById("lang-toggle");
  if (btn) {
    btn.addEventListener("click", () => {
      currentLang = currentLang === "kr" ? "en" : "kr";
      localStorage.setItem(LANG_KEY, currentLang);
      renderCommon();
      if (typeof renderPage === "function") renderPage();
    });
  }
});
