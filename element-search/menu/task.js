
let i = 0;
const menuItem = document.querySelectorAll(".menu__item");
for (let i = 0; i < menuItem.length; i++) {
   menuItem[i].onclick = subMenuActiv;
}

function subMenuActiv() {

   if (this.querySelector(".menu_sub")) {
      clearMenuActiv();
      this.querySelector(".menu_sub").className = ("menu menu_sub  menu_active")
      return false;
   }


}
function clearMenuActiv() {
   const subMenu = document.querySelectorAll(".menu_sub");
   for (let i = 0; i < subMenu.length; i++) {
      subMenu[i].className = ("menu menu_sub")
   }
}
//console.log(menuItem);