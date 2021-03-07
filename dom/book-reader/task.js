const book = document.getElementById("book");

const controls = Array.from(document.querySelectorAll(".font-size"));
console.log(controls);
controls.forEach((item) => item.addEventListener("click", function () {
   console.log("11111");

}))



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
