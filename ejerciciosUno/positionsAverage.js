// const median = arr => {
//   const mid = Math.floor(arr.length / 2),
//     nums = [...arr].sort((a, b) => a - b);
//   return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
// };
// console.log(median([5, 6, 50, 1, -5]));
// console.log(median([1, 2, 3, 4, 5]));

 // const pos_average = (s1, s2, s3) => {
 //   let n = (n >= 2)
 // }

 function posAverage(str) {
   let arr = str.split(/,\W/), pos = 0, total = 0;
   for (let i = 0; i < arr.length; i++) {
     for (let j = i + 1; j < arr.length; j++) {
       for (let k = 0; k < arr[i].length; k++) {
         if (arr[i][k] === arr[j][k]) pos++
         total++
       }
     }
   }
   return (100 * pos / total);
 }

 console.log(posAverage("444996, 699990, 666690, 096904, 600644, 640646, 606469, 409694, 666094, 606490"));
