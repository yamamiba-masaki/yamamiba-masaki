
'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//test
function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}


//1.


// ここにコードを書きましょう
//ヘルパー関数使うパターン
// function numberSquare(element) {
//   return element * element;
// } 
// function isMoreThan(element) {
//   return element <= 25;
// } 

// function doTheThing(array) {
//   return array
//   .map(numberSquare)
//   .filter(isMoreThan);
// }


// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);


// //短いコードで書く
function doTheThing(array) {
  return array
    .map((element) => element * element)
    .filter((element) => element <= 25);
}

test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);


//2.

//ここにコードを書きましょう 
// const array = [];
// function putItemInRefrigerator(object) {  //冷蔵庫に置く
//   // console.log(array);
//   return array.push(object);
// }
// //冷蔵庫から取る
// // function removeItemFromRefrigerator(object) {
// //   return array.unshift(object);

// // }


// //冷蔵庫から取る
// function getItemsInRefrigerator() {
// console.log(array);
//   return array
//     .map(putItemInRefrigerator)
//     // .map(removeItemFromRefrigerator);
// } 
// return array.map(putItemInRefrigerator);





// test(getItemsInRefrigerator(), []);

// putItemInRefrigerator("milk");
// test(getItemsInRefrigerator(), ["milk"]);

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), ["milk", "juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);