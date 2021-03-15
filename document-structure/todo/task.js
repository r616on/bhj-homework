const input = document.querySelector(".tasks__input");
const add = document.querySelector(".tasks__add");
const list = document.getElementById("tasks__list");

add.addEventListener("click", addTasks);
function addTasks(e) {
   e.preventDefault();
   if (input.value.trim()) {
      let child = document.createElement("div");
      child.className = "task";
      child.innerHTML = `<div class="task__title">
          ${input.value}
      </div>
      <a href="#" class="task__remove">&times;</a>`
      const del = child.querySelector(".task__remove");
      del.addEventListener("click", (e) => {
         e.preventDefault();
         const perent = e.target.closest(".task");
         perent.remove();
      })
      list.append(child);
      input.value = "";
   }
}
