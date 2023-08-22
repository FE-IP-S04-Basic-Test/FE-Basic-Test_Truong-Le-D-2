const arr1 = [
  { id: '1', quantity: 2 },
  { id: '2', quantity: 2 },
  { id: '3', quantity: 3 },
  { id: '1', quantity: 3 }
];
const arr2 = [
  { id: '1', quantity: 2 },
  { id: '3', quantity: 2 }
];

const arr = arr1.concat(arr2);
const arrTam = () => {
  arr.filter((item) => {
    return item.id !== 1
  });
  return arr;
}

console.log(arrTam());

