/* page-research.js */
function renderPage() {
  const introEl = document.getElementById("research-intro");
  if (introEl) introEl.textContent = t(LAB_DATA.research.introKr, LAB_DATA.research.introEn);

  /* ── Overview (큰 그림) ── */
  const ov = LAB_DATA.research.overview;
  const ovWrap = document.getElementById("research-overview");
  if (ovWrap && ov) {
    /* pipeline flow nodes */
    const flowHtml = ov.pillars
      .map((p, i) => {
        const connector = i < ov.pillars.length - 1
          ? '<div class="ov-flow-connector"></div>'
          : '';
        return `
          <div class="ov-flow-node">
            <span class="ov-node-circle">0${i + 1}</span>
            <span class="ov-node-label">${t(p.kr, p.en)}</span>
          </div>
          ${connector}`;
      })
      .join("");

    ovWrap.innerHTML = `
      <div class="research-overview">
        <div class="ov-top">
          <div class="ov-image">
            ${ov.image
              ? `<img src="${ov.image}" alt="${t(ov.titleKr, ov.titleEn)}">`
              : '<div class="ov-placeholder"><span>Image</span></div>'}
          </div>
          <div class="ov-content">
            <span class="ov-eyebrow">${t("연구 비전", "Research Vision")}</span>
            <h3 class="ov-title">${t(ov.titleKr, ov.titleEn)}</h3>
            <p class="ov-body">${t(ov.bodyKr, ov.bodyEn)}</p>
          </div>
        </div>
        <div class="ov-flow">${flowHtml}</div>
      </div>
    `;
  }

  /* ── Research topic accordion cards ── */
  const grid = document.getElementById("research-grid");
  if (!grid) return;
  grid.innerHTML = "";

  LAB_DATA.research.topics.forEach((topic, idx) => {
    const skills = currentLang === "kr" ? topic.skillsKr : topic.skillsEn;
    const summary = t(topic.summaryKr, topic.summaryEn);
    const body = t(topic.bodyKr, topic.bodyEn);
    const paragraphs = body.split("\n\n").filter(Boolean);

    const card = document.createElement("article");
    card.className = "research-card";
    card.setAttribute("data-index", idx);

    card.innerHTML = `
      <div class="rc-header" role="button" tabindex="0" aria-expanded="false">
        <div class="rc-header-text">
          <span class="tag">${t(topic.tagKr, topic.tagEn)}</span>
          <h3>${t(topic.titleKr, topic.titleEn)}</h3>
          <p class="rc-summary">${summary}</p>
        </div>
        <span class="rc-toggle" aria-hidden="true">
          <svg class="rc-chevron" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </div>
      <div class="rc-expand">
        <div class="rc-expand-inner">
          ${topic.imageUrl ? `
          <div class="rc-detail-image">
            <img src="${topic.imageUrl}" alt="${t(topic.titleKr, topic.titleEn)}">
          </div>` : ""}
          <div class="rc-detail-text">
            ${paragraphs.map(p => `<p>${p}</p>`).join("")}
            <ul class="skill-tags">${skills.map(s => `<li>${s}</li>`).join("")}</ul>
          </div>
        </div>
      </div>
    `;

    /* click/keyboard toggle */
    const header = card.querySelector(".rc-header");
    header.addEventListener("click", () => toggleCard(card));
    header.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleCard(card); }
    });

    grid.appendChild(card);
  });
}

function toggleCard(card) {
  const isOpen = card.classList.contains("open");
  const header = card.querySelector(".rc-header");
  const expandEl = card.querySelector(".rc-expand");
  const inner = expandEl.querySelector(".rc-expand-inner");

  if (isOpen) {
    /* collapse */
    expandEl.style.height = inner.offsetHeight + "px";
    expandEl.offsetHeight; /* force reflow */
    expandEl.style.height = "0";
    card.classList.remove("open");
    header.setAttribute("aria-expanded", "false");
  } else {
    /* expand */
    card.classList.add("open");
    header.setAttribute("aria-expanded", "true");
    const h = inner.offsetHeight;
    expandEl.style.height = "0";
    expandEl.offsetHeight; /* force reflow */
    expandEl.style.height = h + "px";
    /* after transition, let height be auto so it adapts to resizes */
    const onEnd = () => {
      expandEl.style.height = "auto";
      expandEl.removeEventListener("transitionend", onEnd);
    };
    expandEl.addEventListener("transitionend", onEnd);
  }
}
