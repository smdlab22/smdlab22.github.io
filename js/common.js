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

document.addEventListener("DOMContentLoaded", () => {
  renderCommon();
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
