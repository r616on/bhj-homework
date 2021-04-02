const close = document.querySelector(".modal__close");
const modal = document.querySelector(".modal");
if (!getCookie("Modal")) {
   modal.classList.add("modal_active");
}
close.addEventListener("click", (e) => {
   modal.classList.remove("modal_active");
   document.cookie = 'Modal=' + '1' + '; Expires=Mon, 20 May 2021 00:00:00 GMT;'
})
function getCookie(name) {
   const cookies = document.cookie.split("; ");
   for (const c of cookies) {
      const [key, value] = c.split("=")
      if (key === name) {
         return value
      }
   }
   return undefined
}
