/* page-team.js */
function initials(name) {
  return name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
}

function renderMemberCard(m) {
  const lines = currentLang === "kr" ? m.linesKr : m.linesEn;
  const card = document.createElement("div");
  card.className = "member-card";
  card.innerHTML = `
    <div class="avatar">${m.photo ? `<img src="${m.photo}" alt="${m.name}">` : initials(m.name)}</div>
    <div>
      <h3>${m.name}</h3>
      <span class="role">${t(m.titleKr, m.titleEn)}</span>
    </div>
    <ul>${lines.map((l) => `<li>${l}</li>`).join("")}</ul>
  `;
  return card;
}

function renderPage() {
  const pi = LAB_DATA.team.find((m) => m.role === "pi");
  const grads = LAB_DATA.team.filter((m) => m.role === "student");
  const ugrads = LAB_DATA.team.filter((m) => m.role === "undergraduate");
  const alumni = LAB_DATA.team.filter((m) => m.role === "alumni");

  /* ── PI ── */
  const piWrap = document.getElementById("team-pi");
  if (piWrap && pi) {
    const lines = currentLang === "kr" ? pi.linesKr : pi.linesEn;
    piWrap.innerHTML = `
      <div class="team-pi">
        <div class="avatar">${pi.photo ? `<img src="${pi.photo}" alt="${pi.name}">` : initials(pi.name)}</div>
        <div>
          <h3>${pi.name}</h3>
          <span class="role">${t(pi.titleKr, pi.titleEn)}</span>
          <ul>${lines.map((l) => `<li>${l}</li>`).join("")}</ul>
        </div>
      </div>
    `;
  }

  /* ── 대학원생 ── */
  const gradSection = document.getElementById("team-grad-section");
  const gradGrid = document.getElementById("team-grid");
  if (gradGrid) {
    gradGrid.innerHTML = "";
    grads.forEach((m) => gradGrid.appendChild(renderMemberCard(m)));
  }
  if (gradSection) gradSection.style.display = grads.length ? "" : "none";

  /* ── 학부연구생 ── */
  const ugradSection = document.getElementById("team-ugrad-section");
  const ugradGrid = document.getElementById("team-ugrad-grid");
  if (ugradGrid) {
    ugradGrid.innerHTML = "";
    ugrads.forEach((m) => ugradGrid.appendChild(renderMemberCard(m)));
  }
  if (ugradSection) ugradSection.style.display = ugrads.length ? "" : "none";

  /* ── Alumni ── */
  const alumniSection = document.getElementById("team-alumni-section");
  const alumniGrid = document.getElementById("team-alumni-grid");
  if (alumniGrid) {
    alumniGrid.innerHTML = "";
    if (alumni.length) {
      alumni.forEach((m) => alumniGrid.appendChild(renderMemberCard(m)));
    } else {
      alumniGrid.innerHTML = `<p class="team-empty">${t("준비 중입니다.", "Coming soon.")}</p>`;
    }
  }

  /* 섹션 라벨 언어 적용 */
  document.querySelectorAll(".team-section-label").forEach((el) => {
    el.textContent = currentLang === "kr" ? el.dataset.kr : el.dataset.en;
  });
}
