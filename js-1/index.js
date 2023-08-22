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

const addToCart = {
  id: 1,
  name: 'Trà sữa truyền thống',
  price: 30000,
  quantity: 1,
  iceAmount: 0,
  sugarAmount: 0,
}

const addToCart2 = {
  id: 2,
  name: 'Trà sữa thái xanh',
  price: 40000,
  quantity: 1,
  iceAmount: 50,
  sugarAmount: 50,
}

var arr = [];
const addToCartAction = (item) => {
  // const index = arr.findIndex(item.id);
  // if (arr[index].includes(item.id)) {
  //   arr[index].quantity++;
  // } else {
  arr.push({
    id: item.id,
    name: item.name,
    price: item.price,
    quantity: item.quantity,
    iceAmount: item.iceAmount,
    sugarAmount: item.sugarAmount,
  });
  return arr;
  // }
};

addToCartAction(addToCart);
console.log(addToCartAction(addToCart2));
