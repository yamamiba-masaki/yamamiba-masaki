
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

function numberSquare(element) {
  // console.log(element);
  return element * element;
}

// function isMoreThan(element) {
//     return element > 25
//   }
  
  function doTheThing(array) {
    return array.map(numberSquare) ;
  
  }
// function doTheThing(array) {
//   return array.filter(isMoreThan)
// }



test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);



