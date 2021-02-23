const prev = document.querySelector(".slider__arrow_prev");
const next = document.querySelector(".slider__arrow_next");
const arrItems = Array.from(document.querySelectorAll(".slider__item"));

const dots = Array.from(document.querySelectorAll(".slider__dot"));

let activIndex = arrItems.findIndex((item) => {
   if (item.className === "slider__item slider__item_active") {
      return true
   }
})
dots[activIndex].className = "slider__dot slider__dot_active";

next.onclick = function () {
   clearDots();
   activIndex++
   if (activIndex > (arrItems.length - 1)) {
      activIndex = 0;
   }
   arrItems[activIndex].className = "slider__item slider__item_active";
   dots[activIndex].className = "slider__dot slider__dot_active";

}
prev.onclick = function () {
   clearDots();
   activIndex--
   if (activIndex < 0) {
      activIndex = (arrItems.length - 1);
   }
   arrItems[activIndex].className = "slider__item slider__item_active";
   dots[activIndex].className = "slider__dot slider__dot_active";


}

for (let i = 0; i < dots.length; i++) {
   dots[i].onclick = function () {
      clearDots();
      this.className = "slider__dot slider__dot_active";
      let dotsIndex = dots.findIndex((item) => {
         if (item.className === "slider__dot slider__dot_active") {
            return true
         }
      })
      arrItems[dotsIndex].className = "slider__item slider__item_active";
      activIndex = dotsIndex;
   }
}

function clearDots() {
   dots.forEach(element => element.className = "slider__dot");
   arrItems.forEach(element => element.className = "slider__item");
}

