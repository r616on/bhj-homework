const control = Array.from(document.querySelectorAll(".product__quantity-control"));
const productAdd = Array.from(document.querySelectorAll(".product__add"));
const cartProducts = document.querySelector(".cart__products");


control.forEach((item) => item.addEventListener("click", (e) => {
   const element = e.target;
   const perentElement = e.target.closest(".product__quantity-controls")
   const value = perentElement.querySelector(".product__quantity-value")
   if (element.classList.contains("product__quantity-control_dec")) {
      if (+value.textContent > 0) {
         +value.textContent--;
      }
   };
   if (element.classList.contains("product__quantity-control_inc")) {
      +value.textContent++;
   }

}));

productAdd.forEach((item) => item.addEventListener("click", (e) => {
   const element = e.target;
   const perentElement = e.target.closest(".product");
   const img = perentElement.querySelector(".product__image")
   const value = perentElement.querySelector(".product__quantity-value");

   const cartProductsArr = Array.from(document.querySelectorAll(".cart__product"));
   let index = cartProductsArr.findIndex((item) => +item.dataset.id === +perentElement.dataset.id)
   console.log(index);

   if (index === (-1)) {
      let productNode = document.createElement('div');
      productNode.innerHTML = `<div class="cart__product" data-id="${perentElement.dataset.id}">
                           <img class="cart__product-image" src="${img.src}">
                           <div class="cart__product-count">${value.textContent}</div>
                           </div>`;
      cartProducts.append(productNode);
   } else {
      const presentCartCount = cartProductsArr[index].querySelector(".cart__product-count");
      presentCartCount.textContent = + presentCartCount.textContent + +value.textContent;
   }

}))