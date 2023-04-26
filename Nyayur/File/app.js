const openShopping = document.querySelector(".shopping");
const closeShopping = document.querySelector(".closeShopping");
const list = document.querySelector(".list");
const listCard = document.querySelector(".listCard");
const body = document.querySelector("body");
const total = document.querySelector(".total");
const quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: "Bayam",
    image: "bayam.png",
    price: 12000,
  },
  {
    id: 2,
    name: "Bawang Bombai",
    image: "bombai.png",
    price: 15000,
  },
  {
    id: 3,
    name: "Cabai",
    image: "cabai.png",
    price: 22000,
  },
  {
    id: 4,
    name: "Kentang",
    image: "kentang.png",
    price: 23000,
  },
  {
    id: 5,
    name: "Kol",
    image: "kol.png",
    price: 10000,
  },
  {
    id: 6,
    name: "Timun",
    image: "timun.png",
    price: 12000,
  },
  {
    id: 7,
    name: "Terong",
    image: "terong.png",
    price: 17000,
  },
  {
    id: 8,
    name: "Tomat",
    image: "tomat.png",
    price: 19000,
  },
  {
    id: 9,
    name: "Wortel",
    image: "wortel.png",
    price: 12000,
  },
];
let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Tambahkan Ke Keranjang</button>`;
    list.appendChild(newDiv);
  });
}
initApp();
function addToCard(key) {
  if (listCards[key] == null) {
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
}
function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
                </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}

function Beli() {
  confirm(
    "Terimakasih atas pembelian anda, transaksi anda akan segera diproses."
  );
}
