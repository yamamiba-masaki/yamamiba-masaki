"use strict"

let actual;
let expected;

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

1.
/**
 * @param {Array<number>} arrayOfNumbers 数値型の要素を持つ配列
 * @returns {number} 与えられた配列のすべての数字の合計
 */
function sumArray(arrayOfNumbers) {
  
    let result = 0; 
    
    for (const number of arrayOfNumbers) {
      result = result + number;
      console.log(result);
    }
    return result;
}    
test(sumArray([1, 2, 3, 4]), 10);

// さらにテストを書きましょう。

2.
/**
 * @param {Array<number>} numberArray 数値型の要素を持つ配列
 * @returns {number} 与えられた配列の全ての数字をかけ合わせた積 (product)
 */
function productArray(numberArray) {
  let result = 1;
  
  for (const number of numberArray) {
    result = result * number;
    console.log(result);
  }
  
  return result;
}

test(productArray([1, 2, 3, 4]), 24);




// さらにテストを書きましょう。
3.
/**
 * @param {Array<any>} 配列
 * @returns {boolean} 与えられた配列に "fun" という文字列が要素として入っているかどうかを表すブーリアン
 */
function hasFun() {
  // ここにコードを書きましょう。
}

actual = hasFun(["dog", 2, false, "fun", "hello"]);
expected = true;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = hasFun(["gift", 2, false, "run", "hello"]);
expected = false;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// さらにテストを書きましょう。
