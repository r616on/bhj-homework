const timer = document.getElementById("timer");


//Вариант №1
// function timerFunc() {
//       +timer.innerText--
//    if (+timer.innerText === 0) {
//       clearTimeout(interval);
//       alert("Вы победили в конкурсе!");

//    }
// }
function timerFunc() {
   let hours = +(timer.innerText[0] + timer.innerText[1]);
   let minut = +(timer.innerText[3] + timer.innerText[4]);
   let second = +(timer.innerText[6] + timer.innerText[7]);
   let totalTime = hours * 60 * 60 + minut * 60 + second;
   totalTime--;

   if (totalTime === 0) {
      clearTimeout(interval);
      alert("Вы победили в конкурсе!");
      const kitty = document.getElementById("kitty");
      kitty.href = "https://tattoo-stickers.ru/33034-large_default/hello-kitty-04.jpgi";
      kitty.click();
   }

   hours = Math.floor(totalTime / 60 / 60);
   if (hours < 10) {
      hours = `0${hours}`
   };
   minut = Math.floor((totalTime - (+hours) * 60 * 60) / 60);
   if (minut < 10) {
      minut = `0${minut}`
   }
   second = totalTime - (+hours) * 60 * 60 - (+minut) * 60;
   if (second < 10) {
      second = `0${second}`
   }
   timer.innerText = `${hours}:${minut}:${second}`;
}


let interval = setInterval(timerFunc, 1000);