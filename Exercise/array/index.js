

var arrNum1 = [1, 3, 4, 5, 7, 8];
var arrNum2 = [2, 4, 5, 9, 13, 8];

function diffNumber(array1, array2) {
  return array1.filter(function (item) {
    return !array2.includes(item);
  });
}

const arrayObj1 = [
  { name: "John Doe", age: 30 },
  { name: "Jane Doe", age: 25 },
  { name: "Jane Doe", age: 85 },
];
const arrayObj2 = [
  { name: "John Doe", age: 30 },
  { name: "Doe", age: 25 },
];

function diffObject(array1, array2) {
  let result = [];
  for (let element of array1) {
    let found = false;
    for (let item of array2) {
      if (Object.keys(element).every(key => item[key] === element[key])) {
        found = true;
        break;
      }
    }
    if (!found) {
      result.push(element);
    }
  }
  return result;
}

var resultNum = [];
var resultObj = [];
resultNum = diffNumber(arrNum1 , arrNum2);
resultObj = diffObject(arrayObj1, arrayObj2);





