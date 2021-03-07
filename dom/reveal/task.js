const reveal = Array.from(document.querySelectorAll(".reveal"));

window.addEventListener('scroll', function () {
   for (let i = 0; i < reveal.length; i++) {
      if (reveal[i].getBoundingClientRect().top > window.innerHeight) {
         reveal[i].classList.remove("reveal_active")
      }
      if (reveal[i].getBoundingClientRect().top < window.innerHeight) {
         reveal[i].classList.add("reveal_active")
      }
      if (reveal[i].getBoundingClientRect().bottom < 0) {
         reveal[i].classList.remove("reveal_active")
      }
   }
});
