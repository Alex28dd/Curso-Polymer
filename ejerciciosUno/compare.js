// function cmp(section1,section2) {
//   // let str1 = section1.split(' ');
//   // let str2 = section2.split(' ');
//
//   const newStr = section1.localeCompare(secton2);
//
//   return newStr;
// }
//
// console.log(cmp('def','abc'));


let reduce = a => a.slice(1).join('.')||"0";

function cmp(section1,section2) {
  [section1, section2] = [section1.split('.'), section2.split('.')]
  if(section1[0] !== section2[0] ||
    section1.length === 1 && section2.length === 1) {
    return Math.sign((+section1[0]) - (+section2[0]));
  }
  return cmp(reduce(section1), reduce(section2));
}

console.log(cmp(1.1,2.2));
