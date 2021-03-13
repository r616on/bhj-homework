const check = Array.from(document.querySelectorAll(".interest__check"));
const check1 = Array.from(document.querySelectorAll(".interest"));



check.forEach(element => {
   element.addEventListener("click", func);
});


function func(e) {
   const checkAktiv = e.target;
   const perent = checkAktiv.closest(".interest");
   if (perent.querySelector(".interests_active")) {
      const arr = Array.from(perent.querySelector(".interests_active").querySelectorAll(".interest__check"))
      arr.forEach((element) => element.checked = e.target.checked)
   }
};
