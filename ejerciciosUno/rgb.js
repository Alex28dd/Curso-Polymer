// const rgbToHex = (rgb) => {
//   const hex = Number(rgb).toString(16);
//   if(hex.length < 2) {
//     hex = '0' + hex;
//   }
//   return hex;
// }
//
// console.log(rgbToHex(255,255,255));

function rgb(r, g, b) {
  [r,g,b] = [r,g,b].map( a => a > 0 ? a : 0);
  [r,g,b] = [r,g,b].map( a => a > 255 ? 255 : a);
  return [r,g,b].map( a => (a > 9) ? a.toString(16) : "0" + a.toString()).join("").toUpperCase();
}

console.log(rgb(148,0,211));
