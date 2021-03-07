const book = document.getElementById("book");

const controls = Array.from(book.querySelectorAll(".font-size"));
//console.log(controls);
controls.forEach((item) => item.onclick = function () {
   console.log(controls);

})



 // this.classList.add("font-size_active");
   // if (this.classList.contains("font-size_small")) {
   //    book.className = "book";
   //    book.classList.add("book_fs-small");
   // }
   // if (this.classList.contains("font-size_big")) {
   //    book.className = "book";
   //    book.classList.add("book_fs-big");
   // } else {
   //    book.className = "book";
   // }
