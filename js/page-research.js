/* page-research.js */
function renderPage() {
  const introEl = document.getElementById("research-intro");
  if (introEl) introEl.textContent = t(LAB_DATA.research.introKr, LAB_DATA.research.introEn);

  /* ── Overview (큰 그림) ── */
  const ov = LAB_DATA.research.overview;
  const ovWrap = document.getElementById("research-overview");
  if (ovWrap && ov) {
    const pillarsHtml = ov.pillars
      .map((p, i) => {
        const arrow = i < ov.pillars.length - 1
          ? '<span class="ov-arrow"><svg width="20" height="12" viewBox="0 0 20 12"><path d="M0 6h16m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="1.5" fill="none"/></svg></span>'
          : '';
        return `<span class="ov-pillar"><span class="ov-num">0${i + 1}</span>${t(p.kr, p.en)}</span>${arrow}`;
      })
      .join("");
    ovWrap.innerHTML = `
      <div class="research-overview">
        <div class="ov-content">
          <h3 class="ov-title">${t(ov.titleKr, ov.titleEn)}</h3>
          <p class="ov-body">${t(ov.bodyKr, ov.bodyEn)}</p>
          <div class="ov-pillars">${pillarsHtml}</div>
        </div>
        <div class="ov-image">
          ${ov.image ? `<img src="${ov.image}" alt="${t(ov.titleKr, ov.titleEn)}">` : '<div class="ov-placeholder"><span>Image</span></div>'}
        </div>
      </div>
    `;
  }

  const grid = document.getElementById("research-grid");
  if (!grid) return;
  grid.innerHTML = "";
  LAB_DATA.research.topics.forEach((topic) => {
    const skills = currentLang === "kr" ? topic.skillsKr : topic.skillsEn;
    const card = document.createElement("article");
    card.className = "research-card";
    card.innerHTML = `
      <img class="research-img" src="${t(topic.imageUrlKr, topic.imageUrlEn)}" alt="${t(topic.titleKr, topic.titleEn)}">
      <div class="research-card-body">
        <span class="tag">${t(topic.tagKr, topic.tagEn)}</span>
        <h3>${t(topic.titleKr, topic.titleEn)}</h3>
        <p>${t(topic.bodyKr, topic.bodyEn)}</p>
        <ul class="skill-tags">${skills.map((s) => `<li>${s}</li>`).join("")}</ul>
      </div>
    `;
    grid.appendChild(card);
  });
}
