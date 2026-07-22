/* page-news.js */
function renderPage() {
  const list = document.getElementById("news-list");
  if (!list) return;
  list.innerHTML = "";
  LAB_DATA.news.forEach((item) => {
    const body = t(item.bodyKr, item.bodyEn);
    const li = document.createElement("li");
    li.className = "news-item";
    li.innerHTML = `
      <span class="date">${item.date}</span>
      <div>
        <h3>${t(item.titleKr, item.titleEn)}</h3>
        ${body ? `<p>${body}</p>` : ""}
      </div>
    `;
    list.appendChild(li);
  });
}
