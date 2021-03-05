
const tab = Array.from(document.querySelectorAll(".tab"));



tab.forEach(item => {
   item.onclick = function () {
      const perent = this.closest(".tabs");
      const perentTab = Array.from(perent.querySelectorAll(".tab"));
      const perentTabContent = Array.from(perent.querySelectorAll(".tab__content"));
      let index = 0;

      perentTab.forEach((item) => item.classList.remove("tab_active"));
      this.classList.add("tab_active");
      index = perentTab.findIndex((item) => item.classList.contains("tab_active"));
      perentTabContent.forEach((item) => item.classList.remove("tab__content_active"));
      perentTabContent[index].classList.add("tab__content_active");

   }
})
