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

const hasSameId = (item) => {
  return arr.filter((existingItem) => existingItem.id !== item.id);
};

const result = hasSameId({ id: '2', quantity: 2 });

const s = result.reduce((sum, curr) => {
 	const n = sum.some((item) => {
  	if(item.id === curr.id) {
      item.quantity += curr.quantity
      return true
    }
  })
  if(!n) {
    return [...sum,curr];
  } else {
    return [...sum];
  }
}, [])

console.log(s);
