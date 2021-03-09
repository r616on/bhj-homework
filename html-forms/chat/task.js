const messages = document.querySelector('.chat-widget__messages');
const chatWiget = document.querySelector(".chat-widget");
const input = document.getElementById("chat-widget__input");
let masage = "";
let i = 0;
chatWiget.addEventListener("click", () => {
   chatWiget.classList.add("chat-widget_active");
   i++;
   if (i === 1) {
      robotMasage();
   }
});

const onChange = (e) => {
   masage = e.target.value;
};

const onEnter = (e) => {
   // console.log(e);
   if (e.key === "Enter") {
      if (masage.trim()) {
         messages.innerHTML += `
         <div class="message message_client">
             <div class="message__time">${getTime()}</div>
             <div class="message__text">${masage}</div>
         </div> `;
         input.value = "";
         masage = "";
         robotMasage();
      }
   }
}


input.addEventListener('keyup', onEnter);
input.addEventListener('change', onChange);

function robotMasage() {
   const robotMasageArr = [
      'Не пишите нам больше',
      'Мы вам ничего не должны, и не продадим',
      'До свидания',
      'Напишите нам через несколько лет',
      'Мы очень рады незнакомцам',
      'Добрый день, мы ещё не проснулись. Позвоните через 10 лет'
   ];
   let i = Math.floor(Math.random() * robotMasageArr.length);
   messages.innerHTML += `
   <div class="message">
    <div class="message__time">${getTime()}</div>
    <div class="message__text">${robotMasageArr[i]}
    </div>
    </div>
   `;
}
function getTime() {
   const data = new Date;
   let hours = data.getHours();
   if (hours < 10) {
      hours = `0${hours}`
   };
   let minut = data.getMinutes();
   if (minut < 10) {
      minut = `0${minut}`
   };
   return `${hours}:${minut}`
}