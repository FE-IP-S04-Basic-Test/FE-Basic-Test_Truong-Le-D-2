const products = [
  {
    id: 1,
    name: "Trà sữa truyền thống",
    price: 30000,
  },
  {
    id: 2,
    name: "Trà sữa Thái xanh",
    price: 32000,
  },
  {
    id: 3,
    name: "Trà sữa đặc biệt",
    price: 40000,
  },
];

const sugars = [
  {
    id: 1,
    amount: 0,
    label: "0%",
  },
  {
    id: 2,
    amount: 50,
    label: "50%",
  },
  {
    id: 3,
    amount: 100,
    label: "100%",
  },
];

const ices = [
  {
    id: 1,
    amount: 0,
    label: "0%",
  },
  {
    id: 2,
    amount: 50,
    label: "50%",
  },
  {
    id: 3,
    amount: 100,
    label: "100%",
  },
];

const productList = document.querySelector(".product_list");
const cartList = document.querySelector(".cart_list");
const carts = [];

function addToCart(productId, iceId, sugarId, total) {
  const product = products.find((item) => {
    return item.id === Number(productId);
  });
  const ice = ices.find((item) => item.id === Number(iceId));
  const sugar = sugars.find((item) => item.id === Number(sugarId));
  carts.push({
    quantity: total,
    title: product.name,
    desc: `Ice ${ice.label} - Sugar ${sugar.label}`,
    unitPrice: product.price,
    totalUnitPrice: product.price * total,
  });
}

function renderOption(data) {
  return data
    .map((item, index) => {
      return `<li data-id="${item.id}" class="percent_item ${
        index === 0 ? "active" : ""
      }">${item.label}</li>`;
    })
    .join("");
}

function renderProducts() {
  const html = products.map((item) => {
    return `<div id="${item.id}" class="product_item">
    <h4 class="product-title mb-10">
        ${item.name}
    </h4>
    <p class="product_price mb-10">
        ${item.price}
    </p>
    <div class="product_count mb-10">
        <p class="product_count_title">Quantity</p>
        <p class="product_minus product_change">-</p>
        <p class="product_quantity">0</p>
        <p class="product_plus product_change">+</p>
    </div>
    <div class="product_option">
        <p class="option_title mb-10">
            Ice
        </p>
        <div class="product_percent mb-10">
            <ul class="percent_list ice">
                ${renderOption(ices)}
            </ul>
        </div>
    </div>
    <div class="product_option">
        <p class="option_title mb-10">
            Sugar
        </p>
        <div class="product_percent mb-10">
            <ul class="percent_list sugar">
              ${renderOption(sugars)}
            </ul>
        </div>
    </div>
    <button class="product_add">ADD TO CART</button>
</div>`;
  });
  productList.innerHTML = html.join("");
}

function renderCarts() {
  const html = carts.map((item) => {
    return `<div class="cart_item">
    <p class="cart_quantity">${item.quantity} X</p>
    <img class="cart_img" src="./milktea.png" alt="">
    <div class="cart_info">
        <p class="cart_title">${item.title}</p>
        <p class="cart_desc">${item.desc}</p>
        <div class="cart_price">
            <p class="cart_unit_price">${item.unitPrice}</p>
            <p class="cart_total_unit_price">${item.totalUnitPrice}</p>
        </div>
    </div>
</div>`;
  });
  console.log(html);
  cartList.innerHTML = html.join("");
}

function handleChooseOption() {
  const percentList = document.querySelectorAll(".percent_list");
  percentList.forEach((precent) => {
    const optionList = precent.querySelectorAll(".percent_item");
    optionList.forEach((option) => {
      option.onclick = function () {
        optionList.forEach((option) => {
          option.classList.remove("active");
        });
        option.classList.add("active");
      };
    });
  });
}

function handleChangeQuantity() {
  const productCount = document.querySelectorAll(".product_count");
  productCount.forEach((item) => {
    const minus = item.querySelector(".product_minus");
    const plus = item.querySelector(".product_plus");
    const quantity = item.querySelector(".product_quantity");
    minus.onclick = function () {
      if (Number(quantity.textContent) > 0) {
        quantity.textContent = Number(quantity.textContent) - 1;
      }
    };
    plus.onclick = function () {
      quantity.textContent = Number(quantity.textContent) + 1;
    };
  });
}

function handleAddToCart() {
  const productAdd = document.querySelectorAll(".product_add");
  const productListEl = document.querySelectorAll(".product_item");
  productAdd.forEach((item, index) => {
    item.onclick = function () {
      const productId = productListEl[index].id;
      const sugarId = getIdOption(productListEl, index, "sugar");
      const iceId = getIdOption(productListEl, index, "ice");
      const total = Number(
        productListEl[index].querySelector(".product_quantity").textContent
      );
      addToCart(productId, iceId, sugarId, total);
      renderCarts();
      renderCartTotal();
    };
  });
}

function getIdOption(productListEl, index, type) {
  let id;
  productListEl[index]
    .querySelectorAll(`.percent_list.${type} li`)
    .forEach((li) => {
      if (li.className.includes("active")) {
        id = li.dataset.id;
      }
    });
  return id;
}

function renderCartTotal() {
  const total = carts.reduce((sum, curr) => {
    return {
      quantity: sum.quantity + Number(curr.quantity),
      price: sum.price + Number(curr.totalUnitPrice)
    }
  }, {
    quantity: 0,
    price: 0
  })
  const cartFooter = document.querySelector(".cart_footer");
  cartFooter.innerHTML = `<p class="cart_total_quantity">
  Total ${total.quantity} products
</p>
<p class="cart_total_price">${total.price}VND</p>`;
}

renderProducts();
renderCarts();
renderCartTotal();
handleChooseOption();
handleChangeQuantity();
handleAddToCart();
