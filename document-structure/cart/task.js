const control = Array.from(document.querySelectorAll(".product__quantity-control"));
const productAdd = Array.from(document.querySelectorAll(".product__add"));
const cartProducts = document.querySelector(".cart__products");
const cart = document.querySelector(".cart");

control.forEach((item) => item.addEventListener("click", (e) => {
   const element = e.target;
   const perentElement = e.target.closest(".product__quantity-controls")
   const value = perentElement.querySelector(".product__quantity-value")
   if (element.classList.contains("product__quantity-control_dec")) {
      if (+value.textContent > 1) {
         +value.textContent--;
      }
   };
   if (element.classList.contains("product__quantity-control_inc")) {
      +value.textContent++;
   }

}));

productAdd.forEach((item) => item.addEventListener("click", (e) => {
   const perentElement = e.target.closest(".product");
   const img = perentElement.querySelector(".product__image")
   const value = perentElement.querySelector(".product__quantity-value");
   const cartProductsArr = Array.from(document.querySelectorAll(".cart__product"));
   let index = cartProductsArr.findIndex((item) => +item.dataset.id === +perentElement.dataset.id)

   if (!(cart.classList.contains("cart-active"))) {
      cart.classList.add("cart-active");
   };
   if (index === (-1)) {
      let productNode = document.createElement('div');
      productNode.className = "cart__product";
      productNode.dataset.id = perentElement.dataset.id;
      productNode.innerHTML = `<img class="cart__product-image" src="${img.src}">
                           <div class="cart__product-count">${value.textContent}</div>
                           <div class="cart__remove">x</div>
                           `;

      productNode.querySelector(".cart__remove").addEventListener("click", (e) => {
         const perentElement = e.target.closest(".cart__product");
         perentElement.remove();
      });
      cartProducts.append(productNode);
   } else {
      const presentCartCount = cartProductsArr[index].querySelector(".cart__product-count");
      presentCartCount.textContent = + presentCartCount.textContent + +value.textContent;
   }

}));

// Подскажите, мне кажется или этот скрипт заметно нагружает систему, и выполняется долго???