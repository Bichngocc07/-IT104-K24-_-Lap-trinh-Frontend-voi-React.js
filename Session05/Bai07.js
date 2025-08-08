class Book {
    constructor(id, title, author) {
        this._id = id;     
        this._title = title;
        this._author = author;
    }

 
    getId() {
        return this._id;
    }

  
    getInfo() {
        return `[${this._id}] "${this._title}" - ${this._author}`;
    }

  
    updateInfo(newTitle, newAuthor) {
        this._title = newTitle;
        this._author = newAuthor;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

   
    showBooks() {
        if (this.books.length === 0) {
            console.log("Thư viện hiện chưa có sách nào.");
        } else {
            console.log("Danh sách sách trong thư viện:");
            this.books.forEach((book, index) => {
                console.log(`${index + 1}. ${book.getInfo()}`);
            });
        }
    }

    updateBookById(id, newTitle, newAuthor) {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.updateInfo(newTitle, newAuthor);
            console.log(`✔ Sách có ID ${id} đã được cập nhật thành công.`);
        } else {
            console.log(`Không tìm thấy sách có ID ${id}.`);
        }
    }
}


const book1 = new Book(1, "Dế Mèn Phiêu Lưu Ký", "Tô Hoài");
const book2 = new Book(2, "Lão Hạc", "Nam Cao");
const book3 = new Book(3, "Không Gia Đình", "Hector Malot");
const book4 = new Book(4, "Những Người Khốn Khổ", "Victor Hugo");
const book5 = new Book(5, "Đắc Nhân Tâm", "Dale Carnegie");


const myLibrary = new Library();


myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook(book4);
myLibrary.addBook(book5);


console.log("Danh sách ban đầu:");
myLibrary.showBooks();


myLibrary.updateBookById(3, "Không Gia Đình (Bản Đặc Biệt)", "Hector Malot");


console.log("\nDanh sách sau khi sửa:");
myLibrary.showBooks();
