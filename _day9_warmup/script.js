'use strict'
// 1行目に記載している 'use strict' は削除しないでください
function test(actual, expected) { 
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
}

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
// console.log(lesson[2]); // ???undefined
// console.log(lesson.students[2]); // ???"大村"
// console.log(lesson.length); // ???  undefined
// console.log(lesson.students.length); // ???3
// console.log(Object.keys(lesson).length)
// console.log(typeof lesson.students); // ???


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
 * @param {Array<number>} ??? - 数値型の要素を持つ配列
 * @returns {Array<number>} 与えられた配列の中の奇数（odd number）だけが入った新しい配列
 */
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
 * @returns {string} 与えられた文字に対応するモールス信号
 */
function morseCodeArt(morse) {
  // ここにコードを書きましょう.
}

test(morseCodeArt("a"), ".-");
test(morseCodeArt("r"), ".-.");
test(morseCodeArt("t"), "-");
test(morseCodeArt("art"), ".- .-. -");