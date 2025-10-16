function renderBooks() {
  const tbody = document.getElementById('book-list');
  tbody.innerHTML = '';

  books.forEach((book, index) => {
    const tr = document.createElement('tr');

    const titleTd = document.createElement('td');
    titleTd.textContent = book.title;
    tr.appendChild(titleTd);

    const authorTd = document.createElement('td');
    authorTd.textContent = book.author;
    tr.appendChild(authorTd);

    const actionsTd = document.createElement('td');

    const editBtn = document.createElement('button');
    editBtn.textContent = "Modifier titre";

    editBtn.onclick = () => {
      const nouveauTitre = prompt("Entrez le nouveau titre :", book.title);

      if (nouveauTitre !== null && nouveauTitre.trim() !== "") {
        titleTd.textContent = nouveauTitre.trim();
      }
    };

    actionsTd.appendChild(editBtn);

    actionsTd.appendChild(editBtn);

    tr.appendChild(actionsTd);

    tbody.appendChild(tr);
  });
}

renderBooks();
