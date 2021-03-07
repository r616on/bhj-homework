const row = Array.from(document.querySelectorAll(".rotator"));
for (let i = 0; i < row.length; i++) {
   row[i].rotator = Array.from(row[i].querySelectorAll(".rotator__case"));
   row[i].index = row[i].rotator.findIndex((item) => item.classList.contains("rotator__case_active"));
}
ads();
function ads() {
   for (let i = 0; i < row.length; i++) {
      row[i].rotator[row[i].index].classList.remove("rotator__case_active");
      row[i].index++;
      if (row[i].index > (row[i].rotator.length - 1)) {
         row[i].index = 0;
      }
      row[i].rotator[row[i].index].classList.add("rotator__case_active");
      const color = row[i].rotator[row[i].index].dataset.color;
      const timer = row[i].rotator[row[i].index].dataset.speed;
      row[i].rotator[row[i].index].style.color = color;
      row[i].timerId = setTimeout(ads, timer)
   }
}
/// Не понимаю почему с каждой этирацией ускоряется выполнение timeout