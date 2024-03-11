'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//テスト関数宣言
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


///////////////////////////////////////////////////////////////////////////////////////////////////
//day11 forﾙｰﾌﾟｳｫｰﾐﾝｸﾞｱｯﾌﾟ
// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };

// /**
//  * @param {object} オブジェクト
//  * @returns {{ [key: string]: string }} 与えられたオブジェクト内の、値が文字列であるキーと値のペアのみを持つ新しいオブジェクト
//  */
// const result = {};

// function filterObjectForStrings(object) {
//   for (const key in object) {
//     if(typeof object[key] === "string" ) {
//       result[key] = object[key];
//     }
//    console.log(result);
//   }return result;
// } 
  
  // test(filterObjectForStrings(obj1), obj1); // 変化なし
  // test(filterObjectForStrings(obj2), obj1); // 値が文字列でないペアは取り除かれている
  // test(filterObjectForStrings(obj3), obj4); // 値が文字列でないペアは取り除かれている

//手順１.テストを通さないコードを書く
//手順２.returnで使うオブジェクトを入れる空の変数を宣言する
//手順３.return　を　result に変える
//手順４.for文を記述する　オブジェクトの中のキー、値を確認する
//手順５.条件分岐を行う　オブジェクト内の値が文字列であるかどうか　trueなら処理を実行する
//手順６.tureの際の処理を記述する
//手順７.テストして通るか確認する

///////////////////////////////////////////////////////////////////////////////////////////////////

//ｳｫｰﾐﾝｸﾞｱｯﾌﾟ拡張
// const menuOfFruits = [
//   { name: "apple", price: "1,200yen", stock: "40" },
//   { name: "banana", price: "100yen", stock: "30" },
//   { name: "cherry", price: "670yen", stock: "20" },
//   { name: "kiwi", price: "210yen", stock: "10" },
//   {
//     name: "wartermelon",
//     price: "4,560yen",
//     stock: "0",
//     secret: "Happy coding!",
//   },
// ];
// //全ての key に対する value をコンソールに出力しましょう

  //key 名が "stock" の value を全てコンソールに出力しましょう
    
  //key 名が "secret" のオブジェクトだけをコンソールに出力しましょう
    
    
    
//演習
// 1.
// let index = 0;

// while (index <= 4) {
//   console.log("hello!");
//   index++;
// }

// for (let index = 0; index <= 4; index++) {

//   console.log("hello!");
// }
//2.
// const array = ["a", "b", "c", "d", "c", "e"];
// for (let i = 0; i < array.length-1; i++) {
//   console.log("Index: " + i, "Value :" + array[i]);
// }
// Index: 0 Index: a
// Index: 1 Index: b
// Index: 2 Index: c
// Index: 3 Index: d
// Index: 4 Index: e

//3.
// function sayFourHellos() {
//   for (let i = 1; i <= 4; i++){
//   console.log("Hello!");
// }
// }sayFourHellos();

// "Hello!"
// "Hello!"
// "Hello!"
// "Hello!"

//4.
// function countDown() {
//   for (let i = 100; i >= 0; i--) {
//       console.log(i);
//   }
// }
// countDown(100);
//基礎演習
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

//基礎演習

//1.

// function sayHellos(num) {
//   for (let i = 0; i < num; i++) {
//     console.log("Hello!");
//   }
// }
// sayHellos(4);

// "Hello!"
// "Hello!"
// "Hello!"
// "Hello!"


//2.
// function countToTen() {
//   for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
// }
// countToTen();

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

//3.

// function counter(num) {
//   let i = 0;
//   while (i < num) {
//     console.log(i);
//     i++;
//   }
// }


// function counter(num) {
//   for (let i = 0; i < num; i++) { 
//     console.log(i);
//   }
// }

// counter(10);

//4.
/**
 * @param {Array<number>} ???
 * @returns {Array<number>} 与えられた配列の各要素に 1 を加えた数字を要素として持つ新しい配列
 */
// ここにコードを書きましょう
// const array = [1, 2, 3, 4, 5];

// function printArray() {
//   const result = [];
//   for (const num of array) {
//       // console.log(num);
//     for (let i = num; i <= array.length + 1; i++) {
//       result.push(i);
//       }  console.log(result[num]);
//     }
//     // }return result;
//   }
//   printArray();
//   test(array, [1, 2, 3, 4, 5]);
  

//   const array1 = [1, 2, 3, 4];

// function が動作するかテストする
// test(addOne(array1), [2, 3, 4, 5]);

// 元の配列が変更されていないことを確認する
// test(array1, [1, 2, 3, 4]);

/**
 * @param {number} start
 * @param {number} end
 * @returns {Array<number>} start 以上 end 以下のすべての整数を含む配列
 */
// ここにコードを書きましょう

function createRange(startNum, endNum) {
  const result = [];//
  for (let i = startNum; i <=endNum; i++) {
    result.push(i);
  }return result;
}   


test(createRange(4, 6), [4, 5, 6]);
test(createRange(10, 16), [10, 11, 12, 13, 14, 15, 16]);

