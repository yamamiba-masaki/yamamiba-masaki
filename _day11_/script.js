"use strict"




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
//for...in ループday10
1.

// const hellos = {
//   English: "Hello",
//   Japanese: "Konnichiwa",
//   German: "Hallo",
//   Spanish: "Hola",
//   Arabic: "Ahlan wa sahlan",
//   Chinese: "Nihao",
// };

// /*
//  * @returns {undefined} この関数は挨拶をコンソールに表示するだけで、返り値は必要ありません。
//  */
// function sayHellos() {
//   for (const key in hellos) {
//       console.log(hellos[key]);
//   }
// }


// console.log(sayHellos());// 実際にこの関数を呼び出すと、以下のようにコンソールに表示されることを確認しましょう。
// "Hello"
// "Konnichiwa"
// "Hallo"
// "Hola"
// "Ahlan wa sahlan"
// "Nihao"

//2.
/**
 * @param {object} ???
 * @returns {Array<string>} 与えられたオブジェクトのすべてのキーが入った配列
 */

// ここにコードを書きましょう
// function getKeys(obj) {
//   const result = [];
//   for (const key in obj) {
//       result.push(key);
      
//       // console.log(object1);
//       console.log(result);
//   }
//   return result;
// }

// const object1 = { a: 1, b: 2, c: "hello" };
// const object2 = { 1: "a", 2: "b", hello: "c" };

// test(getKeys(object1), ["a", "b", "c"]);
// test(getKeys(object2), ["1", "2", "hello"]);

//3.
/**
 * @param {object} ???
 * @returns {Array<any>} 与えられたオブジェクトのすべての値が入った配列
 */

// ここにコードを書きましょう
// function getValues(obj) {
//   const result = [];
//   for (const key in obj) {
//       result.push(obj[key]);
//   }console.log(result);
//   return result;
// }

// test(getValues(object1), [1, 2, "hello"]);
// test(getValues(object2), ["a", "b", "c"]);



//4.与えられたオブジェクトのすべての値を表示する関数です。しかし、以下のコードではうまくいきません。何が問題なのでしょうか。正しく動くように修正してください。


// function printAllValues(object) {
//   for (const key in object) {
//     console.log(object[key]);
//   }
// }

// const myObject = { foo: 1, bar: 2, key: 3, delta: 4, lee: 5 };

// printAllValues(myObject); // 1 2 3 4 5 と順番に表示されたら成功です！

//5.
/**
 * @param {object} オブジェクト。ただし値はすべて異なるものとする。
 * @returns {object} 与えられたオブジェクトのキーと値を入れ替えた、新しいオブジェクト
 */

// ここにコードを書きましょう
// function swapPairs(obj) {
//   const result = {};
//   for (const key in obj) {
//       console.log(result[obj[key]] = key);
//       console.log(result);

//   }
//   return result;
// }


// const object3 = { a: 1, b: 2, c: 3, d: 4 };
// const object4 = { 1: "a", 2: "b", 3: "c", 4: "d" };

// test(swapPairs(object3), { 1: "a", 2: "b", 3: "c", 4: "d" });
// test(swapPairs(object4), { a: "1", b: "2", c: "3", d: "4" });

//復習: 配列とオブジェクト

//1.
/**
 * @param {Array<object>} オブジェクトを要素に持つ配列
 * @returns {Array<any>} 与えられた配列の最初のオブジェクトのすべての値が入った新しい配列
 */
// ここにコードを書きましょう。
function getFirstObjectValues(objArray) {
  const result = [];
  for (const object of objArray) {
      for (const key in object) {
          result.push(object[key]);
      }
      break;
  }
  return result;
}

const collection = [{ a: 1, b: 2 }, { a: 3, b: 3 }, { b: 4 }, { a: 100 }];

test(getFirstObjectValues(collection), [1, 2]);
test(getFirstObjectValues(collection.slice(1)), [3, 3]);

//2.
/**
 * @param {Array<object>} オブジェクトを要素に持つ配列
 * @returns {Array<any>} すべてのオブジェクトのすべての値が入った配列
 */

// ここにコードを書きましょう
function selectAllValues(objArray, keyName) {
  const result = [];
  for (const object of objArray) {
      if (object[keyName] !== undefined) {
          result.push(object[keyName]);
      }
  }
  return result;
}
test(getAllValues(collection), [1, 2, 3, 3, 4, 100]);
test(getAllValues(collection.slice(1)), [3, 3, 4, 100]);


//中級1.
/**
 * @param {object}
 * @returns {object} 与えられたオブジェクトのキーと値を入れ替えた新しいオブジェクト。ただし、重複する値がある場合は、最初のキーと値のペアのみを使用し、その後のペアは無視すること。
 */

// ここにコードを書きましょう
function swapPairs2(obj) {
  const result = {};
  for (const key in obj) {
      if (result[obj[key]] === undefined) {
          result[obj[key]] = key;
      }
  }
  return result;
}


const object5 = { a: 1, b: 2, c: 3, d: 1 };
const object6 = { a: 1, b: 1, c: 1, d: 1 };

