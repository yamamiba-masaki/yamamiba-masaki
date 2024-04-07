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


// const isEven = (array, boolean) => {
//   const result = [];
//   if (boolean === true) {
//     for (const num of array) {
//       if (num % 2 === 0) {
//         result.push(num);
//         console.log(result);
//       }
//     }
//   } else {
//     for (const num of array) {
//       if (num % 2 === 1 || num % 2 === -1) {
//         result.push(num);
//         console.log(result);
//       }
//     }
//   } return result;
// }


// test(isEven([1, 2, 3, 4, 5, -6], true), ([2, 4, -6]));
// test(isEven([1, 2, 3, 4, 5, -6, -7], false), ([1, 3, 5, -7]));
// test(isEven([1, 2, 3, 4, 5, -6], true), ([2, 4, -6]));
// test(isEven([1, 2, 3, 4, 5, -6], true), ([2, 4, -6]));
// test(isEven([1, 2, 3, 4, 5, -6, 44], true), ([2, 4, -6, 44]));

//followup assessment

//1.
// ここにコードを書きましょう
// const evenOrOdd = (array, boolean) => {
//   const result = [];
//   if (boolean === true) {
//     for (const num of array) {
//       if (num % 2 === 0) {
//         result.push(num);
//       }
//     }
//   } else {
//     for (const num of array) {
//       if (num % 2 === 1 || num % 2 === -1) {
//         result.push(num);
//       }
//     }
//   } return result;
// }

// test(evenOrOdd([1, 2, 3, 4, 5], true), [2, 4]); // [2, 4]
// test(evenOrOdd([0, 4, 36], false), []); // []
// test(evenOrOdd([-1, -2, 4, -5, -7], false), [-1, -5, -7]); // [-1, -5, -7]
// //  追加テスト
// test(evenOrOdd([1, 2, 3, 4, 5, -2, -1, 0, 55.5], true), [2, 4, -2, 0]); // [2, 4, -2, 0]
// test(evenOrOdd([1, 2, 3, 4, 5, -2, -1, 0, 55.5], false), [1, 3, 5, -1]); // [1, 3, 5, -1]

//2.

// ここにコードを書きましょう
// const findKeys = (objects, target) => {
//   const result = [];
//   for (const key in objects) {
//     if (target === objects[key]) {
//       result.push(key);
//     }
//   } return result;
// }

// test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2), ["b", "e"]); // ["b", "e"]
// test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"), ["c", "d"]); // ["c", "d"]







//3. 解けない

// ここにコードを書きましょう
// const buildObject = (arraysKey, arraysObj) => {
//   const newObj = {};
//   for (const key of arraysKey) {
//     for (const obj of arraysObj) {
//       newObj[key] = obj;
//     }
//   } return newObj;
// }

// test(buildObject(["a", "b", "c"], [1, 2, 3]), {
//   "a": 1, "b": 2, "c": 3
// }); // {"a": 1, "b": 2, "c": 3}
// test(buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]), {
//   "cat": "にゃー", "dog": "わんわん", "duck": "がーがー"
// }); // {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"}
// test(buildObject(["cat", "dog", "duck"], [null, 0, NaN]), {
//   "cat": null, "dog": 0, "duck": NaN
// }); // {"cat": null, "dog": 0, "duck": NaN}
// test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]), {
//   "abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]
// });  // {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]}

//4.

// ここにコードを書きましょう
// const add = (x) => {
//   return function (y) {
//     return x + y
//   }
// }

// const addTwo = add(2);
// test(addTwo(3), 5); // 5
// test(addTwo(70), 72); // 72

// const addOneHundred = add(100);
// test(addOneHundred(3), 103); // 103

//5.

// function sayHello() {
//   console.log("Hello");
// }

// function sayHelloAndName(name) {
//   return "Hello, " + name;
// }

// const foo = sayHello();
// const bar = sayHelloAndName("JavaScript");

// console.log(foo);
// console.log(bar);

// あなたの回答と、なぜそうなるのかの説明をここに記載してください

//6.

//7.

// ここにコードを書きましょう
const map = (arrays, addOne) => {
  const result = [];
  for (const number of arrays) {
    
    // console.log(number);
    result.push(addOne(number));
    // console.log(result);
    for (const obj in arrays) {
         result.push(addOne(obj)) ;
        }
      
    
  }return result;
}

function addOne(num) {
  return num + 1;
}
test(map([1, 2, 3], addOne), [2, 3, 4]); // [2, 3, 4]
test(map({ a: 1, b: 2, c: 3 }, addOne), [2, 3, 4]); // [2, 3, 4]