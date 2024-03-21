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

/**
 * @param {number} x
 * @returns {(y: number) => number} 引数として y を取り、x を y で割った値を返す関数
 */
// ここにコードを書きましょう

function divide(x) {
  function divideByTwo(y) {
    return  x / y;
  }
  return divideByTwo
}

const divideByTwo = divide(2);

test(divideByTwo(4), 0.5);
test(divide(2)(1), 2);


// 関数 add を宣言し、引数は x とします。add は、引数 y を受け取る関数を返します。内部関数は、x と y の和を返します。
/**
* @param {number} x
* @returns {(y: number) => number} 引数 y をとり、y に x を足した値を返す関数
*/
// コードを書き始めましょう
function add(x) {
  // ここにコードを書きましょう
  let number1 = x;
  function addFive (number2) {
      return number2 + number1;
  }

  return addFive;
}

const addFive = add(5);
test(addFive(1), 6);


// //-- Day17 高階関数入門 基礎-Q1 --//
// console.log("%c== Day17 高階関数入門 基礎-Q1 ==", 'color:red; font-size:14px');
// // これからみなさんに書いてもらう関数は、特段新しいものばかりではありませんが、注目してほしいのは、Array.map の使い方です。演習のコードをしっかり見て、.map を使いこなせるようになりましょう。
// // 関数 getGreeting を宣言してください。この関数は .map メソッドに実行されているという点に注目してください。なお、関数内で .map メソッドを使用しては いけません。
// /**
// * @param {string} nameStr
// * @returns {string} 与えられた引数に挨拶文を追加した文字列
// */
// // ここにコードを書きましょう
// function getGreeting(nameStr) {
//     return "Hello, " + nameStr + ".";
// }

// testForArrays(["zeno", "yanis", "xander"].map(getGreeting), [
//     "Hello, zeno.",
//     "Hello, yanis.",
//     "Hello, xander.",
// ]);

// //-- Day17 高階関数入門 基礎-Q2 --//
// console.log("%c== Day17 高階関数入門 基礎-Q2 ==", 'color:red; font-size:14px');
// // 関数 abs を宣言してください。この関数は .map メソッドに実行されているという点に注目してください。 なお、関数内で .map メソッドを使用しては いけません。
// /**
// * @param {number} num
// * @returns {number} 与えられた引数の絶対値
// */
// // ここにコードを書きましょう
// function abs(num) {
//     return Math.abs(num);
// }

// testForArrays([1, 2, 3].map(abs), [1, 2, 3]);
// testForArrays([-1, -2, -3].map(abs), [1, 2, 3]);
// testForArrays([-1, 2, -3].map(abs), [1, 2, 3]);


// console.log("%c== Day17 高階関数入門 基礎-Q3 ==", 'color:red; font-size:14px');
// 関数 getIncrementedNumbers を宣言してください。この関数では .map メソッドを 使用してください 。ヘルパー関数（この関数を補助する関数）を書く必要があるかもしれませんが、無名関数で書いてもかまいません。
/**
* @param {Array<number>} arrayNum
* @returns {Array<number>} 与えられた配列の各要素に 1 を足した数を要素として持つ、新しい配列
*/
// ここにコードを書きましょう
function addOne(num) {
    return num + 1;
}

function getIncrementedNumbers(arrayNum) {
    return arrayNum.map(addOne);
}

testForArrays(getIncrementedNumbers([1, 2, 3]), [2, 3, 4]);
testForArrays(getIncrementedNumbers([-1, -2, -3]), [0, -1, -2]);

const array1 = [0, 0, 0];
testForArrays(getIncrementedNumbers(array1), [1, 1, 1]);
// 元の配列が変更されていないことを確認してください
testForArrays(array1, [0, 0, 0]);

// console.log("%c== Day17 高階関数入門 中級-Q1 ==", 'color:red; font-size:14px');
// 関数 getSwitched を宣言してください。この関数は .map メソッドを 使用してください 。ヘルパー関数を書く必要があるかもしれませんが、無名関数を使って書いてもかまいません。
/**
* @param {Array<number|string>} anyArray
* @returns {Array<number|string>} 与えられた配列の各要素が数値型なら文字列型に、文字列型なら数値型に変換したものが入った、新しい配列
*/
// ここにコードを書きましょう
function getSwitched(anyArray) {
    return anyArray.map(function(any) {
        if (typeof any === "number") {
            return String(any);
        } else {
            return Number(any);
        }
    });
}

testForArrays(getSwitched([1, 2, 3]), ["1", "2", "3"]);
testForArrays(getSwitched(["1", "2", "3"]), [1, 2, 3]);
testForArrays(getSwitched(["1", 2, "3"]), [1, "2", 3]);