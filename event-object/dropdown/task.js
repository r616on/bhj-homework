const value = Array.from(document.querySelectorAll(".dropdown__value"));
const item = Array.from(document.querySelectorAll(".dropdown__item"));

value.forEach(item => {
   item.onclick = function () {
      const list = this.closest(".dropdown").querySelector(".dropdown__list");
      list.classList.toggle("dropdown__list_active");
      return false
   }
})

item.forEach(item => {
   item.onclick = function () {
      const list = this.closest(".dropdown").querySelector(".dropdown__list");
      list.classList.toggle("dropdown__list_active");
      const dropValue = this.closest(".dropdown").querySelector(".dropdown__value");
      dropValue.textContent = this.firstElementChild.textContent;
      return false
   }
})