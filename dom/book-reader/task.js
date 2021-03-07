const book = document.querySelector(".book");
const controls = Array.from(book.querySelectorAll(".font-size"));
const colorText = Array.from(book.querySelector(".book__control_color").querySelectorAll(".color"))
const colorBg = Array.from(book.querySelector(".book__control_background").querySelectorAll(".color"))

controls.forEach((item) => item.onclick = function () {
   controls.forEach((item) => item.classList.remove("font-size_active"));
   this.classList.add("font-size_active");
   if (this.classList.contains("font-size_small")) {
      cleanBook("book_fs-big", "book_fs-small");
      book.classList.add("book_fs-small");
   } else if (this.classList.contains("font-size_big")) {
      cleanBook("book_fs-big", "book_fs-small");
      book.classList.add("book_fs-big");
   } else {
      cleanBook("book_fs-big", "book_fs-small");
   }

   return false;
})

colorText.forEach((item) => item.onclick = function () {
   if (this.dataset.textColor) {
      const color = this.dataset.textColor;
      if (color === "black") {
         cleanBook("book_color-black", "book_color-gray", "book_color-whitesmoke");
         colorText.forEach((item) => item.classList.remove("color_active"));
         this.classList.add("color_active");
         book.classList.add("book_color-black");
      } else if (color === "gray") {
         cleanBook("book_color-black", "book_color-gray", "book_color-whitesmoke");
         colorText.forEach((item) => item.classList.remove("color_active"));
         this.classList.add("color_active");
         book.classList.add("book_color-gray");
      } else if (color === "whitesmoke") {
         cleanBook("book_color-black", "book_color-gray", "book_color-whitesmoke");
         colorText.forEach((item) => item.classList.remove("color_active"));
         this.classList.add("color_active");
         book.classList.add("book_color-whitesmoke");
      };
   };
   return false
});

colorBg.forEach((item) => item.onclick = function () {
   if (this.dataset.bgColor) {
      const bgColor = this.dataset.bgColor;
      if (bgColor === "black") {
         colorBg.forEach((item) => item.classList.remove("color_active"));
         this.classList.add("color_active");
         cleanBook("book_bg-black", "book_bg-gray", "book_bg-white");
         book.classList.add("book_bg-black");
      } else if (bgColor === "gray") {
         colorBg.forEach((item) => item.classList.remove("color_active"));
         this.classList.add("color_active");
         cleanBook("book_bg-black", "book_bg-gray", "book_bg-white");
         book.classList.add("book_bg-gray");
      } else if (bgColor === "white") {
         colorBg.forEach((item) => item.classList.remove("color_active"));
         this.classList.add("color_active");
         cleanBook("book_bg-black", "book_bg-gray", "book_bg-white");
         book.classList.add("book_bg-white");
      };
   }
   return false
});


function cleanBook(class1, class2, class3) {
   if (book.classList.contains(class1)) {
      book.classList.remove(class1);
   };
   if (book.classList.contains(class2)) {
      book.classList.remove(class2);
   };
   if (book.classList.contains(class3)) {
      book.classList.remove(class3);
   };
}

