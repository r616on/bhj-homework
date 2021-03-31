let response = null;
const rowItems = document.getElementById("items");
const imageLoad = document.querySelector(".loader")
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com");
xhr.onload = respCall;
if (localStorage.responseArr) {
   imageLoad.classList.remove("loader_active");
   const localArr = JSON.parse(localStorage.responseArr);
   localArr.forEach((item) => {
      rowItems.append(createElement(item));
   })
}
function respCall() {
   let response = null;
   const item = Array.from(rowItems.querySelectorAll(".item"));
   if (xhr.status >= 400) {
      console.log("Err");
   } else {
      response = xhr.response;
   };

   let responseArr = [];
   response = JSON.parse(response);
   let objResponse = response.response.Valute;
   for (let key in objResponse) {
      responseArr.push({
         CharCode: objResponse[key].CharCode,
         Value: objResponse[key].Value,
      })
   }
   localStorage.responseArr = JSON.stringify(responseArr);
   if (imageLoad.classList.contains("loader_active")) {
      imageLoad.classList.remove("loader_active");
   }
   if (item.length > 0) {
      item.forEach((item) => item.remove())
   }
   responseArr.forEach((item) => {
      rowItems.append(createElement(item));
   })

};
xhr.send();

function createElement(object) {
   let item = document.createElement('div');
   item.className = "item";
   item.innerHTML = `<div class="item__code">
                           ${object.CharCode}
                     </div>
                     <div class="item__value">
                           ${object.Value}
                     </div>
                     <div class="item__currency">
                        руб.
                     </div>
                        `;
   return item
}