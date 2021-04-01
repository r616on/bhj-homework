const title = document.querySelector(".poll__title");
const pollRow = document.querySelector(".poll__answers");
let xhr;

let indexQues = 0;
let indexAnswers = 0;
let pollArr = [];
const getQuestion = {
   url: "https://netology-slow-rest.herokuapp.com/poll.php",
   metod: "GET",
   onload: respCall,
   send: "",
   setRequestHeader: "",
};


function xhrRequest(object) {
   xhr = new XMLHttpRequest();
   xhr.open(object.metod, object.url);
   if (object.setRequestHeader) {
      xhr.setRequestHeader(object.setRequestHeader.ContentType, object.setRequestHeader.type);
   };
   xhr.onload = object.onload;
   xhr.send(object.send);
}
function respCall() {
   let response = null;
   if (xhr.status >= 400) {
      console.log("Err");
   } else {
      response = xhr.response;
   };
   if (response) {
      response = JSON.parse(response);
      indexQues = response.id;
      pollArr = response.data.answers;
      title.innerText = response.data.title;

      pollArr.forEach(element => {
         pollRow.append(createPoll(element))
      });
   }

};

function createPoll(text) {
   let poll = document.createElement("button");
   poll.className = "poll__answer";
   poll.innerText = text;
   return poll;
}
function createAnswer(object) {
   let Answer = document.createElement("div");
   Answer.className = "poll";
   Answer.innerText = `${object.answer} : ${object.votes}`;
   return Answer;
}
document.addEventListener("click", (e) => {
   const element = e.target;
   if (element.classList.contains("poll__answer")) {
      alert("Спасибо, ваш голос засчитан!");
      indexAnswers = pollArr.findIndex((item) => {
         if (item === element.innerText) {
            return true
         }
         /// Обьясните, почему без if не работает, я всю голову сломал.
      });
      const getResult = {
         url: "https://netology-slow-rest.herokuapp.com/poll.php",
         metod: 'POST',
         onload: answer,
         send: `vote=${indexQues}&answer=${indexAnswers}`,
         setRequestHeader: {
            ContentType: 'Content-type',
            type: 'application/x-www-form-urlencoded',
         }
      }
      xhrRequest(getResult);


   }
});

function answer() {
   if (xhr.status >= 400) {
      console.log("Err");
   } else {
      response = xhr.response;
   };
   response = JSON.parse(response);
   const answerArr = response.stat;
   const pollArrAnswer = Array.from(pollRow.querySelectorAll(".poll__answer"));
   pollArrAnswer.forEach((item => { item.remove() }));
   answerArr.forEach((item) => pollRow.append(createAnswer(item)))

};
xhrRequest(getQuestion);

