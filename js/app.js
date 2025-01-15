const button = document.querySelector("#button");
const popup = document.querySelector("#popup");
button.addEventListener("click", () => {
  popup.style.display = popup.style.display === "none" ? "block" : "none";
});

document.getElementById("more-info-btn").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("workspace-choice").style.display = "none";
  document.getElementById("more-info").style.display = "block";
});

document.getElementById("done-info-btn").addEventListener("click", function () {
  document.getElementById("more-info").style.display = "none";
  document.getElementById("workspace-choice").style.display = "block";
});

document.getElementById("more-info-btn2").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("workspace-choice2").style.display = "none";
  document.getElementById("more-info2").style.display = "block";
});

document.getElementById("done-info-btn2").addEventListener("click", function () {
  document.getElementById("more-info2").style.display = "none";
  document.getElementById("workspace-choice2").style.display = "block";
});

document.getElementById("more-info-btn3").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("workspace-choice3").style.display = "none";
  document.getElementById("more-info3").style.display = "block";
});

document.getElementById("done-info-btn3").addEventListener("click", function () {
  document.getElementById("more-info3").style.display = "none";
  document.getElementById("workspace-choice3").style.display = "block";
});






const buttons = document.querySelectorAll(".card-top button");
const productNames = document.querySelectorAll(".card p");
const cartCounter = document.querySelector(".cart-counter");
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const viewAllButton = document.querySelector(".view-all button");
const productsContainer = document.querySelector(".cards");

productsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("add-to-cart")) {
    const button = event.target;
    const card = button.closest(".card");
    const img = card.querySelector("img").src;
    const name = card.querySelector("p").textContent;
    const price = card.querySelector("b").textContent;
    const product = { img, name, price };
    extraProducts.push(product);
  }
});

let cartCount = 0;
let extraProducts = [];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;
    productNames.forEach((name) => {
      name.textContent = buttonText;
    });
  });
});
addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cartCount++;
    cartCounter.textContent = cartCount;
  });
});
viewAllButton.addEventListener("click", () => {
  if (viewAllButton.textContent === "View All →") {
    for (let i = 0; i < 4; i++) {
      const newProduct = document.createElement("div");
      newProduct.classList.add("card");
      newProduct.innerHTML = `
      <div class="card">
        <div class="card-img">
            <img class="card-imgs" src="./assets/images/Group 3742 (3).png" alt="">
        </div>
        <div class="card-header">
            <p>
                Chair
            </p>
            <b>Nyantuy Chair</b>
            <img src="./assets/images/Group 172.png" alt="">
            <div class="card-bottom">
                <p>
                    $
                    921

                </p>
                <button class="add-to-cart"><img src="./assets/icons/bx_bx-plus.png" alt=""></button>
            </div>
        </div>
    </div>
      `

      productsContainer.appendChild(newProduct);
      extraProducts.push(newProduct);

      newProduct.querySelector(".add-to-cart").addEventListener("click", () => {
        cartCount++;
        cartCounter.textContent = cartCount;
      });
    }
    viewAllButton.textContent = "Hide ←";
  } else {
    extraProducts.forEach((product) => product.remove());
    extraProducts = [];
    viewAllButton.textContent = "View All →";
  }
});





var swiper = new Swiper(".mySwiper", {
  rewind: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});