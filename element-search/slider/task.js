const prev = document.querySelector(".slider__arrow_prev");
const next = document.querySelector(".slider__arrow_next");
const arrItems = Array.from(document.querySelectorAll(".slider__item"));
const dots = Array.from(document.querySelectorAll(".slider__dot"));

let activIndex = arrItems.findIndex((item) => item.classList.contains("slider__item_active"))

activSlide(activIndex);

next.onclick = function () {
   clear(activIndex);
   activIndex++;
   if (activIndex > (arrItems.length - 1)) {
      activIndex = 0;
   }
   activSlide(activIndex);

}
prev.onclick = function () {
   clear(activIndex);
   activIndex--;
   if (activIndex < 0) {
      activIndex = (arrItems.length - 1);
   }
   activSlide(activIndex);
}

for (let i = 0; i < dots.length; i++) {
   dots[i].onclick = function () {
      clear(activIndex);
      this.classList.add("slider__dot_active");
      let dotsIndex = dots.findIndex((item) => item.classList.contains("slider__dot_active"))
      activSlide(dotsIndex);
      activIndex = dotsIndex;
   }
}

function clear(i) {
   dots[i].classList.remove("slider__dot_active")
   arrItems[i].classList.remove("slider__item_active")
}
function activSlide(i) {
   arrItems[i].classList.add("slider__item_active");
   dots[i].classList.add("slider__dot_active");
}

