/* page-research.js */
function renderPage() {
  const introEl = document.getElementById("research-intro");
  if (introEl) introEl.textContent = t(LAB_DATA.research.introKr, LAB_DATA.research.introEn);

  const grid = document.getElementById("research-grid");
  if (!grid) return;
  grid.innerHTML = "";
  LAB_DATA.research.topics.forEach((topic) => {
    const skills = currentLang === "kr" ? topic.skillsKr : topic.skillsEn;
    const card = document.createElement("article");
    card.className = "research-card";
    card.innerHTML = `
      <span class="tag">${t(topic.tagKr, topic.tagEn)}</span>
      <h3>${t(topic.titleKr, topic.titleEn)}</h3>
      <p>${t(topic.bodyKr, topic.bodyEn)}</p>
      <ul class="skill-tags">${skills.map((s) => `<li>${s}</li>`).join("")}</ul>
    `;
    grid.appendChild(card);
  });
}
