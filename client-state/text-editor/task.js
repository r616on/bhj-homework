const editor = document.getElementById("editor");
const clear = document.getElementById("clear");
if (localStorage.editorValue) {
   editor.value = localStorage.editorValue;
};

editor.addEventListener("change", (e) => {
   localStorage.editorValue = editor.value;
   console.dir(localStorage.editorValue);
});
clear.addEventListener("click", (e) => {
   editor.value = "";
   localStorage.removeItem("editorValue");
})