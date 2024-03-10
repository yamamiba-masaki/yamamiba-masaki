"use strict"

//ウォームアップ
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

/**
 * @param {Array<object>} objArrays 複数のオブジェクトが入った配列
 * @param {string}  key キー
 * @returns {Array<any>} 配列の中のオブジェクトから、第 2 引数と同じキーに対応する値だけを拾って（＝ pluck して）、配列に入れたもの
 */

// function pluck(objArrays, key) {
//   const result = [];
//   for (const obj of objArrays) {//配列(objArrays)の中のオブジェクト(obj)
//     // console.log(obj);
//     result.push(obj[key]); //
//     console.log(result);
//   }
//   // console.log(result);   
//   return result;
  
// }


// const arrayOfObjects = [
//   { a: 1, b: 2, c: 3 },
//   { a: 4, b: 5, c: 6 },
//   { a: 7, b: 8, c: 9 },
// ];

// test(pluck(arrayOfObjects, "a"), [1, 4, 7]);
// test(pluck(arrayOfObjects, "b"), [2, 5, 8]);
// test(pluck(arrayOfObjects, "c"), [3, 6, 9]);
// arrayOfObjects["a"] = "10"
// console.log(arrayOfObjects);




// function pluck (arrayOfObjects, key) {
//   let result = [];
//   for (let object of arrayOfObjects) {
//     // console.log(object);
//     result.push(object[key]);
//     console.log(result);
//   } return result;
// }

// let value = arrayOfObjects;
// console.log(value[0]);




// const members = [
//   {id: 1, name: "tanaka", age: 30},
//   {id: 2, name: "suzuki", age: 28},
//   {id: 3, name: "sato", age: 24},
// ];

// const getMemberById = (id) => {
//   return members.find(member => member.id === id);
// };

// console.log(getMemberById(1)); // {id: 1, name: "tanaka", age: 30}
// console.log(getMemberById(2)); // {id: 2, name: "suzuki", age: 28}
// console.log(getMemberById(3)); // {id: 3, name: "sato", age: 24}

// const objects = 
//   { a: 1, b: 2, c: 3 };

// objects["d"] = 4 
// objects["d"] = 9
// objects.a = 111
// console.log(objects);

// const objects = [
//   { a: 1, b: 2, c: 3 },//インデックス　0
//   { a: 4, b: 5, c: 6 },//インデックス　1
//   { a: 7, b: 8, c: 9 },//インデックス　2
// ];

// objects[0].a = 555;//インデックス0のaを555に変える
// objects.push({ d: 7, e: 8, f: 9 });
// objects.push({ d: 7, e: 8, f: 9 });

// console.log(objects[0].a);
// console.log(objects);



// const arrayOfObjects = [
//   { a: 1, b: 2, c: 3 },
//   { a: 4, b: 5, c: 6 },
//   { a: 7, b: 8, c: 9 },
// ];

/**
 * @param {string}  モールス信号に変換する文字
 * @returns {string} 与えられた文字に対応するモールス信号
 */
// function morseCodeArt() {
//   // ここにコードを書きましょう.
// }

// test(morseCodeArt("a"), ".-");
// test(morseCodeArt("r"), ".-.");
// test(morseCodeArt("t"), "-");
// test(morseCodeArt("art"), ".- .-. -");
const morseCode = {
  t:  "-",
  a:  ".-",
  r:  ".-."
}
// console.log(morseCode)

/**
* @param {string} str - モールス信号に変換する文字
* @returns {string} 与えられた文字に対応するモールス信号
*/
// function morseCodeArt(str) {
//   // ここにコードを書きましょう.
//   let ans = "";
//   let count = 0;

//   for (const num of str) {
//     console.log(str);
//     if (count === 0) {
//         console.log(count);
//         count++;
//           console.log(count);
//           ans += morseCode[num];
//       } else {
//           ans += " " + morseCode[num];
//       }
//   }
//   return ans;
// }

/**
 * @param {string}  モールス信号に変換する文字
 * @returns {string} 与えられた文字に対応するモールス信号
 */

// function morseCodeArt(str) {
//  let result = "";
//  let count = 0;
//  for (const num of str) { 
//    if (count === 0) {
//     console.log(count);  
//     count++;
//       result += morseCode[num];
//       console.log(count);
//     } else {
//       console.log(count);
//       result += " " + morseCode[num];
//     }
//     } 
      
//       console.log(result);
//       console.log(count);
//       return result;
// }



// test(morseCodeArt("a"), ".-");
// test(morseCodeArt("r"), ".-.");
// test(morseCodeArt("t"), "-");
// test(morseCodeArt("artart"), ".- .-. - .- .-. -");


// console.log(morseCode["a"] + morseCode["r"] + morseCode["t"]);
// console.log(morseCode.a + morseCode.r + morseCode.t);
// console.log(morseCode["a"] = ".---");
// console.log(morseCode["k"] = ".--.");

// console.log(morseCode.a + morseCode.r + morseCode.t + morseCode.k);
// console.log(morseCode);(morseCode);
// console.log(morseCode["a"] + morseCode["r"] + morseCode["t"]);


// const array = [];
// const array1 = [];


// console.log(array.push(5,6,7,8,9,10))//配列の最後尾に要素を追加
// console.log(array.unshift(0)) //配列の先頭に要素追加
// console.log(array1.unshift(15, 16, 17, 18, 19, 20)) //配列の先頭に要素追加
// console.log(array1.shift()) //配列の先頭の要素削除
// console.log(array1.shift()) //配列の先頭の要素削除

// console.log(array1);//配列全体の要素

// console.log(array);//配列全体の要素
// console.log(array1);//配列全体の要素
// console.log(array.length);//
// console.log(array[0]);//配列の中の指定したインデックス要素


// console.log(array.concat(array1)) //配列を結合する
// console.log(array);//配列全体の要素
// console.log(array1);//配列全体の要素
// console.log(array[array.length - 1]);//配列の最後尾のインデックス要素
// 
// const numbers = [1, 2, 3];

// console.log(numbers[2]); // ???　3　
// console.log(numbers[0]); // ???　1
// console.log(numbers[numbers.length - 1]); // ??? 3

// // 次で使用しているメソッドやプロパティについて、分からないときはドキュメント（MDN）で調べてみましょう！

// console.log(numbers.pop() + numbers.pop()); // ??? 3+2 5

// numbers.unshift(4, 5, 6);  //先頭から4,5,6追加
// console.log(numbers); // ??? numbers[1,2,3,4,5,6]

// console.log(numbers.shift()); // 要素先頭を削除

// console.log(numbers.length); // ???　3

// numbers.push(5); //2,3,4,5,6,5
// numbers.push(6);//2,3,4,5,6,5,6

// console.log(numbers.pop() * numbers.pop()); // ???6 * 5 =30

const numbers = [
  [0, 1, 2, 3],
  ["zero", "one", "two", "three"],
  ["rei", "ichi", "ni", "san"],
];
// console.log(numbers[2]); // ???"rei", "ichi", "ni", "san"
// console.log(numbers[1][1]); // ???"one"
// console.log(numbers[0][2]); // ???2
// console.log(numbers[numbers.length - 1][0]); // ???"rei"
// console.log(numbers[2].length); // ???　4
// console.log(numbers.pop()); // ???
console.log(numbers[0].push(4)); // ???
console.log(numbers.length); // ???3
console.log(numbers); // ???3
