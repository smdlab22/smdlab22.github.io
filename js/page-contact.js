/* page-contact.js */
function renderPage() {
  const s = LAB_DATA.site;
  const univEl = document.getElementById("contact-univ");
  const addrEl = document.getElementById("contact-address");
  const emailEl = document.getElementById("contact-email");
  if (univEl) univEl.textContent = t(s.universityKr, s.universityEn);
  if (addrEl) addrEl.textContent = t(s.addressKr, s.addressEn);
  if (emailEl) {
    emailEl.textContent = s.email;
    emailEl.href = `mailto:${s.email}`;
  }
}
