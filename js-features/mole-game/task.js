let win = 0;
let fail = 0;
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

for (let i = 1; i < 10; i++) {
   getHole(i).onclick = cheсkHole;
};

function getHole(index) {
   return document.getElementById(`hole${index}`)
}


function cheсkHole() {
   if (this.className === 'hole hole_has-mole') {
      win++;
      if (win === 10) {
         win = 0;
         fail = 0;
         alert("Победа!")
      };
   } else {
      fail++;
      if (fail === 5) {
         win = 0;
         fail = 0;
         alert("Поражение!")
      };
   }
   dead.innerText = win;
   lost.innerText = fail;
};






