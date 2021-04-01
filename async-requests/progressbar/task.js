const progress = document.getElementById("progress");
const form = document.getElementById("form");
const send = document.getElementById("send");
const input = form.querySelector("input");
let totalSize = 0;
let loaded = 0;
send.addEventListener("click", (e) => {
   e.preventDefault();
   totalSize = input.files[0].size
   const data = new FormData(form);
   xhrRequest(data);

})

function xhrRequest(data) {
   xhr = new XMLHttpRequest();
   xhr.onprogress = function (e) {
      const onePercent = totalSize / 100;
      let uploadPercent = 0;
      loaded = e.loaded;
      uploadPercent = (loaded / onePercent) / 100;
      if (uploadPercent > 1) {
         uploadPercent = 1;
      }
      if (uploadPercent <= 1) {
         progress.value = uploadPercent;
      }


   }
   xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
   xhr.onload = respCall;
   xhr.send(data);
}
function respCall() {
   let response = null;
   if (xhr.status >= 400) {
      console.log("Err");
   } else {
      response = xhr.response;
   };

}