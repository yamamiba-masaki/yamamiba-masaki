"use strict"


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

// function addOne(num) {
//   return num + 1;
// }

// test(addOne(5), 6);
// test(addOne(50), 51);

// function doSomething(value, action) {
//   return action(value);
// }

// function greeting(name) {
//   return `こんにちは、${name}さん！`;
// }

// // test(doSomething("田中", greeting()), "こんにちは、田中さん！"); // A
// test(doSomething("田中", greeting), "こんにちは、田中さん！"); // B


// let x = "Outside x";

// function bar() {
//   let x = "Inside x";
//   return "Bar!";
// }

// console.log(bar());
// console.log(x);

// function createDonationAccount() {
//   let donations = 0;

//   function addDonation() {
//     console.log(donations);
//     donations += 1;
//   }
//   console.log("寄付受付口座が作成されました。");
//   return addDonation;
// }
// const account = createDonationAccount()
// account();
// account();
// account();
// account();

/**
 * @param {number} x
 * @returns {(y: number) => number} 引数 y をとり、y に x を足した値を返す関数
 */
// コードを書き始めましょう
// function add(x) {
//   let number1 = x; //add(5)
//   function addFive(number2) {
//     console.log(number1);
//     console.log(number2);
    
//     return number1 + number2;
//   }
//   console.log(addFive);
//   console.log(add);
  
//   return addFive;
// }
// const addFive = add(5);
// test(addFive(1), 6);
// console.log(number2);

let counter = 0;

function makeCounter() {
  // let counter = 0;
  // console.log(counter);
  return function () {
    counter += 1;
    
    console.log(counter);
    return counter;
  };
}
// counter変数が外部で自由に変更される

const counterA = makeCounter();//counterAにmakeCounter()を代入
test(counterA(), 1);
test(counterA(), 2);

const counterB = makeCounter(); // 新しいカウンターを作りたい。
test(counterB(), 1);
test(counterB(), 2);

