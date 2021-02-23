const prev = document.querySelector(".slider__arrow_prev");
const next = document.querySelector(".slider__arrow_next");
const arrItems = Array.from(document.querySelectorAll(".slider__item"));
let activIndex = arrItems.findIndex((item) => {
   if (item.className === "slider__item slider__item_active") {
      return true
   }
})


next.onclick = function () {
   arrItems[activIndex].className = "slider__item";
   activIndex++
   if (activIndex > (arrItems.length - 1)) {
      activIndex = 0;
   }
   arrItems[activIndex].className = "slider__item slider__item_active";

}
prev.onclick = function () {
   arrItems[activIndex].className = "slider__item";
   activIndex--
   if (activIndex < 0) {
      activIndex = (arrItems.length - 1);
   }
   arrItems[activIndex].className = "slider__item slider__item_active";

}