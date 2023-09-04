// console.log("Hello World, from eksternal JS");

// // scope
// // Global scope

// // local scope
// function test() {
//   var variableInTest = "Good Night!";
//   console.log(variableInTest);
// }

// // let
// // let variableName

// // reassigned
// let testA = 'testA';
// console.log (testA);
// // let testA = 'New testA';
// // console.log (testA);

// function sgMirror(tinggi) {
//   for (let i = 0; i < tinggi; i++) {
//     let bintang = "";
//     for (let j = 0; j <= i; j++) {
//       bintang += "* ";
//     }
//     console.log(bintang);
//   }
// }

// sgMirror(5);

function sgMirror(tinggi) {
  for (let i = tinggi; i > 0; i--) {
    let bintang = "";
    for (let j = 0; j < i; j++) {
      bintang += "* ";
    }
    console.log(bintang);
  }
}

sgMirror(5);