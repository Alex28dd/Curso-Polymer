const repeat = (str) => {
  let newString = '';
  str.forEach((element) => {
    newString += element.toString().repeat(element);
  });

  return newString.split('').join().split();
}

console.log(repeat([1,2,3,4]));

// let duplicateArr = [1,2,3,4];
// let sortArr = duplicateArr.join(' ');
//
// let newArr = [];
// for(let i = 0; i < sortArr.length; i++) {
//   newArr.push(sortArr[i].repeat(Number(sortArr[i])));
//   }
//
// console.log(newArr);
