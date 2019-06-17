/*function myVar(array) {
  console.log(myVar);
}

function a() {
  var myVar = 2;
  b();
}

var myVar = 1;
a(); //1*/

//Ejercicio ordenar un array de numeros aleatorios

// const array = ['1','4','3','6'];
//
// function myFunction(array) {
// var numArray = array.map(function(num){
//   return parseInt(num);
// })
// return numArray.sort();
// }
//
//
// console.log(myFunction(array));

//Ejercicio de suma de dos numeros

// function suma(num1, num2){
//   // this.num1;
//   // this.num2;
//   var resul = num1 + num2;
//
//   console.log("La suma del numero 1: " + num1 + " + La suma del numero 2: " + num2 + " Es:" + resul)
// }
//
// suma(6,8);



function func(){
  // this.name ='Juan';
  const obj = {
    name: 'Aldo',
    getName: function()  {
      return this.name;
    }
  };
  console.log(obj.getName());
}
 func();
