/* page-team.js */
function initials(name) {
  return name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
}

function renderPage() {
  const pi = LAB_DATA.team.find((m) => m.role === "pi");
  const students = LAB_DATA.team.filter((m) => m.role !== "pi");

  const piWrap = document.getElementById("team-pi");
  if (piWrap && pi) {
    const lines = currentLang === "kr" ? pi.linesKr : pi.linesEn;
    piWrap.innerHTML = `
      <div class="team-pi">
        <div class="avatar">${initials(pi.name)}</div>
        <div>
          <h3>${pi.name}</h3>
          <span class="role">${t(pi.titleKr, pi.titleEn)}</span>
          <ul>${lines.map((l) => `<li>${l}</li>`).join("")}</ul>
        </div>
      </div>
    `;
  }

  const grid = document.getElementById("team-grid");
  if (!grid) return;
  grid.innerHTML = "";
  students.forEach((m) => {
    const lines = currentLang === "kr" ? m.linesKr : m.linesEn;
    const card = document.createElement("div");
    card.className = "member-card";
    card.innerHTML = `
      <div class="avatar">${initials(m.name)}</div>
      <div>
        <h3>${m.name}</h3>
        <span class="role">${t(m.titleKr, m.titleEn)}</span>
      </div>
      <ul>${lines.map((l) => `<li>${l}</li>`).join("")}</ul>
    `;
    grid.appendChild(card);
  });
}
