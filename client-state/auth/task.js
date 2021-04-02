const signinRow = document.querySelector(".signin");
const btnSignin = document.getElementById("signin__btn");
const btnExit = document.getElementById("exit__btn");
const welcome = document.querySelector(".welcome");
const UserId = document.getElementById("user_id");
const form = document.getElementById("signin__form");

if (localStorage.user) {
   welcome.classList.add("welcome_active");
   UserId.innerText = localStorage.user;
} else {
   signinRow.classList.add("signin_active");
};

btnSignin.addEventListener("click", (e) => {
   e.preventDefault();
   let data = new FormData(signin__form);
   xhrRequest(data);
});
btnExit.addEventListener("click", (e) => {
   localStorage.removeItem("user");
   signinRow.classList.add("signin_active");
   welcome.classList.remove("welcome_active");
});


function xhrRequest(object) {
   xhr = new XMLHttpRequest();
   xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
   xhr.responseType = ("json");
   xhr.onload = respCall;
   xhr.send(object);
};

function respCall() {
   let response = null;
   if (xhr.status >= 400) {
      console.log("Err");
      alert("Ошибка авторизации");
   } else {
      response = xhr.response;
   };
   if (response.success) {
      form.reset();
      localStorage.user = response.user_id;
      signinRow.classList.remove("signin_active");
      welcome.classList.add("welcome_active");
      UserId.innerText = response.user_id;
   } else {
      form.reset()
      alert("Неверный логин/пароль");
   };
};