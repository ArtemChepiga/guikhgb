document.addEventListener("DOMContentLoaded", function () {
    // Мокап даних (зазвичай отримується з сервера)
    const books = [
        { title: "Книга 1", author: "Автор 1", genre: "Жанр 1" },
        { title: "Книга 2", author: "Автор 2", genre: "Жанр 2" },
        // Додайте більше книг за потреби
    ];

    const catalogSection = document.getElementById("content");

    // Вивід книг у каталозі
    books.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.innerHTML = `<h3>${book.title}</h3>
                              <p><strong>Автор:</strong> ${book.author}</p>
                              <p><strong>Жанр:</strong> ${book.genre}</p>`;
        catalogSection.appendChild(bookCard);
    });
});
