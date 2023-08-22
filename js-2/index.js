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

const formatArray = (arr) => {
  return arr.reduce((acc, curr) => {
    if (acc[curr.id]) {
      acc[curr.id].quantity += curr.quantity;
    } else {
      acc[curr.id] = { quantity: curr.quantity };
    }
    return acc;
  }, {});
};

const mergeArray = (arr1, arr2) => {
  const formatArr1 = formatArray(arr1);
  const formatArr2 = formatArray(arr2);
  const newArray = [];
  for (const key in formatArr1) {
    if (formatArr2[key]) {
      const item = {
        id: key,
        quantity: formatArr2[key].quantity + formatArr1[key].quantity,
      };
      newArray.push(item);
    }
  }
  return newArray;
};

console.log(mergeArray(arr1, arr2));
