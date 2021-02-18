const clickerCounter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
const speed = document.getElementById("clicker__speed");
let click = 0;
let speedClick = 0

let oldTime = new Date;
oldTime = oldTime.getTime();

cookie.onclick = function () {
   click++;
   clickerCounter.innerText = click;
   if (cookie.width === 200) {
      cookie.width = 300;
   } else {
      cookie.width = 200;
   };
   let realTime = new Date;
   realTime = realTime.getTime();
   speedClick = realTime - oldTime;
   oldTime = realTime;
   speedClick = 1 / (speedClick / 1000);
   speedClick = speedClick.toFixed(2);
   speed.innerText = speedClick;

}