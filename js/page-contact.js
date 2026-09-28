/* page-contact.js */
function renderPage() {
  const s = LAB_DATA.site;
  const univEl = document.getElementById("contact-univ");
  const addrEl = document.getElementById("contact-address");
  const emailEl = document.getElementById("contact-email");
  if (univEl) univEl.textContent = t(s.universityKr, s.universityEn);
  if (addrEl) addrEl.textContent = t(s.addressKr, s.addressEn);
  const roomsEl = document.getElementById("contact-rooms");
  if (roomsEl && s.roomsKr) {
    const rooms = currentLang === "kr" ? s.roomsKr : s.roomsEn;
    roomsEl.innerHTML = rooms.map((r) => `<span>${r}</span>`).join("<br>");
  }
  if (emailEl) {
    emailEl.textContent = s.email;
    emailEl.href = `mailto:${s.email}`;
  }
}
