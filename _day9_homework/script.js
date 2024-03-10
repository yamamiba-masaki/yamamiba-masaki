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

// function test(actual, expected) {
//   if (JSON.stringify(actual) === JSON.stringify(expected)) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.group("Result:");
//     console.log("  actual:", actual);
//     console.log("expected:", expected);
//     console.trace();
//     console.groupEnd();
//   }
// }

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
// function counter(x) {
//   // console.log(x);
//   count = count + x;
//   console.log(count);
//   return count;
// }

// test(counter(3), 3);
// test(counter(4), 7);
// test(counter(5), 12);

// 1行目に記載している 'use strict' は削除しないでください
// function test(actual, expected) { 
//   if (JSON.stringify(actual) === JSON.stringify(expected)) {
//     console.log("Yay! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Keep trying!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }
// }

// /**
//  * @param {Array<number>} arrayOfNumbers - 数値型の要素を持つ配列
//  * @returns {Array<number>} 与えられた配列の中の奇数（odd number）だけが入った新しい配列
//  */
// function getOddNumbers(arrayOfNumbers) {
    
//   let result = [];
    
//   for (const number of arrayOfNumbers) {
//     if (number % 2 !== 0) {
//         result.push(number);
//     }  
//     return result;
    
//   }}
  
//   let actual = getOddNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
//   let expected = [1, 3, 5, 7];
  
//   test(getOddNumbers(getOddNumbers([1, 2, 3, 4, 5, 6, 7, 8]),
  // [1, 3, 5, 7]));
  
  // ここでは配列の比較に JSON.stringify を使いましょう。



//   // ここにテストを書きましょう。
 

// const place = "Zoom";
// const lesson = {
//   students: ["田中", "川西", "大村"],
//   coding: true,
//   place: "Zoom",
//   instractor:"ryouma"
// };
// console.log(lesson["place"]); // ???
// console.log(lesson.place); // ???
// console.log(lesson[place]); //  undefined
// console.log(lesson["cod" + "ing"]); // ???true
// console.log(lesson["coding"]); // ???undefined
// console.log(lesson.students[2]); // ???"大村"
// console.log(lesson.length); // ???  undefined
// console.log(lesson.students.length); // ???3
// console.log(Object.keys(lesson).length)
// console.log(typeof lesson.students); // ???


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
// 1.
// let word = "こんにちは！";

// function greet(name) {
//   let word = "おはよう！";
//   console.log(word);
//   return name + "さん、" + word;
// }

// console.log(greet("りか"));
// console.log(word);

// let sum = 0;

// function sumArray(arrayOfNumbers) {
//   for (const number of arrayOfNumbers) {
//     sum += number;
//   }
// }

// test(sumArray([1, 2, 3]), 6);
// test(sumArray([10, 20, 30]), 60);
// test(sumArray([100, 200, 300]), 600);

/**
//  * @param {Array<number>} ??? - 数値型の要素を持つ配列
//  * @returns {Array<number>} 与えられた配列の中の奇数（odd number）だけが入った新しい配列
//  */
//   function getOddNumbers(arrayOfNumbers) {
    
//       const result = [];
        
//       for (let number of arrayOfNumbers) {
//         if (number % 2 !== 0) {
//           result.push(number);
//         }  
//         return result;// ここにコードを書きましょう
//         }
//   }

// let actual = getOddNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
// let expected = [1, 3, 5, 7];

// // ここでは配列の比較に JSON.stringify を使いましょう。
// function test(actual, expected) {
// if (JSON.stringify(actual) === JSON.stringify(expected)) {
//   console.log("Yay! Test PASSED.");
// } else {
//   console.error("Test FAILED. Keep trying!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }
// }
// // ここにテストを書きましょう。
//   test(getOddNumbers([1, 2, 3, 4, 5, 6, 7, 8]),
//   ([1, 3, 5, 7]));

// const object = {
//   a: "おはよう",
//   b: "おやすみ",
//   c: 1000,
// };

// console.log(object["a"]); // ??? おはよう
// console.log(object.b); // ???　おやすみ
// object["b"] = "ありがとう"; 
// console.log(object["b"]); // ??? ありがとう

// // これは少し難しい！ 😉
// console.log(object[a]); // ???　a というキーは無いのでエラーが出る


// const pokemons = [
//   {
//     Number: "001",
//     Name: "フシギダネ",
//     Generation: "第一世代",
//     About:
//       "生後しばらくは種から養分を得て成長する。背中の種から養分を受け取ることで、何日も何も食べなくても平気。",
//     Types: ["くさ", "どく"],
//   },
//   {
//     Number: "025",
//     Name: "ピカチュウ",
//     Generation: "第一世代",
//     About:
//       "静電気を体にまとい触った相手をまひさせることがある。",
//     Types: ["でんき"],
//   },
//   {
//     Number: "019",
//     Name: "コラッタ",
//     Generation: "第一世代",
//     About:
//       "どんな場所でも住み着いていける生命力。警戒心がとても強い。",
//     Types: ["ノーマル", "どく"],
//   },
// ];
                     // ↓ 配列の中のindex指定に.nameドット記法 ["Name"]ブラケット記法でキーの値を取得
// console.log(pokemons[0]); // ???
// console.log(pokemons[1].Name); // ???
// console.log(pokemons[0]["Name"]); // ???
// console.log(pokemons[2]["About"]); // ???
// console.log(pokemons[2].Types[0]); // ???  
                           //   ↑typesキーの指定ができる     


//基礎演習
//1.
// const myInfo ={
//   name: "masaki" ,
//   age: 52 ,
//   location: "aichi",
//   isProgrammer: true,
// };

// // この演習では TDD スタイルのテストの代わりに console.log を使用してあなたが入力した情報を表示してみましょう。
// console.log(myInfo["name"]); // => "true"     


//2. ここにコードを書きましょう.

const morseCode = {
  t: "-" ,
  a: ".-" ,
  r: ".-."
}

// test(morseCode["t"], "-");
// test(morseCode["a"], ".-");
// test(morseCode["r"], ".-.");
//https://gist.github.com/
/**
 * @param {string}  morse モールス信号に変換する文字
 * @returns {string} str　与えられた文字に対応するモールス信号
 */
// function morseCodeArt(morse) {

 


// test(morseCodeArt("a"), ".-");
// // test(morseCodeArt("r"), ".-.");
// test(morseCodeArt("t"), "-");
// test(morseCodeArt("art"), ".- .-. -");


// function morseCodeArt(str) {
//     // ここにコードを書きましょう.
//     let ans = "";
//     let count = 0;

//     for (const num of str) {
//         if (count === 0) {
//             count++;
//             ans += morseCode[num];
//         } else {
//             ans += " " + morseCode[num];
//         }
//     }
//     return ans;
// }

// test(morseCodeArt("a"), ".-");
// test(morseCodeArt("r"), ".-.");
// test(morseCodeArt("t"), "-");
// test(morseCodeArt("art"), ".- .-. -");

/**
 * @param {object}  オブジェクト
 * @param {Array<string>}  文字列の入った配列
 * @returns {object} 与えられた配列の要素をキーにして、それに対応する値を第 1 引数のオブジェクトから選んで作った新しいオブジェクト
 */

// ここにコードを書きましょう.

test(select({ a: 1, b: 2, c: 3 }, ["a"]), { a: 1 });
test(select({ a: 1, b: 2, c: 3 }, ["a", "c"]), { a: 1, c: 3 });
test(select({ a: 1, b: 2, c: 3 }, ["a", "b", "c"]), { a: 1, b: 2, c: 3 });
test(select({ a: 1, b: 2, c: 3 }, []), {});