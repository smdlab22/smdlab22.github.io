/* page-news.js */
function renderPage() {
  const list = document.getElementById("news-list");
  if (!list) return;
  list.innerHTML = "";

  /* sort news by date descending (newest first) */
  const sorted = [...LAB_DATA.news].sort((a, b) => {
    const pa = parseNewsDate(a.date);
    const pb = parseNewsDate(b.date);
    return pb - pa;
  });

  sorted.forEach((item, idx) => {
    const body = t(item.bodyKr, item.bodyEn);
    const hasImage = item.imageUrl && item.imageUrl.trim() !== "";
    const li = document.createElement("li");
    li.className = "news-item";

    li.innerHTML = `
      <span class="news-date">${item.date}</span>
      <div class="news-content">
        <div class="news-header">
          <div class="news-text">
            <h3>${t(item.titleKr, item.titleEn)}</h3>
            ${body ? `<p>${body}</p>` : ""}
          </div>
          ${hasImage ? `
          <button class="news-expand-btn" aria-expanded="false"
                  aria-label="${t('이미지 보기', 'View image')}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>` : ""}
        </div>
        ${hasImage ? `
        <div class="news-image-drawer" aria-hidden="true">
          <div class="news-image-inner">
            <img src="${item.imageUrl}" alt="${t(item.titleKr, item.titleEn)}" loading="lazy">
          </div>
        </div>` : ""}
      </div>
    `;

    /* accordion toggle */
    if (hasImage) {
      const btn = li.querySelector(".news-expand-btn");
      const drawer = li.querySelector(".news-image-drawer");
      btn.addEventListener("click", () => {
        const open = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", String(!open));
        drawer.setAttribute("aria-hidden", String(open));
        if (!open) {
          const inner = drawer.querySelector(".news-image-inner");
          drawer.style.maxHeight = inner.scrollHeight + "px";
        } else {
          drawer.style.maxHeight = "0";
        }
      });
    }

    list.appendChild(li);
  });
}

/* parse "2026.03" → 202603, "2024" → 202400 for sorting */
function parseNewsDate(str) {
  const parts = str.split(".");
  const y = parseInt(parts[0], 10) || 0;
  const m = parseInt(parts[1], 10) || 0;
  return y * 100 + m;
}
