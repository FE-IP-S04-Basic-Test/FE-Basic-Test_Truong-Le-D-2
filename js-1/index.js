const product = [
  {
    "id": 1,
    "name": "Trà sữa truyền thống",
    "price": 30000
  },
  {
    "id": 2,
    "name": "Trà sữa Thái xanh",
    "price": 32000
  },
  {
    "id": 3,
    "name": "Trà sữa đặc biệt",
    "price": 40000
  }
]

const sugar = [
  {
    "id": 1,
    "amount": 0,
    "label": "0%"
  },
  {
    "id": 2,
    "amount": 50,
    "label": "50%"
  },
  {
    "id": 3,
    "amount": 100,
    "label": "100%"
  }
]

const ice = [
  {
    "id": 1,
    "amount": 0,
    "label": "0%"
  },
  {
    "id": 2,
    "amount": 50,
    "label": "50%"
  },
  {
    "id": 3,
    "amount": 100,
    "label": "100%"
  }
]

// const addToCart = {
//   id: 1,
//   name: 'Trà sữa truyền thống',
//   price: 30000,
//   quantity: 1,
//   iceAmount: 0,
//   sugarAmount: 0,
// }

// const addToCart2 = {
//   id: 2,
//   name: 'Trà sữa thái xanh',
//   price: 40000,
//   quantity: 1,
//   iceAmount: 50,
//   sugarAmount: 50,
// }

// let arr = [];
// const addToCartAction = (item) => {
//   // const index = arr.findIndex(item.id);
//   // if (arr[index].includes(item.id)) {
//   //   arr[index].quantity++;
//   // } else {
//   arr.push({
//     id: item.id,
//     name: item.name,
//     price: item.price,
//     quantity: item.quantity,
//     iceAmount: item.iceAmount,
//     sugarAmount: item.sugarAmount,
//   });
//   return arr;
//   // }
// };

// addToCartAction(addToCart);
// console.log(addToCartAction(addToCart2));



const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnDescrease = $('.milktea-descrease-tt');
const btnInscrease = $('.milktea-inscrease-tt');
const numberProductTT = $('.milktea-bumber-tt');
const listPercentIce = $$('.percent-ice');
const listPercentSugar = $$('.percent-sugar');

let cart1 = {
  id: 1,
  number: 1,
  name: 'Trà sữa truyền thống',
  price: 30000,
  ice: 0,
  sugar: 0,
};

let numberProduct = 1;
numberProductTT.innerText = numberProduct;
let percentIce = 0;
let percentSugar = 0;

// btn descrease onclick add number product to cart
btnDescrease.addEventListener('click', function () {
  if (numberProduct >= 0) {
    numberProduct--;
    numberProductTT.innerText = numberProduct;
  } else {
    btnDescrease.disabled = 'true';
  }
  cart1.number = numberProduct;
})

// btn inscrease onclick add number product to cart
btnInscrease.addEventListener('click', function () {
  console.log('btnInscrease')
  numberProduct++;
  numberProductTT.innerText = numberProduct;
  cart1.number = numberProduct;
})


// check and add % ice to cart 
listPercentIce.forEach(function (item) {
  item.addEventListener('click', function () {
    cart1.ice = +item.value;
  })
})
// check and add % sugar to cart 
listPercentSugar.forEach(function (item) {
  item.addEventListener('click', function () {
    cart1.sugar = +item.value;

  })
})

const btnAddToCart = $('.btn-add-tt');
btnAddToCart.addEventListener('click', function (e) {

  

  let cartlocalStorage = JSON.parse(localStorage.getItem("cart")) || [];
  console.log('btnAddToCart');
  const product = cartlocalStorage.find((prd) => {
    console.log({prd, cart1});
    return prd.id === cart1.id && prd.sugar === cart1.sugar && prd.ice === cart1.ice
  })

  // console.log('aaaa', product);
  // if (cartlocalStorage.length) {

  // } else {
  //   cartlocalStorage.push()
  // }
  if(!product)
  {
    cartlocalStorage.push(cart1)
    console.log('cartlocalStorage.push');
  } else {
    product.number += cart1.number;
  }
  console.log('cart1', cart1);
  localStorage.setItem('cart', JSON.stringify(cartlocalStorage));

  // console.log(cart);
  // console.log(cartlocalStorage);
})