// `a: 1` と `d: 1` はどちらも値が `1` で重複しているので最初のキーと値のペアである `a: 1` を使い、`d: 1` は無視する。
test(swapPairs2(object5), { 1: "a", 2: "b", 3: "c" });

// object6も 1 という値が何度も重複してでてくる。したがって、2 回目以降、1 が値になるキーと値のペアは無視される。
test(swapPairs2(object6), { 1: "a" });

//中級2.

/**
 * @param {Array<object>}
 * @returns {Array<any>} 与えられた配列内のすべてのオブジェクトのすべての値が入った配列。重複した値がある場合は 1 つだけ残す。
 */

// ここにコードを書きましょう
function getAllValues2(objArray) {
  const result = [];
  
  for (const object of objArray) {
      for (const key in object) {
          if (result.indexOf(object[key]) === -1) {
              result.push(object[key])
          }
      }
  }
  
  return result;
}

const collection2 = [{ a: 1, b: 2, c: 2 }, { d: 1, e: 3 }, { f: 4, g: 5 }];

test(getAllValues2(collection2), [1, 2, 3, 4, 5]);
test(getAllValues2(collection2.slice(1)), [1, 3, 4, 5]);

//中級3.
/**
 * @returns {string} 基礎演習 1 で使った `hellos` オブジェクトの中の言葉をランダムに選んだもの
 */

// ここにコードを書きましょう
const hellos = {
  English: "Hello",
  Japanese: "Konnichiwa",
  German: "Hallo",
  Spanish: "Hola",
  Arabic: "Ahlan wa sahlan",
  Chinese: "Nihao",
};

function getRandomHello() {
    const array = [];
    for (const key in hellos) {
        array.push(hellos[key]);
    }
    return array[Math.floor(Math.random() * 6)];
}
// ランダムな出力をする関数をテストすることは困難です。
// ここでは、コンソールの表示を見て、テストとしましょう。
console.log(getRandomHello()); // "Konnichiawa"、"Hola" 等、実行する度にランダムな言葉が表示されるはずです。

//応用演習1.

/**
 * @param {object} ???
 * @returns {object} 与えられたオブジェクトのキーと値を入れ替えた新しいオブジェクト。キーと値を入れ替えたとき、同じキーに対する値が複数になった場合はそれらの値を配列に入れること。
 */

// ここにコードを書きましょう。
function swapPairs3(obj) {
  const result = {};
  for (const key in obj) {
      if (result[obj[key]] === undefined) {
          result[obj[key]] = key;
      } else {
          result[obj[key]] = Array.from(result[obj[key]]);
          result[obj[key]].push(key);
      }
  }
  return result;
}
const object7 = { a: 1, b: 2, c: 3, d: 1 };
const object8 = { a: 1, b: 1, c: 1, d: 1 };

test(swapPairs3(object7), { 1: ["a", "d"], 2: "b", 3: "c" });
test(swapPairs3(object8), { 1: ["a", "b", "c", "d"] });

//応用演習2.

/**
 * @param {object}
 * @returns {object} 引数のオブジェクトとほぼ同じ形の新しいオブジェクトだが、同じ値を持つキーと値のペアは削除する。
 */

// ここにコードを書きましょう
function noDuplicateValues(obj) {
  const result = {};
  const keyArray = [];
  for (const key in obj) {
      keyArray.push(key);
  }
  for (let i = 0; i < keyArray.length; i++) {
      let bool = false;
      for (let j = i + 1; j < keyArray.length; j++) {
          if (obj[keyArray[i]] === obj[keyArray[j]]) {
              bool = true;
              delete obj[keyArray[j]];
              keyArray.splice(j, 1);
              j--;
          }
      }
      if (bool === false) {
          result[keyArray[i]] = obj[keyArray[i]];
      }
  }
  return result;
}

const object9 = { a: 1, b: 2, c: 3, d: 4 };

test(noDuplicateValues(object9), object3);
test(noDuplicateValues(object7), { b: 2, c: 3 });
test(noDuplicateValues(object8), {});






//for.in ループウォームアップ

// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };

// /**
//  * @param {object} オブジェクト
//  * @returns {{ [key: string]: string }} 与えられたオブジェクト内の、値が文字列であるキーと値のペアのみを持つ新しいオブジェクト
//  */

// function filterObjectForStrings(object) {
//   const resultArray = {};
//   console.log(resultArray);
//   for (const key in object) {
//     console.log(object);
//     // console.log(result);
//     console.log(key)
//     console.log(object[key]);
//     console.log(typeof object[key]);
//     // console.log(Object.values(obj1));
    
//     if (object[key] !== "string") {
//       console.log(object);
//       resultArray[key] = (object[key]);
//       console.log(resultArray)
//       return resultArray;
//     }
//    }}

// test(filterObjectForStrings(obj1), obj1); // 変化なし
// test(filterObjectForStrings(obj2), obj1); // 値が文字列でないペアは取り除かれている
// test(filterObjectForStrings(obj3), obj4); // 値が文字列でないペアは取り除かれている