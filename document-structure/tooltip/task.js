const tooltip = Array.from(document.querySelectorAll(".has-tooltip"));
tooltip.forEach((element) => {
   element.addEventListener("click", tooltipClick);
   element.insertAdjacentHTML("afterEnd", `<div class='tooltip '>${element.title}</div>`);
});
const promptArr = Array.from(document.querySelectorAll(".tooltip"))

function tooltipClick(e) {
   e.preventDefault();
   const element = e.target;
   const prompt = element.nextElementSibling;

   let index = promptArr.findIndex((elem) => elem.classList.contains("tooltip_active"));
   prompt.classList.add("tooltip_active");
   if (index > -1) {
      promptArr[index].classList.remove("tooltip_active");
   };
   const elemСoordinates = element.getBoundingClientRect();
   const promptWidth = prompt.getBoundingClientRect();

   if (element.dataset.position === "bottom") {
      prompt.style.top = `${+elemСoordinates.top + (+elemСoordinates.height)}px`;
      prompt.style.left = `${+elemСoordinates.left}px`;
   } else if (element.dataset.position === "top") {
      prompt.style.top = `${+ elemСoordinates.top - (+ elemСoordinates.height) - 10}px`;
      prompt.style.left = `${+elemСoordinates.left}px`;
   } else if (element.dataset.position === "left") {
      prompt.style.top = `${+elemСoordinates.top}px`;
      prompt.style.left = `${+elemСoordinates.left - (+promptWidth.width)}px`;
   } else if (element.dataset.position === "right") {
      prompt.style.top = `${+elemСoordinates.top}px`;
      prompt.style.left = `${+elemСoordinates.right}px`;
   } else {
      prompt.style.top = `${+elemСoordinates.top + (+elemСoordinates.height)}px`;
      prompt.style.left = `${+elemСoordinates.left}px`;
   }



};
document.addEventListener("scroll", tooltipScroll);
function tooltipScroll(e) {

   promptArr.forEach((elem) => elem.classList.remove("tooltip_active"))
}