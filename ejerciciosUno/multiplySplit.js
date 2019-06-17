// let multi = (str, characters) => {
//   for(let i = 0 ; i < str.length; i++) {
//     str[i]= str.replace(characters);
//   }
//     return multi;
// }
//
// console.log(multi('1+2-3', ['+', '-']));


// const multipleSplit = (str,del) => del ? str.split(new RegExp(del.map(el => '\\' + el).toString().replace(/,/g,'|'),'gi')).filter(el => el ):str.split().filter(el => el);
//
// console.log(multipleSplit(1+2-3, '+','-'));
const multi = (str) => {
  //const space = str.replace(/'hi'/gi, 'bye');
  const dig =  str.replace(/\D/gi, '');

  return dig;
}

console.log(multi('1+3-4%6&3'));
