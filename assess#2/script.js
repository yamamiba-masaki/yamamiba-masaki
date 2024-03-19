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

//1.
/**
 * @param {Array<string>} nameOfArrays??? - 友達の名前が入った配列
 * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
 */

function sayHelloToFriends(nameOfArrays) {
  const result = [] ;
  for (const name of nameOfArrays) {
    // console.log(name);
    result.push("Hello," + " " + name + "!");
  } return result;
} 

const friends = ["Mario", "Luigi"];
test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);


// 2.
const obj1 = { a: "A" };
const obj2 = { a: "A", b: 2 };
const obj3 = { a: "A", b: 2, c: "C", d: true };
const obj4 = { a: "A", c: "C" };

/**
 * @param {object} オブジェクト
 * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
 */
function filterObjectForStrings(object) {
  const result = {};
  for (const key in object) {
    if (typeof object[key] === "string") {
      // console.log(object);
      result[key] = object[key]; 
    } 
  } return result;
  
}

test(filterObjectForStrings(obj1), obj1); // 変化なし
test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない

//3.
/**
 * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
 * @returns {Array<{ [key: string]: string }>} 引数で与えられた配列内の各オブジェクトについて、値が文字列であるキーと値のペアのみを持つ新しいオブジェクトを作成し、そのオブジェクトを含む新しい配列を返り値として返す。
 */
function filterArrayForStrings(arrayOfObjects) {// ここにコードを書きましょう.
  const result = [];
  for (const object of arrayOfObjects) { 
    // console.log(object);//objectが入っている
    result.push(filterObjectForStrings(object)); // どこかで関数 `filterObjectForStrings` を呼びましょう

  } return result;
}
 
test(filterArrayForStrings([obj1]), [obj1]); // 変化なし
// 2 番目の要素から値が 2 のペアは除くこと
test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);

test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);

//4.
const names = ["いち", "に", "さん", "よん"];

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < names.length; j++) {
    for (let k = 1; k < 3; k++) {
    console.log(names[j]);
    // console.log("i:" + i+"回目");
    // console.log("j:" + j+"回目");
    // console.log("k:" + k+"回目");
    }
  }
}

//5.
for (let i = 0; i < 2; i++) { 
  // console.log("a:" + i+"回目");
  console.log("a: " + i);
  for (let k = 0; k < 2; k++) {
    // console.log("b:" + i+"回目");
    console.log("b: " + k);
    for (let j = 0; j < 2; j++) {
      // console.log("c:" + i+"回目");
      console.log("c: " + j);
    }
    
  }
}

