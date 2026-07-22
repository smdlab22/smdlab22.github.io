window.PUB_PLACEHOLDER_ICON = `<span class="pub-thumb-placeholder" aria-hidden="true"><svg viewBox="0 0 24 24" width="20" height="20" fill="none"><rect x="3" y="4" width="18" height="14" rx="1.5" stroke="currentColor" stroke-width="1.4"/><circle cx="8.5" cy="9.5" r="1.5" stroke="currentColor" stroke-width="1.4"/><path d="M3 15l5-4 4.5 4L17 11l4 4.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>`;

/* page-publications.js */
function renderPubList(containerId, items) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = "";
  const total = items.length;
  items.forEach((pub, idx) => {
    const li = document.createElement("li");
    // 이미지가 있으면 썸네일로, 없거나 불러오기에 실패하면 기본 아이콘으로 표시
    const thumb = pub.image
      ? `<img src="${pub.image}" alt="" loading="lazy" onerror="this.outerHTML = window.PUB_PLACEHOLDER_ICON;">`
      : PUB_PLACEHOLDER_ICON;
    li.innerHTML = `
      <span class="pub-thumb">${thumb}</span>
      <span class="year">${total - idx}. ${pub.year}</span>
      <span class="pub-text">${pub.text}</span>
    `;
    el.appendChild(li);
  });
}

let pubTabsBound = false;
function initPubTabs() {
  if (pubTabsBound) return;
  pubTabsBound = true;
  document.querySelectorAll(".pub-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".pub-tab").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      document.querySelectorAll(".pub-list").forEach((list) => {
        list.hidden = list.id !== btn.dataset.target;
      });
    });
  });
}

function renderPage() {
  renderPubList("pub-international", LAB_DATA.publications.international);
  renderPubList("pub-before", LAB_DATA.publications.beforeInha);
  initPubTabs();
}
