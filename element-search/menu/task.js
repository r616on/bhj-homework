
const link = Array.from(document.querySelectorAll(".menu__link"));
for (let i = 0; i < link.length; i++) {
   if (link[i].nextElementSibling) {
      link[i].onclick = function () {
         if (this.nextElementSibling.classList.contains("menu_active")) {
            this.nextElementSibling.classList.remove("menu_active");
            return false;
         }
         let menu = this.closest(".menu_main");
         menu = menu.querySelectorAll(".menu_sub")

         for (let i = 0; i < menu.length; i++) {
            menu[i].className = "menu menu_sub";
         }
         if (this.nextElementSibling.classList.contains("menu_sub")) {
            this.nextElementSibling.classList.add("menu_active");;
         }
         return false;
      }

   }
}
