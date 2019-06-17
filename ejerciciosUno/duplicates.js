let duplicateArr = [1,2,3,4];
let sortArr = duplicateArr.join(' ');

let newArr = [];
for(let i = 0; i < sortArr.length; i++) {
  newArr.push(sortArr[i].repeat(Number(sortArr[i])));
  }

console.log(newArr);
