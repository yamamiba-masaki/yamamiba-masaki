"use strict"

// テスト関数
// function test(actual, expected) {
//   if (JSON.stringify(actual) === JSON.stringify(expected)) {
//       console.log("Test PASSED.");
//     } else {
//       console.error("Test FAILED. Keep trying!");
//       console.group("Result:");
//       console.log("  actual:", actual);
//       console.log("expected:", expected);
//       console.groupEnd();
//   }
// }
// 関数 getOddnNumbers を宣言してください。
/**
* @param {Array<number>} numArrays - 数値型の要素を持つ配列
* @returns {Array<number>} 与えられた配列の中の偶数だけを入れた配列
*/
// function getOddNumbers(numArrays) {
//     // ここにコードを書きましょう。
//     const ansArray = [];
    
//     for (const number of numArrays) {
//         if (number % 2 === 1) {
//           ansArray.push(number);
//           console.log(ansArray);
//         }
//     }
//     // console.log(ansArray);
//     return ansArray;
// }
// test(getOddNumbers([1, 2, 3, 4, 5, 6, 7, 8]), [1, 3, 5, 7]);
// // さらにテストを書きましょう。
// test(getOddNumbers([10, 11, 12, 13, 14, 15]), [ 11, 13, 15]);

/**
 * @param {Array<any>}  nameArrays 配列
 * @returns {boolean} 与えられた配列に "fun" という文字列が要素として入っているかどうかを表すブーリアン
 */
// function hasFun(nameArrays) {
//   for (const name of nameArrays) {
//     if (name === "fun") {
//       return true;
//     } 
      
//     } return false;      
// }
//   // ここにコードを書きましょう。


// test(hasFun(["dog", 2, false, "fun"]), true);
// test(hasFun(["gift", 2, false, "run", "hello"]), false);
// test(hasFun(["gift", 2, false, "run", "fun"]), true);
// test(hasFun(["gift", "fun", false, "fun", "hello"]), true);

// actual = hasFun(["dog", 2, false, "fun", true]);
// expected = true;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// actual = hasFun(["gift", 2, false, "run", "hello"]);
// expected = false;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// さらにテストを書きましょう。
/**
 * @param {Array<any>} booArrys 配列
 * @returns {boolean} 与えられた配列の要素がブーリアンだけかどうかを表すブーリアン
 */
// function containsOnlyBooleans(booArrays) {
//     const result = false;
  
//   for (const bool of booArrays) {
//       if (typeof bool !== "boolean") {
//       console.log(result);
//         return result;
//     }    
      
//     }   return true; 
// } 


// test(containsOnlyBooleans([true, false, true, false, false]), true);
// test(containsOnlyBooleans([true, false, true, "123", false]), false);
// test(containsOnlyBooleans([true, false, true, 11, false]), false);


// actual = containsOnlyBooleans([true, false, true, false, false]);
// expected = true;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// actual = containsOnlyBooleans([true, true, true, "not a boolean"]);
// expected = false;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// // さらにテストを書きましょう。

/**
 * @param {Array<number>} 数値型の要素を持つ配列
 * @returns {boolean} 与えられた配列が昇順になっているかを表すブーリアン
 */
// function isSorted() {
//   // ここにコードを書きましょう。
// }

// actual = isSorted([1, 2, 3]);
// expected = true;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// actual = isSorted([3, 2, 3]);
// expected = false;

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// // さらにテストを書きましょう。

// スコープ演習

function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.trace();
    console.groupEnd();
  }
}

// let word = "こんにちは！";

// function greet(name) {
//   let word = "おはよう！";
//   return name + "さん、" + word;
// }

// console.log(greet("りか"));

// let sum = 0;

// function sumArray(arrayOfNumbers) {
//   let sum = 0;//初期化
//   for (const number of arrayOfNumbers) {
//     // console.log(number)
     
//      sum += number;
//      console.log(sum)
//   }  return sum;
// } 

// test(sumArray([1, 2, 3]), 6);
// test(sumArray([10, 20, 30]), 60);
// test(sumArray([100, 200, 300]), 600);

let count = 0;
function counter(x) {
  // console.log(x);
  count = count + x;
  console.log(count);
  return count;
}

test(counter(3), 3);
test(counter(4), 7);
test(counter(5), 12);