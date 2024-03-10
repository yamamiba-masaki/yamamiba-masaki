"use strict"


// ここにあなたのコードを書いてください
const  student_name = "Hashimoto Makoto";
let    age = 32;
let    isProgrammer = true;
let    currentTask = 1;

//-- Q1 --//
console.log("student_name: " + student_name); // あなたの名前を表示
console.log("age: " + age); // あなたの年齢を表示
console.log("isProgrammer: " + isProgrammer); // "true" を表示
console.log("currentTask: " + currentTask); // "1" を表示

//-- Q2 --//
currentTask = 2;
console.log("currentTask: " + currentTask);

//-- Q3 --//
// 正方形の面積を計算して保存
const  squareSideLength = 2;
let    squareArea = 0;

squareArea = squareSideLength * squareSideLength;
console.log("squareArea= " + squareArea);

// 長方形の面積を計算して保存
const  rectangleBaseLength = 3;
const  rectangleHeightLength = 4;
let    rectangleArea = 0;

rectangleArea = rectangleBaseLength * rectangleHeightLength;
console.log("rectangleArea= " + rectangleArea);

// 三角形の面積を計算して保存
const  triangleBaseLength = 4;
const  triangleHeightLength = 5;
let    triangleArea = 0;

triangleArea = triangleBaseLength * triangleHeightLength / 2;
console.log("triangleArea= " + triangleArea);
Day01_2.js
// ここにあなたのコードを書いてください
//-- Q1 --//
const  circleDiameter = 10;
let    circleCircumference = 0;
let    circleArea = 0;
const  pi = Math.PI;

circleCircumference = pi * circleDiameter;
circleArea = pi * ( circleDiameter / 2 ) ** 2;
console.log("circleCircumference= " + circleCircumference);
console.log("circleArea= " + circleArea);

//-- Q2 --//
let  a = "B";
let  b = "A";
let  temp = 0;

temp = a;
a = b;
b = temp;
console.log("a: " + a);
console.log("b: " + b);

//-- Q3 --//
let  value = 1;
let  i = 0;

for (i = 0; i < 6; i++) {
    value *= 2;
    console.log(value);
}

//-- Q4 --//
const  firstName = "Makoto";
const  lastName = "Hashimoto";
const  city = "Aichi";

console.log("Hello, my name is " + firstName + " " + lastName + ". I live in " + city + ".");
Day01_3.js
//-- Q1 --//
let    value = 0;
let    i = 0;
const  iteration_times = 3;

function counter() {
    value++;
    console.log(value);
    
    return 0;
}

for (i = 0; i < iteration_times; i++) {
    counter();
}

//-- Q2 --//
let  number = -7;

function isOdd(givenNumber) {
    if (givenNumber % 2 == 1) {
        console.log("Yes, it's odd");
    }
    else {
        console.log("No, it's even");
    }
    
    return 0;
}

// 負の数だと偶数判定になってしまっている為
// 正負判定関数を追加
function isPositive(givenNumber) {
    if (0 <= givenNumber) {
        isOdd(givenNumber);
    }
    else {
        givenNumber *= -1;
        isOdd(givenNumber);
    }
    
    return 0;
}

isOdd(number);
isPositive(number);
Day02_1.js
//-- Day2 基礎演習 --//
//-- Q1 --//
5 + 6;      //JSで計算しているだけ。表示を命令していない。
console.log(6 + 6);

//-- Q1 --//
function add(numOne, numTwo) {
    return numOne + numTwo;
}

console.log(add(4, 3));
console.log(add(100, 42));

//-- Q2 --//
console.log(add(100));      //NaNが出力
console.log(add(1, 4, 5));  //5　(=1+4)が出力

//-- Q3 --//
function simpleFunctionA() {
    return "Hello simple function A";
}

function simpleFunctionB() {
    console.log("Hello simple function B");

    return 0;
}

console.log(simpleFunctionA(), "--> From running Simple Function A");
console.log(simpleFunctionB(), "--> From running Simple Function B");

//-- Q4 --//
function subtract(num1, num2) {
    return num1 - num2;
}

console.log(subtract(4, 3));            //1
console.log(subtract(100, 42));         //58
console.log(subtract("Hello", 42));     //NaN

//-- Q5 --//
function greeting(porson) {
    return "Hello, " + porson + "!";
}

console.log(greeting("Alex"));

//-- Q1 --//
function average(num1, num2) {
    return (num1 + num2) / 2;
}

console.log(average(100, 200));
console.log(average("Hashi", 100));     //NaN

function average2(num1, num2) {
    if ((typeof num1 == "number") && (typeof num2 == "number")) {
        return (num1 + num2) / 2;
    }
    else {
        return "値が不正です";
    }
}

console.log(average2(100, 200));
console.log(average2("Hashi", 100));
console.log(average2(100, "makoto"));

//-- Q2 --//
//割愛

//-- Q3 --//
function cube(x) {
    return x ** 3;
}

console.log(cube(5));
Day02_2.js
//-- Day2 中級演習 --//
//-- Q1 --//
function simpleHelloA() {
    console.log("hello");
}

function simpleHelloB() {
    return "hello";
}

const a = simpleHelloA();   //A
const b = simpleHelloB();   //B
console.log(a, b);          //C
// "hello"
//　undefined 'hello'
// A行で”hello”出力を実行。返り値としてundefinedeを変数aに返した。
// B行で"hello"を返り値として変数bに返した。
// C行で変数a,bの代入値を出力する為、undefinedeと"hello"を出力した。

//-- Q2 --//
function createGreeting(greetingPhrase, instructorName) {
    return greetingPhrase + ", " + instructorName + "!";
}

const  morningGreeting = createGreeting("Goode morning", "Mike");
const  dayGreeting = createGreeting("Hello", "Beau");
const  eveningGreeting = createGreeting("Good evening", "Alex");

console.log(morningGreeting); //"Good morning, Mike!" を表示
console.log(dayGreeting); // "Hello, Beau!" を表示
console.log(eveningGreeting); // "Good evening, Alex!" を表示

//-- Q3 --//
function createSquare(s){
    let area = s ** 2;
    let perimeter = 4 * s;
    console.log("Area:", area, "Perimeter:", perimeter);

    return 0;
}
createSquare(3);

function createRectangle(l, w){
    let area = l * w;
    let perimeter = 2 * l + 2 * w;
    console.log("Area:", area, "Perimeter:", perimeter);

    return 0;
}
createRectangle(2, 3);

function createParallelogram(l, w, h){
    let area = l * h;
    let perimeter = 2 * l + 2 * w;
    console.log("Area:", area, "Perimeter:", perimeter);

    return 0;
}
createParallelogram(5, 5, 4);

function createTrapezpid(b1, b2, s1, s2, h){
    let area = (h * (b1 + b2)) / 2;
    let perimeter = s1 + s2 + b1 + b2;
    console.log("Area:", area, "Perimeter:", perimeter);

    return 0;
}
createTrapezpid(1, 7, 5, 5, 4);

function createTriangle(b, s1, s2, h){
    let area = b * h / 2;
    let perimeter = s1 + s2 + b;
    console.log("Area:", area, "Perimeter:", perimeter);

    return 0;
}
createTriangle(6, 5, 5, 4);

function createCircle(r, d){
    let pi = Math.PI
    let area = pi * r ** 2;
    let perimeter = pi * d;
    console.log("Area:", area, "Perimeter:", perimeter);

    return 0;
}
createCircle(3, 6);

function createRectangularSolid(l, w, h){
    let area = l * w * h;
    let perimeter = 2 * (l * h + w * h + w * l);
    console.log("Area:", area, "Perimeter:", perimeter);

    return 0;
}
createRectangularSolid(2, 3, 4);

function createCube(s){
    let area = s ** 3;
    let perimeter = 6 * s ** 2;
    console.log("Area:", area, "Perimeter:", perimeter);

    return 0;
}
createCube(3);

function createRightCircularCylinder(r, h){
    let pi = Math.PI;
    let area = pi * r ** 2 * h;
    let perimeter = 2 * pi * r * h + 2 * pi * r ** 2;
    console.log("Area:", area, "Perimeter:", perimeter);

    return 0;
}
createRightCircularCylinder(3, 5);

function createSphere(r){
    let pi = Math.PI;
    let area = (4 / 3) * pi * r ** 3;
    let perimeter = 4 * pi * r ** 2;
    console.log("Area:", area, "Perimeter:", perimeter);

    return 0;
}
createSphere(3);

function createRightCircularCone(r, h){
    let pi = Math.PI;
    let area = pi * r ** 2 * h / 3;
    let perimeter = pi * r * Math.sqrt(r ** 2 + h ** 2);
    console.log("Area:", area, "Perimeter:", perimeter);

    return 0;
}
createRightCircularCone(3, 3);

function createPyramid(l, w, h){
    let area = l * w * h / 3;
    // let perimeter = pi * r * Math.sqrt(r ** 2 + h ** 2);
    console.log("Area:", area);

    return 0;
}
createPyramid(3, 3, 3);

function createFRCC(r, R, s, h){
    let pi = Math.PI;
    let area = (pi * (r ** 2 + r * R + R ** 2) * h) / 3;
    let perimeter = pi * s * (R + r);
    console.log("Area:", area, "Perimeter:", perimeter);

    return 0;
}
createFRCC(3, 6, 5, 4);
Day02_3.js
//-- Day2 応用演習 --//
//-- Q1 --//
//<head>
//  <meta charset="utf-8">
//  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
//  <meta name="theme-color" content="#000000">
//  <script type="text/javascript" src="script.js"></script>
//  <script type="text/javascript" src="C:\Users\私のPC\デスクトップ\DIG_FND14\dig-foundations\functions-intro\advanced.js"></script>
//</head>
//　＝＝＞同じフォルダ内ならjsファイル名のみ、違うフォルダならフォルダパスが追加で必要


//-- Q2 ~ Q4 --//
function randomNumber(n) {
    return Math.floor(Math.random() * (n + 1));
}

function guessMyNumber(n) {
    const upperBound = 7;
    let   ans = 0;

    if (upperBound < n) {
        return "Please try a number between 0 and 5.";
    }
    else {
        ans = randomNumber(upperBound);
        if (n === ans) {
            return "You guessed my number! ans: " + ans;
        }
        else {
            return "違います！正しい数は： " + ans + "でした。";
        }
    }
}

console.log(guessMyNumber(3));

//-- 理解度チェック --//
//-- Q1 --//
// 引数が少ない：　関数内の処理が正常に行えないのでNaNでエラーとなる
// 引数が多い：　　必要な引数のみ使用し関数処理を実施。余剰分は無視される。

//-- Q2 --//
// 関数内での処理結果を外部に返り値として返す。関数内のみ1回だけ使用可能。
// 記述は何個でも可能。しかし何個も返り値を返す事は出来ない。（条件分岐に限る）
Day03_1.js
//-- Day3 基礎演習 --//
//-- Q2 --//
console.log(1100 > 99);
console.log(1 > 21);
console.log(62 !== 63);
console.log("5" === 5);
console.log("6" !== "six");

//-- Q3 --//
console.log(2 + 3 ** 10 > 50);

//-- Q4 --//
function isEqual(valueOne, valueTwo) {
    return valueOne == valueTwo;
}

console.log(isEqual("5", 5));

//-- Q5 --//
function isGreaterThan(valueOne, valueTwo) {
    return valueOne > valueTwo;
}

console.log("true:", isGreaterThan(4, 3));
console.log("false:", isGreaterThan(1, 3));
console.log(4 > 3);

//-- Q6 --//
function isOfAge(myAge) {
    return 20 <= myAge;
}

console.log("19", isOfAge(19));
console.log("20", isOfAge(20));
console.log("21", isOfAge(21));
Day03_2.js
//-- Day3 中級演習 --//
//-- Q1 --//
function isOfAge(age) {
    let isAge = (20 <= age);

    if (isAge) {
        console.log("あなたは飲めます");
    }
    else {
        console.log("あなたは飲めません");
    }

    return isAge;
}

console.log(isOfAge(21));

//-- Q2 --//
function isEven(n) {
    return n % 2 === 0;
}

console.log(isEven(9));

//-- Q3 --//
function validCredentials(username, password) {
    const  passLength = 12;

    if ((passLength <= username) && (passLength <= password)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(validCredentials(11, 11));
console.log(validCredentials(13, 11));
console.log(validCredentials(11, 13));
console.log(validCredentials(13, 13));
Day03_3.js
//-- Day3 応用演習 --//
//-- Q1 --//
function isEven(n) {
    while (2 < n) {
        n = n - 2;
    }

    if (n === 2) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isEven(150));
console.log(isEven(151));

//-- Q2 --//
function getGreaterValue(num1, num2) {
    if (num1 <= num2) {
        return num2;
    }
    else {
        return num1;
    }
}

console.log(getGreaterValue(10, 15));
console.log(getGreaterValue(15, 10));
console.log(getGreaterValue(15, 15));

//-- Q3 ---//
function getGreatestValue(...number) {
    let i = 0;
    let maxNumber = 0;

    for (i = 0; i < number.length; i++) {
        if (maxNumber < number[i]) {
            maxNumber = number[i];
        }
    }
    return maxNumber
}

console.log(getGreatestValue(10, 15));
console.log(getGreatestValue(15, 10));
console.log(getGreatestValue(1, 2, 3 ,4 ,5));
console.log(getGreatestValue(1, 10, 3 ,4 ,50));
Day03_4.js
//-- Day3 ナイトメア問題 --//
//-- Q1 --//
function flatten(array1) {
    let  array2 = [];
    let  i = 0;
    let  j = 0;
    let  count = 0;

    for (i = 0; i < array1.length; i++) {
        if (Array.isArray(array1[i])) {
            for (j = 0; j < array1[i].length; j++) {
                array2[count] = array1[i][j];
                count++
            }
        }
        else {
            array2[count] = array1[i];
            count++;
        }
    }

    return array2;
}

console.log(flatten([1, [6, 8, 79], 3, [4, 5]]));
console.log(flatten([1, 2, 3, [4, 5, 6]]));
console.log(flatten([[1], [2], [3], [4, 5, 6]]));
Day04_1.js
//-- Day4 基礎問題 --//
//-- Q1 --//
function simplePasswordLock(password) {
    if (password === "password") {
        return "Correct Welcome.";
    }
    else {
        return "Incorrect password, please try agein.";
    }
}
console.log(simplePasswordLock("qwerty"));
console.log(simplePasswordLock("password"));

//-- Q2 --//
console.log("Hello".length);                            //=>5
console.log("The length of this string is 31".length);  //=>31
console.log(" spaces! ".length);                        //=>9

//-- Q3 --//
function isItTooLong(myString) {
    const stringLength = 10;

    if (typeof myString !== "string") {
        return "Invalid value";
    }

    if (stringLength < myString.length) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isItTooLong(10));               // ==>Invalid value
console.log(isItTooLong("0123456789"));     // ==>false
console.log(isItTooLong("0123456789a"));    // ==>true

//-- Q4 --//
function biggerNumber(numOne, numTwo) {

    if (typeof numOne !== "number") {
        return "The numOne is Invalid value";
    }
    else if (typeof numTwo !== "number") {
        return "The numTwo is Invalid value";
    }

    if (numOne === numTwo) {
        return "two values are the same.";
    }
    else if (numTwo < numOne) {
        return "The first argument is bigger.";
    }
    else {
        return "The second argument is bigger.";
    }
}
console.log(biggerNumber("aa", 3));
console.log(biggerNumber(4, "aa"));
console.log(biggerNumber(4, 3));
console.log(biggerNumber(3, 4));
console.log(biggerNumber(4, 4));

//-- Q5 --//
function printDataType(data) {
    if (typeof data === "number") {
        console.log("This is a number.");
    }
    else if (typeof data === "string") {
        console.log("This is a string.");
    }
    else if (typeof data === "boolean") {
        console.log("This is a boolean.");
    }
    else {
        console.log("This is not a string, boolean, or number.");
    }

    return typeof data;
}
printDataType(42);
printDataType("Hello!");
printDataType(true);
printDataType(undefined);

//-- Q6 --//
function greeting(porson, country) {
    if ((typeof porson !== "string") || (typeof country !== "string")) {
        return "Invalid value";
    }

    if (country === "Japanese") {
        return "こんにちは、" + porson + "!";
    }
    else if (country === "English") {
        return "Hello," + porson + "!";
    }
    else if (country === "German") {
        return "Gutentag," + porson + "!";
    }
    else if (country === "Spanish") {
        return "Hola," + porson + "!";
    }
    else {
        return "Invalid value";
    }
}
console.log(greeting("Herry Potter", "Japanese"));
console.log(greeting("Herry Potter", "English"));
console.log(greeting("Herry Potter", "German"));
console.log(greeting("Herry Potter", "Spanish"));
console.log(greeting(10, "Japanese"));
console.log(greeting("Herry Potter", 7));
console.log(greeting("Herry Potter", "Japan"));

//-- Q7 --//
function isEven(number) {
    if (typeof number !== "number") {
        return "This is not a number."
    }

    return number % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(7));
console.log(isEven("aa"));
Day04_2.js
//-- Day4 中級演習 --//
//-- Q1 --//
function isOdd(number) {
    return number % 2 === 1;
}
console.log(isOdd(4));
console.log(isOdd(5));

function isPositive(number) {
    return 0 < number;
}
console.log(isPositive(1));
console.log(isPositive(0));
console.log(isPositive(-1));

function isNegative(number) {
    return number < 0;
}
console.log(isNegative(1));
console.log(isNegative(0));
console.log(isNegative(-1));

function isZero(number) {
    return number === 0;
}
console.log(isZero(1));
console.log(isZero(0));
console.log(isZero(-1));

//-- Q1 --//
function randomNumber(number) {
    return Math.floor(Math.random() * number);
}
console.log(randomNumber(10));

function guessMyNumber(number) {
    const randomNum = Math.floor(Math.random() * 6);

    if (randomNum === number) {
        console.log(randomNum);
        return "Yes!";
    }
    else {
        console.log(randomNum);
        return "No!";
    }
}
console.log(guessMyNumber(5));
Day04_3.js
//-- Day4 応用演習 --//
//-- Q1 case1 --//
function randomStopLight() {
    const randomNum = Math.floor(Math.random() * 11);
    console.log(randomNum);

    if (randomNum < 3) {
        return "\x1b[31m●\x1b[30mRed";
    }
    else if (randomNum < 7) {
        return "\x1b[33m●\x1b[30mYellow";
    }
    else {
        return "\x1b[32m●\x1b[30mGreen";
    }
}
console.log(randomStopLight());

//-- Q1 case2 --//
// console.log("%c----Q1 case2----", 'color:red; font-size:20px');
function randomStopLight02() {
    const randomNum = Math.floor(Math.random() * 11);
    console.log(randomNum);

    if (randomNum < 3) {
        console.log("%c●%cRed", "color:red; font-size:20px", "");
        // return '"%c●%cRed", "color:red; font-size:20px", ""';
    }
    else if (randomNum < 7) {
        console.log("%c●%cYellow", "color:yellow; font-size:20px", "")
        // return '"%c●%cYellow", "color:yellow; font-size:20px", ""';
    }
    else {
        console.log("%c●%cGreen", "color:green; font-size:20px", "")
        // return '"%c●%cGreen", "color:green; font-size:20px", ""'
    }
    return 0;
}
// console.log(randomStopLight02());
randomStopLight02();
Day05_1.js
//-- 基礎演習 --//
//-- Q1 --//
console.log("%c--- Q1 ----------", 'color:red; font-size:14px');
/**
 * @param {string} firstName - 下の名前
 * @param {string} lastName - 苗字
 * @returns {string} 名前と苗字を連結し、間にスペースを入れたもの
 */
function getFullName(
    firstName,
    lastName
    ) {
    return firstName + " " + lastName;
}

actual = getFullName("Ken", "Watanabe");
expected = "Ken Watanabe";

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}



//-- Q2 --//
console.log("%c--- Q2 ----------", 'color:red; font-size:14px');
/**
    * @param {string} name - 人の名前
    * @param {boolean} isFormal - 敬称をつけるべきかどうか（敬称ありならtrue、なしならfalse）
    * @returns {string} 与えられた人の名前と敬称が入った挨拶文
    */
function simpleGreeting(name, isFormal) {
    if (isFormal) {
        return "Hello, " + name + "-san.";
    } else {
        return "Hello, " + name + ".";
    }
}

actual = simpleGreeting("Amy", true);
expected = "Hello, Amy-san.";

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = simpleGreeting("Matt", false);
expected = "Hello, Matt.";

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

//-- Q3 --//
console.log("%c--- Q3 ----------", 'color:red; font-size:14px');
/**
    * @param {number} ??? - 1 番目の数字
    * @param {number} ??? - 2 番目の数字
    * @returns {boolean} 与えられた 1 番目の数字が 2 番目の数より大きいかどうか
*/
// 関数を宣言しましょう
function isGreaterThan(num1, num2) {
    if (num2 < num1) {
        return true;
    } else {
        return false;
    }
}

actual = isGreaterThan(5, 4);
expected = true;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = isGreaterThan(3, 4);
expected = false;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

//-- Q4 --//
console.log("%c--- Q4 ----------", 'color:red; font-size:14px');
/**
    * @param {string} password - パスワード
    * @returns {string} パスワードが一致しているか
*/
function simplePasswordLock(password) {
    if (password === "password") {
        return "Correct! Welcome.";
    } else {
        return "Incorrect password, please try again.";
    }
}

actual = simplePasswordLock("qwert");
expected = "Incorrect password, please try again.";

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = simplePasswordLock("password");
expected = "Correct! Welcome.";

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

/**
    * @param {string} str 文字列
    * @returns {boolean} 文字列の長さが10より長いか判定
*/
function isItTooLong(str) {
    return 10 < str.length;
}

actual = isItTooLong("0123456789");
expected = false;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = isItTooLong("0123456789a");
expected = true;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

/**
    * @param {number} num1 １番目の数字
    * @param {number} num2 ２番目の数字
    * @returns {string} num1とnum2のどちらが大きいか判定
*/
function biggerNumber(num1, num2) {
    if (num2 < num1) {
        return "The first argument is bigger.";
    } else if (num1 < num2) {
        return "The second argument is bigger.";
    } else {
        return "same";
    }
}

actual = biggerNumber(4, 3);
expected = "The first argument is bigger.";

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = biggerNumber(3, 4);
expected = "The second argument is bigger.";

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = biggerNumber(4, 4);
expected = "same";

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

/**
    * @param {any} data データ
    * @returns {string} データ型によって型種類を文字列で出力
*/
function printDataType(data) {
    switch (typeof data) {
        case "number":
            return "This is a number.";
        case "string":
            return "This is a string."
        case "boolean":
            return "This is a boolean."
        default:
            return "This is not a string, boolean, or number."
    }
}

actual = printDataType(42);
expected = "This is a number.";

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = printDataType("Hello");
expected = "This is a string.";

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = printDataType(true);
expected = "This is a boolean.";

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = printDataType(undefined);
expected = "This is not a string, boolean, or number.";

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

/**
    * @param {string} person 氏名の文字列
    * @param {string} language 使用言語
    * @returns {string} 使用言語に合わせた挨拶文と氏名を表示
*/
function greeting(person, language) {
    switch (language) {
        case "Japanese":
            return "konnichiwa, " + person + "!";
        case "English":
            return "Hello, " + person + "!";
        case "German":
            return "Gutentag, " + person + "!";
        case "Spanish":
            return "Hola, " + person + "!";
        default:
            return "値が不正です";
    }
}

actual = greeting("Hashimoto", "English");
expected = "Hello, Hashimoto!";

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = greeting("Hashimoto", "Japanese");
expected = "konnichiwa, Hashimoto!";

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = greeting("Hashimoto", "German");
expected = "Gutentag, Hashimoto!";

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = greeting("Hashimoto", "Spanish");
expected = "Hola, Hashimoto!";

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

//-- Q5 --//
console.log("%c--- Q5 ----------", 'color:red; font-size:14px');
/**
    * @param {string} operator ：{"+"|"-"|"*"|"/"|"**"|"%"} ??? - 使用する算術演算子を表す文字列
    * @param {number} num1 ：１番目の数字
    * @param {number} num2 ：２番目の数字
    * @returns {number} ：与えられた演算子を被演算子と組み合わせて実行した結果
*/
function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        case "**":
            return num1 ** num2
        case "%":
            return num1 % num2;
        default:
            return "値が不正です";
    }
}

actual = operate("+", 1, 2);
expected = 3;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = operate("-", 100, 33);
expected = 67;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = operate("*", 11, 10);
expected = 110;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = operate("/", 99, 11);
expected = 9;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = operate("**", 2, 10);
expected = 1024;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = operate("%", 8, 4);
expected = 0;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

//-- Q6 --//
console.log("%c--- Q6 ----------", 'color:red; font-size:14px');
/**
 * @param {string} color - チェックしたい色の名前
 * @returns {boolean} 与えられた色が虹色に含まれているかどうか
 */
// 関数を定義しましょう
function isRainbowColor(color) {
    const rainbowColor = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    let i = 0;
    let ans = false;

    for (i = 0; i < rainbowColor.length; i++) {
        if (color === rainbowColor[i]) {
            ans = true;
            break;
        }
    }
    return ans;
}

actual = isRainbowColor("ed");
expected = false;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = isRainbowColor("rEd");
expected = false;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = isRainbowColor("Brown");
expected = false;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = isRainbowColor("orange");
expected = true;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = isRainbowColor("yellow");
expected = true;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = isRainbowColor("green");
expected = true;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = isRainbowColor("blue");
expected = true;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = isRainbowColor("indigo");
expected = true;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = isRainbowColor("violet");
expected = true;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}
// 他の虹色をチェックするテストを書きましょう
Day05_2.js
//-- Day5 中級演習 --//
let actual = 0;
let expected = 0;
//-- Q1 --//
console.log("%c--- Q1 ----------", 'color:red; font-size:14px');
/**
 * @param {any} auy - チェックする値
 * @returns {string} 与えられた引数のデータ型を表すわかりやすいメッセージ
 */
function typeOfFriendly(any) {
    const anyType = typeof any;

    switch (anyType) {
        case "number":
            return "与えられた引数は number (数値) です。";
        case "string":
            return "与えられた引数は string (文字列) です。";
        case "boolean":
            return "与えられた引数は boolean (真偽値) です。";
        default:
            return "値が不正です";
    }
}

actual = typeOfFriendly("Hello");
expected = "与えられた引数は string (文字列) です。";

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = typeOfFriendly(5);
expected = "与えられた引数は number (数値) です。";

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = typeOfFriendly(true);
expected = "与えられた引数は boolean (真偽値) です。";

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}
// 他の型をチェックするテストも書きましょう


//-- Q2 --//
console.log("%c--- Q2 ----------", 'color:red; font-size:14px');
/**
 * @param {"=="|"==="|"<"|"<="|">"|">="} operator - 使用したい比較演算子
 * @param {number} numA - 1 番目の被演算子
 * @param {number} numB - 2 番目の被演算子
 * @returns {number} 与えられた演算子を被演算子と組み合わせて比較した結果
*/
function compare(operator, numA, numB) {
    switch (operator) {
        case "==":
            return numA == numB;
        case "===":
            return numA === numB;
        case "<":
            return numA < numB;
        case "<=":
            return numA <= numB;
        case ">":
            return numA > numB;
        case ">=":
            return numA >= numB;
        default:
            return "値が不正です";
    }
}

actual = compare("===", 1, 1);
expected = true;

if (actual === expected) {
    console.log("Test PASSED!");
}
else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = compare("===", 1, "1");
expected = false;

if (actual === expected) {
    console.log("Test PASSED!");
}
else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = compare("==", 1, "1");
expected = true;

if (actual === expected) {
    console.log("Test PASSED!");
}
else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = compare("<", 1, 5);
expected = true;

if (actual === expected) {
    console.log("Test PASSED!");
}
else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = compare("<=", 1, 5);
expected = true;

if (actual === expected) {
    console.log("Test PASSED!");
}
else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = compare(">", 1, 5);
expected = false;

if (actual === expected) {
    console.log("Test PASSED!");
}
else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = compare(">=", 1, 5);
expected = false;

if (actual === expected) {
    console.log("Test PASSED!");
}
else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}
Day05_3
//-- Day5 応用演習 --//
let actual = 0;
let expected = 0;
//-- Q1 --//
console.log("%c--- Q1 ----------", 'color:red; font-size:14px');
/**
 * @param {number} ...number - 1 番目の数値
 * @param {number} [???] - 2 番目の数値 (任意)
 * @param {number} [???] - 3 番目の数値 (任意)
 * @returns {string} 与えられた数字を 1 つの文字列に結合したもの
 */
function concatenateNumbers(...number) {
    let i = 0;
    let ans = 0;

    for (i = 0; i < number.length; i++) {
        if (i === 0) {
            ans = number[i].toString();
        }
        else {
            ans = ans + number[i].toString();
        }
    }

    return ans;
}

actual = concatenateNumbers(7);
expected = "7";

if (actual === expected) {
    console.log("Test PASSED!");
}
else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = concatenateNumbers(7, 9);
expected = "79";

if (actual === expected) {
    console.log("Test PASSED!");
}
else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = concatenateNumbers(199, 532);
expected = "199532";

if (actual === expected) {
    console.log("Test PASSED!");
}
else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}


//-- Q2 --//
console.log("%c--- Q2 ----------", 'color:red; font-size:14px');
/**
 * @param {number} number - 初めの数量
 * @param {number} halfLifeTime - 半減期（数量が半分になるまでの時間）
 * @param {number} period - 経過時間
 * @returns {number} 与えられた時間が経過したあとに残っている数量
 */
function halfLife(number, halfLifeTime, period) {
    return number * (1 / 2) ** (period / halfLifeTime)
}


actual = halfLife(1, 1, 1);
expected = 1 / 2;

if (actual === expected) {
    console.log("Test PASSED!");
}
else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = halfLife(8, 4, 2);
expected = 4 * Math.SQRT2;

if (actual === expected) {
    console.log("Test PASSED!");
}
else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = halfLife(2, 2, 4);
expected = 1 / 2;

if (actual === expected) {
    console.log("Test PASSED!");
}
else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

 
//-- Q3 --//
console.log("%c--- Q3 ----------", 'color:red; font-size:14px');
/**
 * @param {string} str - 文字列
 * @returns {string} 与えられた文字列の小文字と大文字を逆にした文字列。アルファベット以外は変更しない。
*/
function invertCase(str) {
    const strAtoZ ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let str2 = [];
    let i = 0;
    let j = 0;

    for (i = 0; i < str.length; i++) {
        for (j = 0; j < strAtoZ.length; j++) {
            if (str[i] === strAtoZ[j]) {
                str2 = str2 + str[i].toLowerCase();
                break;
            }
        }
        if (j === strAtoZ.length) {
            str2 = str2 + str[i].toUpperCase();
        }
    }
    return str2;
}

actual = invertCase("I hope you are having a nice day");
expected = "i HOPE YOU ARE HAVING A NICE DAY";

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = invertCase("My daughter is 5 years old");
expected = "mY DAUGHTER IS 5 YEARS OLD";

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}
Day05_4.js
//-- Day5 ナイトメア問題 --//
/**
 * @param {number} number - チェックしたい数字
 * @returns {boolean} 与えられた数字が素数かどうか
*/
let actual = 0;
let expected = 0;

function isPrime(number) {
    let i = 1;
    let count = 0;

    if (number <= 1) {
        return false;
    }

    while (i <= Math.sqrt(number)) {
        if (number % i === 0) {
            count++;
        }
        i++;

        if (count === 2) {
            break;
        }
    }

    if (count === 1) {
        return true;
    }
    else {
        return false;
    }
}

actual = isPrime(1);
expected = false;

if (actual === expected) {
    console.log("Test PASSED!");
}
else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = isPrime(2);
expected = true;

if (actual === expected) {
    console.log("Test PASSED!");
}
else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = isPrime(3);
expected = true;

if (actual === expected) {
    console.log("Test PASSED!");
}
else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = isPrime(4);
expected = false;

if (actual === expected) {
    console.log("Test PASSED!");
}
else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = isPrime(5);
expected = true;

if (actual === expected) {
    console.log("Test PASSED!");
}
else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = isPrime(104728);
expected = false;

if (actual === expected) {
    console.log("Test PASSED!");
}
else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = isPrime(104729);
expected = true;

if (actual === expected) {
    console.log("Test PASSED!");
}
else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}
Day06_01.js
let actual;
let expected;

//-- Day6 続・ _条件分岐_ 基礎演習 Q1 --//
console.log("%c=== Day6 続・ _条件分岐_ 基礎 Q1 ===",
    'color:red; font-size:14px');
/**
 * @param {number} age - 年齢
 * @returns {boolean} 与えられた年齢がティーンエイジャー（13 歳から 19 歳までの間：「thirTEEN」から「nineTEEN」）かどうか
*/
function isTeenager(age) {
// ここにコードを書きましょう.
    if (13 < age && age < 19) {
        return true;
    } else {
        return false;
    }
}

actual = isTeenager(3);
expected = false;

if (actual === expected) {
console.log("Yay! Test PASSED.");
} else {
console.error("Test FAILED. Keep trying!");
console.log("    actual: ", actual);
console.log("  expected: ", expected);
}

actual = isTeenager(14);
expected = true;

if (actual === expected) {
console.log("Yay! Test PASSED.");
} else {
console.error("Test FAILED. Keep trying!");
console.log("    actual: ", actual);
console.log("  expected: ", expected);
}


actual = isTeenager(19);
expected = false;

if (actual === expected) {
console.log("Yay! Test PASSED.");
} else {
console.error("Test FAILED. Keep trying!");
console.log("    actual: ", actual);
console.log("  expected: ", expected);
}
Day06_02.js
let actual;
let expected;

//-- Day6 続・ _条件分岐_ 基礎演習 Q2 --//
console.log("%c=== Day6 続・ _条件分岐_ 基礎 Q2 ===",
    'color:red; font-size:14px');
function isTeenager(age) {
    // ここにコードを書きましょう.
    if (typeof age === "number") {
        if (13 < age && age < 19) {
            return true;
        } else {
            return false;
        }
    } else {
        return "無効です！与えられた年齢は数字ではありません！";
    }
}

actual = isTeenager("Hello!");
expected = "無効です！与えられた年齢は数字ではありません！";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isTeenager(true);
expected = "無効です！与えられた年齢は数字ではありません！";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isTeenager();
expected = "無効です！与えられた年齢は数字ではありません！";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}
Day06_03.js
let actual;
let expected;

//-- Day6 続・ _条件分岐_ 基礎演習 Q3 --//
console.log("%c=== Day6 続・ _条件分岐_ 基礎 Q3 ===", 'color:red; font-size:14px');
/**
 * @param {string} person - 人の名前
 * @param {boolean} greeting - 丁寧な挨拶にするかどうかを表すブーリアン
 * @param {boolean} greetingTime - "Hello" なら true を、"Goodbye" なら false
 * @returns {string} 与えられた引数に応じた適切な挨拶の文章
*/
// ここにコードを書きましょう.
function anotherGreeting(person, greeting, greetingTime) {
    if (greeting === true) {
        if (greetingTime === true) {
            return "Hello, " + person + "-san.";
        } else {
            return "Goodbye, " + person + "-san.";
        }
    } else {
        if (greetingTime === true) {
            return "Hello, " + person + "!";
        } else {
            return "Goodbye, " + person + "!";
        }
    }
}

actual = anotherGreeting("Mary", true, true);
expected = "Hello, Mary-san.";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = anotherGreeting("Mary", false, true);
expected = "Hello, Mary!";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = anotherGreeting("Felix", true, false);
expected = "Goodbye, Felix-san.";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}
Day06_04.js
let actual;
let expected;

//-- Day6 続・ _条件分岐_ 中級演習 Q1 --//
console.log("%c=== Day6 続・ _条件分岐_ 中級 Q1 ===", 'color:red; font-size:14px');
/**
 * @param {string} person - 人の名前
 * @param {boolean} greeting - 丁寧な挨拶にするかどうかを表すブーリアン
 * @param {boolean} greetingTime - "Hello" なら true を、"Goodbye" なら false
 * @returns {string} 与えられた引数に応じた適切な挨拶の文章
*/
// ここにコードを書きましょう.
function anotherGreeting(person, greeting, greetingTime) {
    if ((typeof person !== "string") || (typeof greeting !== "boolean") || (typeof greetingTime !== "boolean")) {
        return "無効なインプットです！"
    }
    
    if (greeting === true) {
        if (greetingTime === true) {
            return "Hello, " + person + "-san.";
        } else {
            return "Goodbye, " + person + "-san.";
        }
    } else {
        if (greetingTime === true) {
            return "Hello, " + person + "!";
        } else {
            return "Goodbye, " + person + "!";
        }
    }
}

actual = anotherGreeting("Mary", true, true);
expected = "Hello, Mary-san.";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = anotherGreeting("Mary", false, true);
expected = "Hello, Mary!";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = anotherGreeting("Felix", true, false);
expected = "Goodbye, Felix-san.";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = anotherGreeting(true, false, true);
expected = "無効なインプットです！";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = anotherGreeting("Sam", true, 0);
expected = "無効なインプットです！";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}
Day06_05.js
let actual;
let expected;

//-- Day6 続・ _条件分岐_ 中級演習 Q2 --//
console.log("%c=== Day6 続・ _条件分岐_ 中級 Q2 ===", 'color:red; font-size:14px');
// 関数 getLetterGrade を宣言してください。次の説明を参考にしましょう。
// 90 以上、100 以下は、 "A"
// 80 以上、89 以下は、"B"
// 70 以上、79 以下は、"C"
// 60 以上、69 以下は、"D"
// 59 以下の場合は、"F"
/**
 * @param {number} number - 0 以上 100 以下の点数
 * @returns {"A"|"B"|"C"|"D"|"F"} 点数に応じた成績
*/
function getLetterGrade(number) {
    if (100 < number) {
        return "値が不正です";
    } else if (90 <= number) {
        return "A";
    } else if (80 <= number) {
        return "B";
    } else if (70 <= number) {
        return "C";
    } else if (60 <= number) {
        return "D";
    } else if (0 <= number) {
        return "E"
    } else {
        return "値が不正です";
    }
}

actual = getLetterGrade(95);
expected = "A";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください
actual = getLetterGrade(-100);
expected = "値が不正です";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = getLetterGrade("a");
expected = "値が不正です";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = getLetterGrade(101);
expected = "値が不正です";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}
Day06_06.js
let actual;
let expected;

//-- Day6 続・ _条件分岐_ 中級演習 Q3 --//
console.log("%c=== Day6 続・ _条件分岐_ 中級 Q3 ===", 'color:red; font-size:14px');
// 関数 getLetterGrade を宣言してください。次の説明を参考にしましょう。
// 90 以上、100 以下は、 "A"
// 80 以上、89 以下は、"B"
// 70 以上、79 以下は、"C"
// 60 以上、69 以下は、"D"
// 59 以下の場合は、"F"
/**
 * @param {number} number - 0 以上 100 以下の点数
 * @returns {"A"|"B"|"C"|"D"|"F"} 点数に応じた成績
*/
function getLetterGrade(number) {
    if (100 < number) {
        return "無効な点数です。";
    } else if (90 <= number) {
        return "A";
    } else if (80 <= number) {
        return "B";
    } else if (70 <= number) {
        return "C";
    } else if (60 <= number) {
        return "D";
    } else if (0 <= number) {
        return "F"
    } else {
        return "無効な点数です。";
    }
}

actual = getLetterGrade(101);
expected = "無効な点数です。";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください
actual = getLetterGrade(-1);
expected = "無効な点数です。";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}
Day06_07.js
let actual;
let expected;

//-- Day6 続・ _条件分岐_ 中級演習 Q4 --//
console.log("%c=== Day6 続・ _条件分岐_ 中級 Q4 ===", 'color:red; font-size:14px');
// 関数 getBestNumericalGrade を宣言してください。この関数は getLetterGrade と逆のことを行います。
/**
 * @param {"A"|"B"|"C"|"D"|"F"} grade - 成績
 * @returns {number} 各成績における最高点
*/
function getBestNumericalGrade(grade) {
    switch (grade) {
        case "A":
            return 100;
        case "B":
            return 89;
        case "C":
            return 79;
        case "D":
            return 69;
        case "F":
            return 59;
        default:
            return "値が不正です";
    }
}


actual = getBestNumericalGrade("A");
expected = 100;

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = getBestNumericalGrade("B");
expected = 89;

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください
actual = getBestNumericalGrade("F");
expected = 59;

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = getBestNumericalGrade(59);
expected = "値が不正です";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}
Day06_08.js
let actual;
let expected;

//-- Day6 続・ _条件分岐_ 中級演習 Q5 --//
console.log("%c=== Day6 続・ _条件分岐_ 中級 Q5 ===", 'color:red; font-size:14px');
// 関数 getBestNumericalGrade に入力チェックを加えて、無効な文字列を入力した場合、"無効な点数です。" と返すようにしましょう。
/**
 * @param {"A"|"B"|"C"|"D"|"F"} grade - 成績
 * @returns {number} 各成績における最高点
*/
function getBestNumericalGrade(grade) {
    switch (grade) {
        case "A":
            return 100;
        case "B":
            return 89;
        case "C":
            return 79;
        case "D":
            return 69;
        case "F":
            return 59;
        default:
            return "無効な点数です。";
    }
}

actual = getBestNumericalGrade("恐竜ってすばらしい");
expected = "無効な点数です。";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = getBestNumericalGrade(100);
expected = "無効な点数です。";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください
actual = getBestNumericalGrade("a");
expected = "無効な点数です。";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}
Day06_09.js
let actual;
let expected;

//-- Day6 続・ _条件分岐_ 応用演習 Q1 --//
console.log("%c=== Day6 続・ _条件分岐_ 応用 Q1 ===", 'color:red; font-size:14px');
// || 演算子を使用せずに、|| のように機能する関数 or を宣言してください。
/**
 * @param {boolean} num1 - １つめの被演算子
 * @param {boolean} num2 - ２つめの被演算子
 * @returns {boolean} ２つの被演算子を与えられた順番のまま || で評価したときと同じ結果
*/
// ここにコードを書きましょう
function or(num1, num2) {
    if (num1) {
        if (num2) {
            return num1;
        } else {
            return num1;
        }
    } else {
        if (num2) {
            return num2;
        }else {
            return false;
        }
    }
}

actual = or(true, true);
expected = true;

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = or(true, false);
expected = true;

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください
actual = or(false, false);
expected = false;

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = or(false, true);
expected = true;

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = or(true, true);
expected = true;

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = or(true, true);
expected = true;

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = or("bananas", false);
expected = "bananas";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = or("", "bananas");
expected = "bananas";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}
Day06_10.js
let actual;
let expected;

//-- Day6 続・ _条件分岐_ 応用 Q2 --//
console.log("%c=== Day6 続・ _条件分岐_ 応用 Q2 ===", 'color:red; font-size:14px');
// && 演算子を使用せずに、&& のように機能する関数 and を宣言してください。
/**
 * @param {any} num1 - １つめの被演算子
 * @param {any} num2 - ２つめの被演算子
 * @returns {any} ２つの被演算子を与えられた順番のまま && で評価したときと同じ結果
*/
// ここにコードを書きましょう
function and(num1, num2) {
    if (num1) {
        if (num2) {
            return num1;
        } else {
            return false;
        }
    } else {
        if (num2) {
            return num1;
        } else {
            return num1;
        }
    }
}

actual = and(true, true);
expected = true;

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = and(true, false);
expected = false;

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください
actual = and(false, true);
expected = false;

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = and(false, false);
expected = false;

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = and("bananas", false);
expected = false;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = and("", "bananas");
expected = "";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}
Day06_11.js
let   actual = 0;
let   expected = 0;

//-- Day6 関数, 比較, 条件分岐 基礎演習 Q1--//
console.log("%c== Day6 関数, 比較, 条件分岐 基礎演習 Q1 ==", 'color:red; font-size:14px');
/**
 * @param {string} str - テストの対象となる文字列
 * @param {number} strLength - 閾値
 * @returns {any} 与えられた文字列の長さが指定された閾値より長いかどうか
*/
// ここにコードを書きましょう
function isLongerThan(str, strLength) {
    if ((typeof str !== "string") || (typeof strLength !== "number")) {
        return "Invalid input.";
    }

    if (strLength < str.length) {
        return true;
    } else {
        return false;
    }
}

actual = isLongerThan("three", 3);
expected = true;

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = isLongerThan("three", 5);
expected = false;

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = isLongerThan(3, 5);
expected = "Invalid input.";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}
Day06_12.js
let   actual = 0;
let   expected = 0;

//-- Day6 関数, 比較, 条件分岐 基礎演習 Q2--//
console.log("%c== Day6 関数, 比較, 条件分岐 基礎演習 Q2 ==", 'color:red; font-size:14px');
// 関数 isOddWithoutIf を宣言してください。ただし、if キーワードを使ってはいけません。
//（今までに既にこれと似たような関数を作成したかもしれませんが、過去のコードは見ずにもう一度自分で作成してみましょう。）
//入力値の型チェックは必ず行ってください。
/**
 * @param {number} num - テストの対象となる数値
 * @returns {boolean} 与えられた数値が奇数かどうかを表すブーリアン
*/
// ここにコードを書きましょう
function isOddWithoutIf(num) {
    return num % 2 === 1;
}

actual = isOddWithoutIf(3);
expected = true;

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = isOddWithoutIf(4);
expected = false;

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}
Day06_13.js
let   actual = 0;
let   expected = 0;

//-- Day6 関数, 比較, 条件分岐 基礎演習 Q3--//
console.log("%c== Day6 関数, 比較, 条件分岐 基礎演習 Q3 ==", 'color:red; font-size:14px');
// 関数 getSimpleNumberName を宣言してください。
/**
 * @param {number} num - 数値（0-10）。その名前がアルファベットの形で返ることになる
 * @returns {"zero"|"one"|"two"|"three"|"four"|"five"|"six"|"seven"|"eight"|"nine"|"ten"} 与えられた数値をアルファベットで記した時の名前
*/
// ここにコードを書きましょう
function getSimpleNumberName(num) {
    const numStr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

    if (typeof num !== "number") {
        return "値が不正です";
    }

    if (0 <= num && num <= 10) {
        return numStr[num];
    } else {
        return "値が不正です";
    }
}

actual = getSimpleNumberName(0);
expected = "zero";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください
actual = getSimpleNumberName(10);
expected = "ten";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = getSimpleNumberName(11);
expected = "値が不正です";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = getSimpleNumberName(-1);
expected = "値が不正です";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = getSimpleNumberName("1");
expected = "値が不正です";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}
Day06_14.js
let   actual = 0;
let   expected = 0;

//-- Day6 関数, 比較, 条件分岐 基礎演習 Q4 --//
console.log("%c== Day6 関数, 比較, 条件分岐 基礎演習 Q4 ==", 'color:red; font-size:14px');
// 関数 getRegularConvexPolygonName を宣言してください。
/**
 * @param {number} num - 正多角形の辺の数 (3-8)
 * @returns {"triangle"|"square"|"pentagon"|"hexagon"|"heptagon"|"octagon"} 与えられた数の辺を持つ凸多角形の英語名
*/
// ここにコードを書きましょう
function getRegularConvexPolygonName(num) {
    const polygon = ["triangle", "square", "pentagon", "hexagon", "heptagon", "octagon"];

    if (typeof num !== "number") {
        return "値が不正です。";
    }

    if ((0 <= num) && (num <= 8)) {
        return polygon[num - 3];
    } else {
        return "値が不正です。";
    }
}

actual = getRegularConvexPolygonName(3);
expected = "triangle";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください
actual = getRegularConvexPolygonName(8);
expected = "octagon";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = getRegularConvexPolygonName(9);
expected = "値が不正です。";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = getRegularConvexPolygonName(-1);
expected = "値が不正です。";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = getRegularConvexPolygonName("1");
expected = "値が不正です。";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}
Day06_15.js
let   actual = 0;
let   expected = 0;

//-- Day6 関数, 比較, 条件分岐 中級演習 Q1 --//
console.log("%c== Day6 関数, 比較, 条件分岐 中級演習 Q1 ==", 'color:red; font-size:14px');
// 関数 getTimeOfDay を宣言してください。
// 12:00 AM から - 4:00 AM の間（4:00 は除く）: night
// 4:00 AM から 12:00 PM の間（12:00 は除く）: morning
// 12:00 PM から - 5:00 PM の間（5:00 は除く）: afternoon
// 5:00 PM から - 8:00 PM の間（8:00 は除く）: evening
// 8:00 PM から - 8:30 PM の間（8:30 は除く）: evening
// 8:30 PM から - 9:00 AM の間（9:00 は除く）: night
// 9:00 PM から - 12:00 AM の間（12:00 は除く）: night
/**
 * @param {1|2|3|4|5|6|7|8|9|10|11|12} hourValue - 時 (12時間制)
 * @param {number} minuteValue - 分
 * @param {"AM"|"PM"} timeDivision - "AM" または "PM"
 * @returns {"morning"|"afternoon"|"evening"|"night"} 大まかな「時間帯」
*/
// ここにコードを書きましょう
function getTimeOfDay(hoursValue, minutesValue, timeDivision) {
    if ((typeof hoursValue !== "number") || (typeof minutesValue !== "number") || (typeof timeDivision !== "string")) {
        return "値が不正です。";
    }

    if ( !((1 <= hoursValue) && (hoursValue <= 12)) ) {
        return "値が不正です。";
    }

    if ( !((0 <= minutesValue) && (minutesValue <= 59)) ) {
        return "値が不正です。";
    }

    if (timeDivision === "AM") {
        if ((hoursValue === 12) || (hoursValue < 4)) {
            return "night";
        } else if ((4 <= hoursValue) && (hoursValue < 12)) {
            return "morning";
        }
    } else {
        if ((hoursValue === 12) || (hoursValue < 5)) {
            return "afternoon";
        } else if ((5 <= hoursValue) && (hoursValue < 8)) {
            return "evening"
        } else if ((hoursValue === 8) && (minutesValue < 30)) {
            return "evening"
        } else if ((hoursValue === 8) && (30 <= minutesValue)) {
            return "night";
        } else if ((8 < hoursValue) && (hoursValue < 12)) {
            return "night";
        } else {
            return "値が不正です。";
        }
    }
}

actual = getTimeOfDay(4, 0, "AM");
expected = "morning";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = getTimeOfDay(3, 59, "AM");
expected = "night";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください。
actual = getTimeOfDay(8, 59, "PM");
expected = "night";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = getTimeOfDay(9, 60, "PM");
expected = "値が不正です。";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = getTimeOfDay(13, 0, "PM");
expected = "値が不正です。";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = getTimeOfDay("13", 0, "PM");
expected = "値が不正です。";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = getTimeOfDay(13, "0", "PM");
expected = "値が不正です。";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = getTimeOfDay(13, 0, 1);
expected = "値が不正です。";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}
Day06_16.js
let   actual = 0;
let   expected = 0;

//-- Day6 関数, 比較, 条件分岐 応用演習 Q1 --//
console.log("%c== Day6 関数, 比較, 条件分岐 応用演習 Q1 ==", 'color:red; font-size:14px');
/**
* @param {number} radiusValue - 半径
* @returns {number} 与えられた半径の円の面積
*/
// ここにコードを書きましょう
const pi = Math.PI;

function getAreaOfCircle(radiusValue) {
    if (typeof radiusValue !== "number") {
        return "値が不正です。";
    }

    if (radiusValue < 0) {
        return "値が不正です。";
    }

    return pi * radiusValue ** 2;
}

// ここにあなたのテストを書きましょう
actual = getAreaOfCircle(1);
expected = pi;

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = getAreaOfCircle(10);
expected = pi * 100;

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = getAreaOfCircle(-10);
expected = "値が不正です。";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = getAreaOfCircle("10");
expected = "値が不正です。";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}
Day06_17.js
let   actual = 0;
let   expected = 0;

//-- Day6 関数, 比較, 条件分岐 ナイトメア問題 Q1 --//
console.log("%c== Day6 関数, 比較, 条件分岐 ナイトメア問題 Q1 ==", 'color:red; font-size:14px');
// 関数 getNumberName を宣言してください。例を下に挙げます。
// -123: negative one hundred twenty three
// ...
// 0: zero
// 1: one
// 2: two
// ...
// 10: ten
// ...
// 100: one hundred
// ...
// 1345: one thousand three hundred forty five
/**
 * @param {number} num - 数値。その名前がアルファベットの形で返ることになる
 * @returns {number} 与えられた数値をアルファベットで記した時の名前
*/
function getNumberName(num) {
    const digit = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const tenDigit = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tensPlace = ["0", "0", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let   ansNumber = [];

    // 10000未満の数字以外はエラー
    if (typeof num !== "number") {
        return "値が不正です";
    }
    
    if (10000 < num) {
        return "値が不正です";
    }

    // 正負の取得
    if (num < 0) {
        num = num * (-1);

        if (10000 < num) {
            return "値が不正です";
        } else {
            ansNumber = ansNumber + "negative ";
        }
    }

    // 1000の位の取得
    if (0 < Math.floor(num / 1000)) {
        ansNumber = ansNumber + digit[Math.floor(num / 1000)] + " thousand ";
        num = num - Math.floor(num / 1000) * 1000;
    }

    // 100の位の取得
    if (0 < Math.floor(num / 100)) {
        ansNumber = ansNumber + digit[Math.floor(num / 100)] + " hundred ";
        num = num - Math.floor(num / 100) * 100;
    }

    // 10の位以下の取得
    if (num < 10) {
        ansNumber = ansNumber + digit[num];
    } else if (num < 20) {
        ansNumber = ansNumber + tenDigit[num % 10];
    } else {
        ansNumber = ansNumber + tensPlace[Math.floor(num / 10)] + " " + digit[num % 10];
    }

    return ansNumber;
}


actual = getNumberName(0);
expected = "zero";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = getNumberName(1345);
expected = "one thousand three hundred forty five";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください
actual = getNumberName(-135);
expected = "negative one hundred thirty five";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = getNumberName(-13005);
expected = "値が不正です";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = getNumberName("abcd");
expected = "値が不正です";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}
Day07_1.js
let actual;
let expected;

//-- Day7 配列入門 基礎演習 Q1 --//
console.log("%c== Day7 配列入門 基礎演習 Q1 ==", 'color:red; font-size:14px');
// 関数 numberOfPeople を宣言してください。
/**
 * @param {Array<string>} arrayOfPeople - 人の名前の配列
 * @returns {number} 与えられた配列の長さ
*/
function numberOfPeople(arrayOfPeople) {
    // ここにコードを書きましょう
    return arrayOfPeople.length;
}

actual = numberOfPeople(["Alex", "Beau", "Carlos", "Dustin"]);
expected = 4;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
}

//-- Day7 配列入門 基礎演習 Q2 --//
console.log("%c== Day7 配列入門 基礎演習 Q2 ==", 'color:red; font-size:14px');
// 5 人のクラスメイトの名前が入った配列 students を宣言してください。関数 numberOfPeople を呼び出し、配列 students を引数として渡しましょう。
// ここにコードを書きましょう.
const students = ["a", "b", "c", "d", "e"];

actual = numberOfPeople(students);
expected = 5;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
}

//-- Day7 配列入門 基礎演習 Q3 --//
console.log("%c== Day7 配列入門 基礎演習 Q3 ==", 'color:red; font-size:14px');
// .push メソッドを使って、先ほど作成した配列 students に値を 3 つ追加しましょう。
// ここにコードを書きましょう.
students.push("f", "g", "h");

actual = numberOfPeople(students);
expected = 8;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
}

//-- Day7 配列入門 基礎演習 Q4 --//
console.log("%c== Day7 配列入門 基礎演習 Q4 ==", 'color:red; font-size:14px');
// 関数 last を宣言してください。
/**
 * @param {Array<any>} array - 配列
 * @returns {any} 与えられた配列の最後の要素を返す
*/
function last(array) {
    // ここにコードを書きましょう
    return array[array.length - 1];
}

// ここにテストを書いてください
actual = last(students);
expected = "h";

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
}

students.push("w");

actual = last(students);
expected = "w";

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
}

//-- Day7 配列入門 基礎演習 Q5 --//
console.log("%c== Day7 配列入門 基礎演習 Q5 ==", 'color:red; font-size:14px');
// ビルトインの .push メソッドの代わりになる関数 push を作ってみましょう！ビルトインの .push メソッドを使ってはいけません。
/**
 * @param {Array<any>} array1 - 配列
 * @param {any} any - 配列の最後に追加する値
 * @returns {number} 処理後の配列の長さを返す。与えられた配列の末尾に、第 2 引数で渡された要素を追加してください。
*/
// ここにコードを書きましょう
function push(array1, any) {
    let initArray = array1;

    initArray[initArray.length] = any;

    return initArray.length;
}

let array = [1, 2, 3, 4];

// 関数が正しい結果を返すことを確認する
actual = push(array, 5);
expected = 5;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
}

// 配列が正しく変更されていることを確認する
actual = array;
expected = [1, 2, 3, 4, 5];

// 上にも書きましたが、配列はそのまま比較することができません。まず、JSON.stringify を使う必要があります。
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
}

// さらにテストを追加してみましょう。
array = [1, 2, 3, 4];

// 関数が正しい結果を返すことを確認する
actual = push(array, [5, 6, 7]);
expected = 5;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
}

// 配列が正しく変更されていることを確認する
actual = array;
expected = [1, 2, 3, 4, [5, 6, 7]];

// 上にも書きましたが、配列はそのまま比較することができません。まず、JSON.stringify を使う必要があります。
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
}
Day07_2.js
let actual;
let expected;

//-- Day7 配列入門 中級演習 Q1 --//
console.log("%c== Day7 配列入門 中級演習 Q1 ==", 'color:red; font-size:14px');
// 関数 hiInTheMiddle を宣言してください。Math.floor を使用する必要があるかもしれません。
// まず初めに、引数として受け取った配列の要素数が奇数かどうかを確認します(ヒント: .length が奇数かどうか)。配列の長さが奇数なら、真ん中の要素が何であろうと "hi" に置換し、配列の長さが偶数なら、何も変更せず、配列を返してください。
/**
 * @param {Array<any>} array1 - 配列
 * @returns {Array<any>} 配列の真ん中が "hi" に置き換えらえた配列、もしくは同じ配列を返す
*/
// ここにコードを書きましょう
function hiInTheMiddle(array1) {
    let initArray = array1.slice();

    if (initArray.length % 2 === 1) {
        initArray[Math.floor(initArray.length / 2)] = "hi";
        return initArray;
    } else {
        return initArray;
    }
}

actual = hiInTheMiddle([1, 2, 3, 4, 5]);
expected = [1, 2, "hi", 4, 5];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
}

actual = hiInTheMiddle([1, 2, 3, 4]);
expected = [1, 2, 3, 4];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
}

actual = hiInTheMiddle([1, 2, 3, 4, 5, 6, 7]);
expected = [1, 2, 3, "hi", 5, 6, 7];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
}

//-- Day7 配列入門 中級演習 Q2 --//
console.log("%c== Day7 配列入門 中級演習 Q2 ==", 'color:red; font-size:14px');
// 関数 pop を宣言してください。与えられた配列から最後の要素を削除し、削除した値を返します。ただし、ビルトインの .pop メソッドを使用することはできません！ .splice メソッドの使用を検討してみてください。
/**
 * @param {Array<any>} anyArray - 配列
 * @returns {any} 与えられた配列の最後の要素を返す。
*/
// ここにコードを書きましょう
function pop(anyArray) {
    let num = 0;

    num = anyArray[anyArray.length - 1];
    anyArray.splice(anyArray.length - 1, 1);
    return num;
}

let array = [1, 2, 3, 4];

actual = pop(array);
expected = 4;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
}

actual = array;
expected = [1, 2, 3];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
}

//-- Day7 配列入門 中級演習 Q3 --//
console.log("%c== Day7 配列入門 中級演習 Q3 ==", 'color:red; font-size:14px');
// 関数 unshift を宣言してください。与えらえた値を与えらえた配列の先頭に追加する関数です。ただし、ビルトインの .unshift メソッドを使用することはできません！ ここでも .splice メソッドの使用を検討してみてください。
/**
 * @param {Array<any>} anyArray - 配列
 * @param {any} anyNumber - 配列の先頭に追加する値
 * @returns {number} 処理後の配列の長さを返す。
*/
// ここにコードを書きましょう
function unshift(anyArray, anyNumber) {
    anyArray.splice(0, 0, anyNumber);

    return anyArray.length;
}

array = [1, 2, 3, 4];

actual = unshift(array, 5);
expected = 5;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
}

actual = array;
expected = [5, 1, 2, 3, 4];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
}

//-- Day7 配列入門 中級演習 Q4 --//
console.log("%c== Day7 配列入門 中級演習 Q4 ==", 'color:red; font-size:14px');
// 関数 shift を宣言してください。shift は与えられた 配列 の先頭の値を削除し、削除された値を返します。ビルトインの .shift メソッドを使用してはいけません。
/**
 * @param {Array<any>} anyArray - 配列
 * @returns {any} 与えられた配列の先頭の要素を返す。
*/
// ここにコードを書きましょう
function shift(anyArray) {
    let numLength = anyArray[0];

    anyArray.splice(0, 1)
    return numLength;
}

array = [1, 2, 3, 4];

actual = shift(array);
expected = 1;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
}

actual = array;
expected = [2, 3, 4];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
}
Day07_3.js
let actual;
let expected;

//-- Day7 配列入門 応用演習 Q1 --//
console.log("%c== Day7 配列入門 応用演習 Q1 ==", 'color:red; font-size:14px');
// 関数 numberOfPeople を宣言してください。
/**
 * @param {Array<string>} arrayOfPeople - 人の名前の配列
 * @returns {number} 与えられた配列の長さ
*/
function numberOfPeople(arrayOfPeople) {
    // ここにコードを書きましょう
    let initArray = arrayOfPeople.slice();
    let i = 0;

    while (initArray[i] !== undefined) {
        i++;
    }
    return i;
}

actual = numberOfPeople(["Alex", "Beau", "Carlos", "Dustin"]);
expected = 4;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
}


//-- Day7 配列入門 応用演習 Q2 --//
console.log("%c== Day7 配列入門 応用演習 Q2 ==", 'color:red; font-size:14px');
// 2 つの配列が互いに逆順かどうかをチェックする関数 areReverses を宣言してください。
// これを機に、配列は、どのようなビルトイン・メソッドが利用できるのか調べてみましょう。
// この問題を解くのにぴったりなメソッドが見つかるかもしれませんよ😉
/**
 * @param {Array<any>} numArray1 - 1 番目の配列
 * @param {Array<any>} numArray2 - 2 番目の配列
 * @returns {boolean} 2 つの配列が互いに逆順かどうか
 */
// ここにコードを書きましょう
function areReverses(numArray1, numArray2) {
    let initArray1 = numArray1.slice();
    let initArray2 = numArray2.slice();
    let i = 0;

    if ((typeof initArray1 !== "object") || (typeof initArray2 !== "object")) {
        return "値が不正です。1";
    } else if (initArray1.length !== initArray2.length) {
        return "値が不正です。2";
    }
    
    initArray2 = initArray2.reverse();

    for (i = 0; i < initArray1.length; i++) {
        if (initArray1[i] !== initArray2[i]) {
            return false;
        }
    }

    return true;
}

let array1 = [1, 2, 3, 4];
let array2 = [4, 3, 2, 1];

actual = areReverses(array1, array2);
expected = true;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
}

actual = array1;
expected = [1, 2, 3, 4];

// 元の配列が変更されていないことを確認する
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
}

array1 = [1, 2, 3, 4];
array2 = [5, 3, 2, 1];

actual = areReverses(array1, array2);
expected = false;

if (actual === expected) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
}

actual = array1;
expected = [1, 2, 3, 4];

// 元の配列が変更されていないことを確認する
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
}


//-- Day7 配列入門 応用演習 Q3 --//
console.log("%c== Day7 配列入門 応用演習 Q3 ==", 'color:red; font-size:14px');
// 関数 concat を宣言してください。ビルトインの .concat を使ってはいけません。
/**
 * @param {Array<any>} numArray1 - 1 番目の配列
 * @param {Array<any>} numArray2 - 2 番目の配列
 * @returns {Array<any>} 与えられた 2 つの配列を連結した新しい 1 つの配列を返す
 */
// ここにコードを書きましょう
function concat(numArray1, numArray2) {
    let initArray1 = numArray1.slice();
    let initArray2 = numArray2.slice();
    let i = 0;

    for (i = 0; i < initArray2.length; i++) {
        initArray1.push(initArray2[i]);
    }
    return initArray1.slice();
}

array1 = [1, 2, 3, 4];
array2 = [4, 3, 2, 1];

actual = concat(array1, array2);
expected = [1, 2, 3, 4, 4, 3, 2, 1];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
}

// 元の配列が変更されていないことを確認する
actual = array1;
expected = [1, 2, 3, 4];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
}

actual = array2;
expected = [4, 3, 2, 1];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
}

array1 = [1, 2, 3, 4];
array2 = [5, 6, 7, "hashi"];

actual = concat(array1, array2);
expected = [1, 2, 3, 4, 5, 6, 7, "hashi"];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
}

//-- Day7 配列入門 応用演習 Q4 --//
console.log("%c== Day7 配列入門 応用演習 Q4 ==", 'color:red; font-size:14px');
// ビルトイン・メソッドにコールバック<sup>＊</sup>を渡す
// <sup>＊</sup>コールバックについては後のレッスンで詳しく取り上げますが、文字列や数値を引数に渡すように、関数を引数に渡すことです。
expected = [1, 2, 3, 4, 5, 6, 7, "hashi"];
console.log(expected.forEach);
expected.forEach(element => console.log(element));
Day07_4.js
let actual;
let expected;

//-- Day7 配列入門 ナイトメア演習 Q1 --//
console.log("%c== Day7 配列入門 ナイトメア演習 Q1 ==", 'color:red; font-size:14px');
// 関数 sort を宣言してください。ビルトインの sort メソッドを使ってはいけません。
// 注目： 配列を並び替える方法はたくさんあります。好きな方法を選んでみましょう！
/**
 * @param {Array<number>} numArray - 数字の配列
 * @returns {Array<number>} 与えられた配列の要素を昇順に並べた新しい配列
*/
function sort01(numArray) {
    // ここにコードを書きましょう.
    let initArray = numArray.slice();
    let temp = 0;
    let i = 0;
    let j = 0;

    for (i = 0; i < initArray.length; i++) {
        if (typeof initArray[i] !== "number") {
            return "値が不正です。";
        }
    }

    for (i = 0; i < initArray.length - 1; i++) {
        for (j = i + 1; j < initArray.length; j++) {
            if (initArray[j] < initArray[i]) {
                temp = initArray[i];
                initArray[i] = initArray[j];
                initArray[j] = temp;
            }
        }
    }

    return initArray;
}

let arrayToSort = [5, 4, 3, 2, 1];

actual = sort01(arrayToSort);
expected = [1, 2, 3, 4, 5];

// 正しい結果を返すことを確認する
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
}

// 元の配列が変更されていないことを確認する
if (JSON.stringify(arrayToSort) === JSON.stringify([5, 4, 3, 2, 1])) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
}

// ここにテストを書いてください
arrayToSort = [5, 44, 3, 222, 1];

actual = sort01(arrayToSort);
expected = [1, 3, 5, 44, 222];

// 正しい結果を返すことを確認する
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
}

arrayToSort = [5, "44", 3, 222, 1];

actual = sort01(arrayToSort);
expected = "値が不正です。";

// 正しい結果を返すことを確認する
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
}

console.log("aa");

function sort02(numArray) {
    let initArray = numArray.slice();
    let minElement = 0;
    let minIndex = 0;
    let temp = 0;
    let i = 0;
    let j = 0;

    for (i = 0; i < initArray.length; i++) {
        if (typeof initArray[i] !== "number") {
            return "値が不正です。";
        }
    }

    for (i = 0; i < initArray.length - 1; i++) {
        minElement = initArray[i];
        minIndex = i;
        for (j = i + 1; j < initArray.length; j++) {
            if (minElement > initArray[j]) {
                minElement = initArray[j];
                minIndex = j;
            }
        }
        temp = initArray[i];
        initArray[i] = initArray[minIndex];
        initArray[minIndex] = temp;
    }

    return initArray;
}

arrayToSort = [5, 4, 3, 2, 1];

actual = sort02(arrayToSort);
expected = [1, 2, 3, 4, 5];

// 正しい結果を返すことを確認する
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
}

// 元の配列が変更されていないことを確認する
if (JSON.stringify(arrayToSort) === JSON.stringify([5, 4, 3, 2, 1])) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
}

// ここにテストを書いてください
arrayToSort = [5, 44, 3, 222, 1];

actual = sort02(arrayToSort);
expected = [1, 3, 5, 44, 222];

// 正しい結果を返すことを確認する
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
}

arrayToSort = [5, "44", 3, 222, 1];

actual = sort02(arrayToSort);
expected = "値が不正です。";

// 正しい結果を返すことを確認する
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED!");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
}
Day08_1.js
function testDD(actual, expected) {
    if (actual === expected) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
    return 0;
}

function testDDforArrays(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Test PASSED.");
      } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
}


//-- Day8 for..of ループ 基礎演習 Q1 --//
console.log("%c== Day8 for..of ループ 基礎演習 Q1 ==", 'color:red; font-size:14px');
// 関数 sumArray を宣言してください。
/**
 * @param {Array<number>} numArray - 数値型の要素を持つ配列
 * @returns {number} 与えられた配列のすべての数字の合計
*/
function sumArray(numArray) {
    // ここにコードを書きましょう。
    let ansNumber = 0;

    for (const number of numArray) {
        ansNumber += number;
    }

    return ansNumber;
}

testDD(sumArray([1, 2, 3, 4]), 10);
// さらにテストを書きましょう。
testDD(sumArray([10, 2, 3, 4]), 19);
testDD(sumArray([-10, 2, 3, 4]), -1);


//-- Day8 for..of ループ 基礎演習 Q2 --//
console.log("%c== Day8 for..of ループ 基礎演習 Q2 ==", 'color:red; font-size:14px');
// 関数 productArray を宣言してください。
/**
* @param {Array<number>} numArray - 数値型の要素を持つ配列
* @returns {number} 与えられた配列のすべての数字をかけあわせた答え
*/
function productArray(numArray) {
    // ここにコードを書きましょう。
    let ansNumber = 1;

    for (const number of numArray) {
        ansNumber *= number;
    }

    return ansNumber;
}
testDD(productArray([1, 2, 3, 4]), 24 );
testDD(productArray([10, 2, 3, 4]), 240);


//-- Day8 for..of ループ 基礎演習 Q3 --//
console.log("%c== Day8 for..of ループ 基礎演習 Q3 ==", 'color:red; font-size:14px');
// 関数 hasFun を宣言してください。
/**
* @param {Array<any>} anyArray
* @returns {boolean} 与えられた配列に "fun" という文字列が入っているかどうかを表すブーリアン
*/
function hasFun(anyArray) {
    // ここにコードを書きましょう。

    for (const any of anyArray) {
        if (any === "fun") {
            return true;
        }
    }

    return false;
}
testDD(hasFun(["whatever", 2, false, "fun", "hello"]), true);
testDD(hasFun(["whatever", 2, false, "run", "hello"]), false);
// さらにテストを書きましょう。
testDD(hasFun(["whatever", "fun", false, "run", "hello"]), true);


//-- Day8 for..of ループ 基礎演習 Q4 --//
console.log("%c== Day8 for..of ループ 基礎演習 Q4 ==", 'color:red; font-size:14px');
// 関数 containsOnlyBooleans を宣言してください。
/**
* @param {Array<any>} boolArray
* @returns {boolean} 与えられた配列の要素がすべてブーリアンかどうかを表すブーリアン
*/
function containsOnlyBooleans(boolArray) {
    // ここにコードを書きましょう。
    let initArray = boolArray.slice();

    for (const booler of initArray) {
        if (typeof booler !== "boolean") {
            return false;
        }
    }
    return true;
}
let array1 = [true, false, true, false, false];
testDD(containsOnlyBooleans(array1), true);
testDD(containsOnlyBooleans([true, true, true, "not a boolean"]), false);
// さらにテストを書きましょう。
testDDforArrays(array1, [true, false, true, false, false]);


//-- Day8 for..of ループ 基礎演習 Q5 --//
console.log("%c== Day8 for..of ループ 基礎演習 Q5 ==", 'color:red; font-size:14px');
// 関数 concatenate を宣言してください。ビルトインの concat メソッドは使わないでください。
/**
* @param {Array<any>} anyArray1 - 1番目の配列
* @param {Array<any>} anyArray2 - 2番目の配列
* @returns {Array<any>} 与えられた2つの配列を連結させた配列
*/
function concatenate(anyArray1, anyArray2) {
    // ここにコードを書きましょう。
    const initArray1 = anyArray1.slice();
    const initArray2 = anyArray2.slice();
    const ansArray = [];

    for (const array1 of initArray1) {
        ansArray.push(array1);
    }
    for (const array2 of initArray2) {
        ansArray.push(array2);
    }

    return ansArray;

}
testDDforArrays(concatenate(["eeny", "meeny"], ["miny", "moe"]), ["eeny", "meeny", "miny", "moe"]);
// さらにテストを書きましょう。
testDDforArrays(concatenate(["eeny"], ["meeny", "miny", "moe"]), ["eeny", "meeny", "miny", "moe"])


//-- Day8 for..of ループ 基礎演習 Q6 --//
console.log("%c== Day8 for..of ループ 基礎演習 Q6 ==", 'color:red; font-size:14px');
// 関数 getEvenNumbers を宣言してください。
/**
* @param {Array<number>} numArray - 数値型の要素を持つ配列
* @returns {Array<number>} 与えられた配列の中の偶数だけを入れた配列
*/
function getEvenNumbers(numArray) {
    // ここにコードを書きましょう。
    const initArray = numArray.slice();
    const ansArray = [];

    for (const number of initArray) {
        if (number % 2 === 0) {
            ansArray.push(number);
        }
    }
    return ansArray;
}
testDDforArrays(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]), [2, 4, 6, 8]);
// さらにテストを書きましょう。
testDDforArrays(getEvenNumbers([1,3,5,7,9]), []);
let arrayQ6 = [1,3,5,7,9];
testDDforArrays(getEvenNumbers(arrayQ6), []);
testDDforArrays(arrayQ6, [1,3,5,7,9]);


//-- Day8 for..of ループ 基礎演習 Q7 --//
console.log("%c== Day8 for..of ループ 基礎演習 Q7 ==", 'color:red; font-size:14px');
// 関数 getMultipliedArray を宣言してください。
/**
* @param {Array<number>} numArray - 数値型の要素を持つ配列
* @param {number} multiplyNumber - 配列の中の数字にかける数字
* @returns {Array<number>} 配列の中の数字に第2引数をかけた結果が入った新しい配列
*/
function getMultipliedArray(numArray, multiplyNumber) {
    // ここにコードを書きましょう。
    const initArray = numArray.slice();
    const ansArray = [];

    for (const number of initArray) {
        ansArray.push(number * multiplyNumber);
    }
    return ansArray;
}

testDDforArrays(getMultipliedArray([1, 2, 3], 6), [6, 12, 18]);
// さらにテストを書きましょう。
let arrayQ7 = [1, 2, 3];
testDDforArrays(getMultipliedArray(arrayQ7, 6), [6, 12, 18]);
testDDforArrays(arrayQ7, [1, 2, 3]);
Day08_2.js
'use strict'
// 1行目に記載している 'use strict' は削除しないでください
function testDD(actual, expected) {
    if (actual === expected) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
    return 0;
}

function testDDforArrays(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Test PASSED.");
      } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
}

let actual;
let expected;

//-- Day8 for..of ループ 中級演習 Q1 --//
console.log("%c== Day8 for..of ループ 中級演習 Q1 ==", 'color:red; font-size:14px');
// 関数 isSorted を宣言してください。
/**
* @param {Array<number>} numArray - 数値型の要素を持つ配列
* @returns {boolean} 与えられた配列が昇順になっているかを表すブーリアン
*/
function isSorted(numArray) {
    // ここにコードを書きましょう。
    let num2;

    for (const number of numArray) {
        if (num2 > number) {
            return false;
        }
        num2 = number;
    }
    
    return true;
}
testDD(isSorted([1, 2, 3]), true);
testDD(isSorted([3, 2, 3]), false);
// さらにテストを書きましょう。
testDD(isSorted([-3, 2, 3]), true);
let arrayQ1 = [-3, 2, 3];
testDD(isSorted(arrayQ1), true);
testDDforArrays(arrayQ1, [-3, 2, 3]);


//-- Day8 for..of ループ 中級演習 Q2 --//
console.log("%c== Day8 for..of ループ 中級演習 Q2 ==", 'color:red; font-size:14px');
// 関数 countOccurrences を宣言してください。
/**
* @param {Array<any>} anyArray - 配列
* @param {string|number|boolean} isStyle - 出現回数をカウントしたい値（値のデータ型は `string`、`number`、`boolean` のいずれかとする。）
* @returns {number} その値が配列内で出てきた回数
*/
function countOccurrences(anyArray, isStyle) {
    // ここにコードを書きましょう。
    const initArray = anyArray.slice();
    let count = 0;

    for (const anyValue of initArray) {
        if (anyValue === isStyle) {
            count++;
        }
    }
    return count;
}
testDD(countOccurrences([1, 2, 3], 2), 1);
testDD(countOccurrences([1, 2, 2], 2), 2)
testDD(countOccurrences([1, 2, "elephant"], "elephant"), 1);
// さらにテストを書きましょう。
let arrayQ2 = [1, 2, true, false, 5];
testDD(countOccurrences(arrayQ2, true), 1);
testDDforArrays(arrayQ2, [1, 2, true, false, 5]);
arrayQ2 = [1, "", true, false, 5];
testDD(countOccurrences(arrayQ2, "number"), 0);
testDDforArrays(arrayQ2, [1, "", true, false, 5]);


//-- Day8 for..of ループ 中級演習 Q3 --//
console.log("%c== Day8 for..of ループ 中級演習 Q3 ==", 'color:red; font-size:14px');
// 関数 reverse を宣言してください。ビルトイン・メソッドの reverse は使わないでください。
/**
* @param {Array<any>} anyArray
* @returns {Array<any>} 与えられた配列の要素が逆の順番に入っている配列
*/
function reverse(anyArray) {
    // ここにコードを書きましょう。
    const initArray = anyArray.slice();
    const ansArray = [];

    for (const anyValue of initArray) {
    ansArray.unshift(anyValue);
    }
    return ansArray;
}

let arrayToReverse = ["eeny", "meeny", "miny", "moe"];
actual = reverse(arrayToReverse);
expected = ["moe", "miny", "meeny", "eeny"];
testDDforArrays(actual, expected);

actual = arrayToReverse;
expected = ["eeny", "meeny", "miny", "moe"];
testDDforArrays(actual, expected);
// さらにテストを書きましょう。
arrayToReverse = ["eeny", "meeny", "miny", "moe", 102];
actual = reverse(arrayToReverse);
expected = [102, "moe", "miny", "meeny", "eeny"];
testDDforArrays(actual, expected);

actual = arrayToReverse;
expected = ["eeny", "meeny", "miny", "moe", 102];
testDDforArrays(actual, expected);


//-- Day8 for..of ループ 中級演習 Q4 --//
console.log("%c== Day8 for..of ループ 中級演習 Q4 ==", 'color:red; font-size:14px');
// 関数 getOperatedArray を宣言してください。
/**{
* @param {Array<number>} numArray
* @param {"+"|"-"|"*"|"/"|"**"|"%"} operator - 使用したい算術演算子を表す文字列
* @param {number} isNumber - 使用したい被演算子
* @returns {Array<any>} 与えられた配列の各要素に、引数の算術演算子と被演算子を適用した結果が入った新たな配列
*/
function getOperatedArray(numArray, operator, isNumber) {
    // ここにコードを書きましょう。
    const initArray = numArray.slice();
    const ansArray = [];
    
    switch (operator) {
        case "+":
            for (const number of initArray) {
                ansArray.push(number + isNumber);
            }
            return ansArray;
        case "-":
            for (const number of initArray) {
                ansArray.push(number - isNumber);
            }
            return ansArray;
        case "*":
            for (const number of initArray) {
                ansArray.push(number * isNumber);
            }
            return ansArray;
        case "/":
            for (const number of initArray) {
                ansArray.push(number / isNumber);
            }
            return ansArray;
        case "**":
            for (const number of initArray) {
                ansArray.push(number ** isNumber);
            }
            return ansArray;
        case "%":
            for (const number of initArray) {
                ansArray.push(number % isNumber);
            }
            return ansArray;
        default:
            return "Invalid value.";
    }
}

actual = getOperatedArray([1, 2, 3], "+", 5);
expected = [6, 7, 8];
testDDforArrays(actual, expected);

actual = getOperatedArray([9, 6, 3], "/", 3);
expected = [3, 2, 1];
testDDforArrays(actual, expected);
// さらにテストを書きましょう。
actual = getOperatedArray([9, 6, 3], "-", 3);
expected = [6, 3, 0];
testDDforArrays(actual, expected);

actual = getOperatedArray([9, 6, 3], "*", 3);
expected = [27, 18, 9];
testDDforArrays(actual, expected);

actual = getOperatedArray([9, 6, 3], "%", 3);
expected = [0, 0, 0];
testDDforArrays(actual, expected);
Day08_3.js
function testDD(actual, expected) {
    if (actual === expected) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
    return 0;
}

function testDDforArrays(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Test PASSED.");
      } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
}

let actual;
let expected;

//-- Day8 for..of ループ 応用演習 Q1 --//
console.log("%c== Day8 for..of ループ 応用演習 Q1 ==", 'color:red; font-size:14px');
// 関数 callADoctor を宣言してください。単数形と複数形では名詞と動詞の関係が変化することに注意してください。例えば My head hurts! は動詞に s が必要ですが、 My shoulders hurt! には必要ありません。
/**
* @param {Array<string>} affectedArea - 「痛む場所」が入った配列
* @returns {string} お医者さんに診てもらうときに言うセリフ
*/
function callADoctor(affectedArea) {
    // ここにコードを書きましょう。
    const initArray = affectedArea.slice();
    let ansString = "Doctor, doctor! My ";

    if (initArray.length === 1) {
        if ((initArray[0].includes('s', initArray[0].length - 1)) === true) {
            ansString = ansString + initArray[0] + " hurt!";
        } else {
            ansString = ansString + initArray[0] + " hurts!";
        }
    } else {
        for (const bodyPart of initArray) {
            if (bodyPart === initArray[initArray.length -1 ]) {
                ansString = ansString + ", and " + bodyPart + " hurt!";
            } else if (bodyPart === initArray[0]){
                ansString = ansString + bodyPart;
            } else {
                ansString = ansString + ", " + bodyPart;
            }
        }
    }

    return ansString
}

actual = callADoctor(["head"]);
expected = "Doctor, doctor! My head hurts!";
testDD(actual, expected);

actual = callADoctor(["shoulders"]);
expected = "Doctor, doctor! My shoulders hurt!";
testDD(actual, expected);

actual = callADoctor(["head", "shoulders", "knees", "toes"]);
expected = "Doctor, doctor! My head, shoulders, knees, and toes hurt!";
testDD(actual, expected);
// さらにテストを書きましょう。
actual = callADoctor(["head", "shoulders", "knees", "toes", "nose"]);
expected = "Doctor, doctor! My head, shoulders, knees, toes, and nose hurt!";
testDD(actual, expected);

actual = callADoctor(["eyes"]);
expected = "Doctor, doctor! My eyes hurt!";
testDD(actual, expected);


//-- Day8 for..of ループ 応用演習 Q2 --//
console.log("%c== Day8 for..of ループ 応用演習 Q2 ==", 'color:red; font-size:14px');
// 関数 deepCount を宣言してください。
/**
* @param {Array<any>} anyArray
* @returns {number} 与えられた配列の「要素」の数。このとき、入れ子になった配列がある場合は、配列内の各要素も一つ一つカウントすること。
*/
function deepCount(anyArray) {
    // ここにコードを書きましょう。
    let initArray = anyArray.slice();
    let ansArray = [];
    let isArray = false;
    let i = 0;
    let j = 0;

    do {
        isArray = false;
        for (i = 0; i < initArray.length; i++) {
            if (Array.isArray(initArray[i])) {
                for (j = 0; j < initArray[i].length; j++) {
                    ansArray.push(initArray[i][j]);

                    if (Array.isArray(initArray[i][j])) {
                        isArray = true;
                    }
                }
            } else {
                ansArray.push(initArray[i]);
            }
        }
        initArray = ansArray.slice();
        ansArray = [];
    } while (isArray);
    
    
    return initArray.length;
}

actual = deepCount([1]);
expected = 1;
testDD(actual, expected);

actual = deepCount([1, 3]);
expected = 2;
testDD(actual, expected);

actual = deepCount([1, 3, [2, 4]]);
expected = 4;
testDD(actual, expected);

actual = deepCount(["a", "b", ["c", ["d", "e", ["f"]]]]);
expected = 6;
testDD(actual, expected);

// さらにテストを書きましょう。
let arrayQ2 = ["a", "b", ["c", ["d", "e", ["f"]]]];
actual = arrayQ2;
expected = ["a", "b", ["c", ["d", "e", ["f"]]]];
deepCount(arrayQ2);
testDDforArrays(actual, expected);
Day08_4.js
function testDD(actual, expected) {
    if (actual === expected) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
    return 0;
}

function testDDforArrays(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Test PASSED.");
      } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
}

let actual;
let expected;


//-- Day8 for..of ループ ナイトメア演習 Q1 --//
console.log("%c== Day8 for..of ループ ナイトメア演習 Q1 ==", 'color:red; font-size:14px');
// 関数 sort を宣言してください。ビルトインの sort メソッドは使わないでください。
// 注目： 配列を並び替える方法はたくさんあります。自分の好きな方法を選んでください。これまでに sort を書いたことがある人は違う方法にトライしましょう。
/**
* @param {Array<number>} numArray - 数値型の要素を持つ配列
* @returns {Array<number>} 与えられた配列の数字が昇順に並び替えられた配列
*/
function sort(numArray) {
    let initArray = numArray.slice();
    let minElement = 0;
    let minIndex = 0;
    let temp = 0;
    let i = 0;
    let j = 0;

    for (i = 0; i < initArray.length; i++) {
        if (typeof initArray[i] !== "number") {
            return "値が不正です。";
        }
    }

    for (i = 0; i < initArray.length - 1; i++) {
        minElement = initArray[i];
        minIndex = i;
        for (j = i + 1; j < initArray.length; j++) {
            if (minElement > initArray[j]) {
                minElement = initArray[j];
                minIndex = j;
            }
        }
        temp = initArray[i];
        initArray[i] = initArray[minIndex];
        initArray[minIndex] = temp;
    }

    return initArray;
}

let arrayToSort = [5, 4, 3, 2, 1];

actual = sort(arrayToSort);
expected = [1, 2, 3, 4, 5];
// 正しい結果を返すことを確認する。
testDDforArrays(actual, expected);

// 元の配列が変更されていないことを確認する。
testDDforArrays(arrayToSort, [5, 4, 3, 2, 1]);
// さらにテストを書きましょう。
arrayToSort = [5, 4, -3, 2, 1]
actual = sort(arrayToSort);
expected = [-3, 1, 2, 4, 5];
testDDforArrays(actual, expected);
testDDforArrays(arrayToSort, [5, 4, -3, 2, 1]);


//-- Day8 for..of ループ ナイトメア演習 Q2 --//
console.log("%c== Day8 for..of ループ ナイトメア演習 Q2 ==", 'color:red; font-size:14px');
// 関数 flattenDeep を宣言してください。配列の配列（何段階も入れ子になっている場合もある）を引数として受け取り、平坦化された、つまり、入れ子のない配列（＝一次元配列）を返しましょう。
/**
* @param {Array<any>} anyArray
* @returns {Array<any>} 与えられた配列を一次元配列に平坦化した配列
*/
function flattenDeep(anyArray) {
    let initArray = anyArray.slice();
    let ansArray = [];
    let isArray = false;
    let i = 0;
    let j = 0;

    do {
        isArray = false;
        for (i = 0; i < initArray.length; i++) {
            if (Array.isArray(initArray[i])) {
                for (j = 0; j < initArray[i].length; j++) {
                    ansArray.push(initArray[i][j]);

                    if (Array.isArray(initArray[i][j])) {
                        isArray = true;
                    }
                }
            } else {
                ansArray.push(initArray[i]);
            }
        }
        initArray = ansArray.slice();
        ansArray = [];
    } while (isArray);
    
    return initArray;
}

expected = [1, 2, 3, 4, 5, 6];
actual = flattenDeep([1, 2, 3, [4, 5, 6]]);
// 正しい結果を返すことを確認する。
testDDforArrays(actual, expected);

expected = [1, 2, 3, 4, 5, 6];
actual = flattenDeep([
    [1, 2, 3],
    [4, 5, 6],
]);
// 正しい結果を返すことを確認する。
testDDforArrays(actual, expected);

expected = [1, 2, 3, 4, 5, 6];
actual = flattenDeep([[1], [2], [3], [4, 5, 6]]);
// 正しい結果を返すことを確認する。
testDDforArrays(actual, expected);

expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
actual = flattenDeep([[1, [2, [3, [4, [5, [6, [7, [8, [9]]]]]]]]]]);
// 正しい結果を返すことを確認する。
testDDforArrays(actual, expected);
Day09_0208_1.js
function test(actual, expected) {
    if (actual === expected) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
    return 0;
}

function testDDforArrays(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Test PASSED.");
      } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
}

let actual;
let expected;


//-- Day9 オブジェクト入門 基礎演習 Q1 --//
console.log("%c== Day9 オブジェクト入門 基礎演習 Q1 ==", 'color:red; font-size:14px');
// myInfo というオブジェクトを作成し、name, age, location, isCoder というキーを追加してください。isCoder の値を true に設定し、それ以外の値に自分自身の情報を入れてください。
// テストケース:
// ここにコードを書きましょう
const myInfo = {
    name:       "hashi",
    age:        "17",
    location:   "honsya",
    isCoder:    true
}

// この演習では TDD スタイルのテストは必要ありません。ここでは console.log を使用してください。
console.log(myInfo["isCoder"]); // => "true"


//-- Day9 オブジェクト入門 基礎演習 Q2 --//
console.log("%c== Day9 オブジェクト入門 基礎演習 Q2 ==", 'color:red; font-size:14px');
// ドットとダッシュの連続で情報を伝えるモールス信号は、電話が登場する前、電気通信の手段に広く使われていました。表は "t", "a", "r"という三文字に対応するモールス信号を示しています。この情報をもとに、下のテストに通る "morseCode" というオブジェクトを作ってください。
// 文字	モールス信号
// "t"	"-"
// "a"	".-"
// "r"	".-."
// ここにコードを書きましょう。
const morseCode = {
    t:  "-",
    a:  ".-",
    r:  ".-."
}

test(morseCode["t"], "-");
test(morseCode["a"], ".-");
test(morseCode["r"], ".-.");



//-- Day9 オブジェクト入門 基礎演習 Q3 --//
console.log("%c== Day9 オブジェクト入門 基礎演習 Q3 ==", 'color:red; font-size:14px');
// 次に 上の問いで作ったオブジェクトmorseCodeを使って、"t", "a","r" の文字をどんなふうに組み合わせても（1文字でも複数字でも）モールス信号に変換できる morseCodeArt 関数を宣言してください。
/**
* @param {string} str - モールス信号に変換する文字
* @returns {string} 与えられた文字に対応するモールス信号
*/
function morseCodeArt(str) {
    // ここにコードを書きましょう.
    let ans = "";
    let count = 0;

    for (const num of str) {
        if (count === 0) {
            count++;
            ans += morseCode[num];
        } else {
            ans += " " + morseCode[num];
        }
    }
    return ans;
}

test(morseCodeArt("a"), ".-");
test(morseCodeArt("r"), ".-.");
test(morseCodeArt("t"), "-");
test(morseCodeArt("art"), ".- .-. -");


//-- Day9 オブジェクト入門 基礎演習 Q4 --//
console.log("%c== Day9 オブジェクト入門 基礎演習 Q4 ==", 'color:red; font-size:14px');
// 関数 select を宣言してください。
// ヒント : 最近学んだある _パターン_ が使えるかもしれません。
/**
* @param {object} obj - オブジェクト
* @param {Array<string>} strArr - 文字列の入った配列
* @returns {object} 与えられた配列の要素をキーにして、それに対応する値は第1引数のオブジェクトから抽出して作られた新しいオブジェクト
*/
// ここにコードを書きましょう.
function select(obj, strArr) {
    let result = {};
    for (const str of strArr) {
        result[str] = obj[str];
    }
    return result;
}

testDDforArrays(select({ a: 1, b: 2, c: 3 }, ["a"]), { a: 1 });
testDDforArrays(select({ a: 1, b: 2, c: 3 }, ["a", "c"]), { a: 1, c: 3 });
testDDforArrays(select({ a: 1, b: 2, c: 3 }, ["a", "b", "c"]), { a: 1, b: 2, c: 3 });
testDDforArrays(select({ a: 1, b: 2, c: 3 }, []), {});


//-- Day9 オブジェクト入門 基礎演習 Q5 --//
console.log("%c== Day9 オブジェクト入門 基礎演習 Q5 ==", 'color:red; font-size:14px');
// 関数 countCharacters を宣言してください。
/**
* @param {string} str
* @returns {{ [character: string]: number }} 与えられた文字列の中の各アルファベットをキーに、その登場回数を値にしたオブジェクト
*/
// ここにコードを書きましょう.
function countCharacters(str) {
    let result = {};
    for (const char of str) {
        if (result[char] === undefined) {
            result[char] = 1;
        } else {
            result[char] = result[char] + 1;
        }
    }
    return result;
}

testDDforArrays(countCharacters("hello"), { h: 1, e: 1, l: 2, o: 1 });
testDDforArrays(countCharacters("hello hello"), { h: 2, e: 2, l: 4, o: 2, " ": 1 });
Day09_0208_2.js
function test(actual, expected) {
    if (actual === expected) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
    return 0;
}

function testDDforArrays(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Test PASSED.");
      } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
}

let actual;
let expected;


//-- Day9 オブジェクト入門 中級演習 Q1 --//
console.log("%c== Day9 オブジェクト入門 中級演習 Q1 ==", 'color:red; font-size:14px');
// 関数 countWords を宣言してください。
// ヒント : 文字列型のメソッド .split が役に立ちます。
/**
* @param {string} str
* @returns {{ [word: string]: number }} 与えられた文字列の中の各単語をキーとして持つオブジェクト。各キーに対応する値は、それぞれの単語が文字列の中で使われている回数。
*/
// ここにコードを書きましょう.
function countWords(str) {
    const words = str.split(" ");
    let result = {};

    for (const word of words) {
        if (word === "") {
            return result;
        } else if (result[word] === undefined) {
            result[word] = 1;
        } else {
            result[word] += 1;
        }
    }
    return result;
}

testDDforArrays(countWords("hello hello"), { hello: 2 });
testDDforArrays(countWords("hello Hello"), { hello: 1, Hello: 1 });
testDDforArrays(countWords(""), {});


//-- Day9 オブジェクト入門 ポケモンタイム Q1 --//
console.log("%c== Day9 オブジェクト入門 ポケモンタイム Q1 ==", 'color:red; font-size:14px');
// 関数 getNames を宣言してください。
/**
* @param {Array<object>} pokeObj - ポケモンオブジェクトが入った配列
* @returns {Array<string>} 各オブジェクトの `Names` を要素に持つ配列
*/
// ここにコードを書きましょう.
function getNames(pokeObj) {
    let result = [];
    for (const pokemon of pokeObj) {
        result.push(pokemon["Name"]);
    }
    return result;
}

// 'pokemons' の配列は、以下のコードより上に書かれていなければいけません。
const pokemons = [
    {
    Number: "001",
    Name: "Bulbasaur",
    Generation: "Generation I",
    About:
        "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
    Types: ["Grass", "Poison"],
    },
    {
    Number: "025",
    Name: "Pikachu",
    Generation: "Generation I",
    About:
        "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
    Types: ["Electric"],
    },
    {
    Number: "019",
    Name: "Rattata",
    Generation: "Generation I",
    About:
        "Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives—it will make its nest anywhere.",
    Types: ["Normal"],
    },
];
testDDforArrays(getNames(pokemons), ["Bulbasaur", "Pikachu", "Rattata"]);


//-- Day9 オブジェクト入門 ポケモンタイム Q2 --//
console.log("%c== Day9 オブジェクト入門 ポケモンタイム Q2 ==", 'color:red; font-size:14px');
// 関数 findPokemon を宣言してください。
// ヒント : 今回は == を使うべき数少ないチャンスです。
// 注意 : ペア演習3で使用した配列には ポケモンオブジェクトが 3 つしかないため、第二引数で渡す number は 1、25、19 しか渡すことができません。
/**
* @param {Array<object>} pokeObj - ポケモンが入った配列
* @param {number} pokeNum - 取り出したいポケモンの 'number'
* @returns {object|null} 与えられた数字を 'number' に持つポケモン。もし対応するポケモンが存在しなければ、null を返す。
*/
// ここにコードを書きましょう.
function findPokemon(pokeObj, pokeNum) {
    let result = {};
    // ナンバーの照合と取得
    for (const pokemon of pokeObj) {
        if (pokemon["Number"] == pokeNum) {
            result = pokemon;
        }
    }
    // 照合できなかった時
    if (!Object.keys(result).length) {
        result = null;
    }
    return result;
}

testDDforArrays(findPokemon(pokemons, 1), pokemons[0]);
testDDforArrays(findPokemon(pokemons, 19), pokemons[2]);
testDDforArrays(findPokemon(pokemons, 25), pokemons[1]);
testDDforArrays(findPokemon(pokemons, 1337), null);
Day09_0208_3.js
function test(actual, expected) {
    if (actual === expected) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
    return 0;
}

function testDDforArrays(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Test PASSED.");
      } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
}

let actual;
let expected;


//-- Day9 オブジェクト入門 応用演習 Q1 --//
console.log("%c== Day9 オブジェクト入門 応用演習 Q1 ==", 'color:red; font-size:14px');
// 関数 removeOddValues を宣言してください。
// ヒント : typeof を使う必要があるかもしれません。
/**
* @param {object} obj - オブジェクト
* @returns {object} 与えられたオブジェクトのキー/値のペアのうち、値が奇数のものを除いた新たなオブジェクト。
*/
// ここにコードを書きましょう.
function removeOddValues(obj) {
    let result = {};
    for (const number of Object.keys(obj)) {
        if (obj[number] % 2 === 0) {
            result[number] = obj[number];
        } else if (typeof obj[number] !== "number") {
            result[number] = obj[number];
        }
    }
    return result;
}

testDDforArrays(removeOddValues({ a: 1, b: 2, c: 3 }), { b: 2 });
testDDforArrays(removeOddValues({ a: "1", b: "2", c: "3" }), {
    a: "1",
    b: "2",
    c: "3",
});
// 1 行が非常に長くなる場合は、キー/値のペアを改行して書くこともできます。


//-- Day9 オブジェクト入門 ナマケモノタイム Q1 --//
console.log("%c== Day9 オブジェクト入門 ナマケモノタイム Q1 ==", 'color:red; font-size:14px');
// 以下は、ナマケモノ(sloth) についての情報が含まれている bucketOfSloths という配列です。
const bucketOfSloths = [
  { name: { first: "Furry",  middle: "Danger", last: "Assassin" }, age: 2 },
  { name: { first: "Slow",                     last: "Pumpkin" },  age: 3 },
  { name: { first: "Bullet", middle: "Proof",  last: "Sloth" },    age: 4 },
  { name: { first: "Boos",   middle: "Boos",   last: "Bun" },      age: 5 },
  { name: { first: "Jungle",                   last: "Fuzz" },     age: 2 },
];
// 関数 longestName を宣言してください。
/**
* @param {Array<object>} sloths - ナマケモノに入った配列
* @returns {object} 名前・ミドルネーム・苗字を合わせた名前が一番長いナマケモノのオブジェクト
*/
// ここにコードを書きましょう.
function longestName(sloths) {
    let count = 0;
    let countTotal = [];
    let maxNum = -1;
    let maxNumPosi = 0;

    // error
    if (sloths === undefined) {
        return undefined;
    }

    // 各配列の名前の合計値だけを配列にする
    for (const sloth of sloths) {
        count = 0;
        for (const nameA of Object.keys(sloth["name"])) {
            count += sloth["name"][nameA].length;
        }
        countTotal.push(count);
    }

    // 最大値検索
    for (const number of countTotal) {
        if (maxNum <= number) {
            maxNum = number;
        }
    }

    // 最大値の位置を検索
    for (const number of countTotal) {
        if (number !== maxNum) {
            maxNumPosi++;
        } else {
            break;
        }
    }

    return sloths[maxNumPosi];
}

testDDforArrays(longestName(bucketOfSloths), bucketOfSloths[0]);
testDDforArrays(longestName(bucketOfSloths.slice(1)), bucketOfSloths[2]);
testDDforArrays(longestName(), undefined);

//-- Day9 オブジェクト入門 ナマケモノタイム Q2 --//
console.log("%c== Day9 オブジェクト入門 ナマケモノタイム Q2 ==", 'color:red; font-size:14px');
// 関数 getSortedByAge を宣言してください。
/**
* @param {Array<object>} slothsArr - ナマケモノの情報が入った配列
* @returns {Array<object>} 与えられたすべてのナマケモノを若い順(ageの昇順) に並び替えた新たな配列。同じ年齢(age) の場合は、元の順番のままにする。
*/
// ここにコードを書きましょう.
function getSortedByAge(slothsArr) {
    let initArray = slothsArr.slice();
    let i = 0;
    let j = 0;
    let temp = {};

    for (i = 0; i < initArray.length - 1; i++) {
        for (j = i + 1; j < initArray.length; j++) {
            if (initArray[j]["age"] < initArray[i]["age"]) {
                temp = initArray[j];
                initArray[j] = initArray[i];
                initArray[i] = temp;
            }
        }
    }
    return initArray;
}

// bucketOfSloths のコピーを作りましょう。 (後でテストに使います。)
const bucketOfSlothsCopy = JSON.stringify(bucketOfSloths);

const bucketOfSlothsSortedByAge = [
    { name: { first: "Furry", middle: "Danger", last: "Assassin" }, age: 2 },
    { name: { first: "Jungle", last: "Fuzz" }, age: 2 },
    { name: { first: "Slow", last: "Pumpkin" }, age: 3 },
    { name: { first: "Bullet", middle: "Proof", last: "Sloth" }, age: 4 },
    { name: { first: "Boos", middle: "Boos", last: "Bun" }, age: 5 },
];

testDDforArrays(getSortedByAge(bucketOfSloths), bucketOfSlothsSortedByAge);

// 元の bucketOfSloths 配列が変更されていないことを確認する。
test(JSON.stringify(bucketOfSloths), bucketOfSlothsCopy);
Day09_0208_4.js
function test(actual, expected) {
    if (actual === expected) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
    return 0;
}

function testDDforArrays(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Test PASSED.");
      } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
}

let actual;
let expected;


//-- Day9 スコープ 基礎演習 Q1 --//
console.log("%c== Day9 スコープ 基礎演習 Q1 ==", 'color:red; font-size:14px');
// 以下のコードを実行すると、コンソールに何が表示されるでしょうか？
// 結果がどうなるか考えたら、コードを実行して答え合わせをしてみましょう。講義スライドを見返してローカルスコープとグローバルスコープの違いを確認し、なぜこのような挙動になるのかをしっかりと理解しましょう。
let greeting = "Konnichiwa";
const arr = [];

function sayHello(name) {
    // let greeting = "Hi";
    // return greeting + " " + name;
    for (const number of name) {
        arr.push(number);
    }
    return arr;
}

console.log(sayHello([1, 2, 3]));
console.log(sayHello([1, 2, 3]));



//-- Day9 スコープ 基礎演習 Q2 --//
console.log("%c== Day9 スコープ 基礎演習 Q2 ==", 'color:red; font-size:14px');
// テストに通るようにコードを修正しましょう。各変数の スコープ がどうなっているかを意識してください。

function sumArray(arrayOfNumbers) {
    let sum = 0;
    for (const number of arrayOfNumbers) {
        sum += number;
    }
    return sum;
}

// 関数は何度呼び出しても期待どおりに動作しなければいけません。
test(sumArray([1, 2, 3]), 6);
test(sumArray([10, 20, 30]), 60);
test(sumArray([100, 200, 300]), 600);



//-- Day9 スコープ 中級演習 Q1 --//
console.log("%c== Day9 スコープ 中級演習 Q1 ==", 'color:red; font-size:14px');
// カウンターが壊れてしまいました！ちゃんと カウントアップ するよう、コードを修正してください。
// ヒント: 修正箇所はたった 1 行だけです。新しいコードを追加する必要はありません。
let count = 0;

function counter(x) {
    count = count + x;
    return count;
}

test(counter(3), 3);
test(counter(4), 7);
test(counter(5), 12);
Day10_0209_1.js
function test(actual, expected) {
    if (actual === expected) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
    return 0;
}

function testForArrays(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Test PASSED.");
      } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
}

let actual;
let expected;

//-- Day10 for...in ループ 基礎-Q1 --//
console.log("%c== Day10 for...in ループ 基礎-Q1 ==", 'color:red; font-size:14px');
// 基礎演習 1 では、このオブジェクトを使用します。
const hellos = {
  English: "Hello",
  Japanese: "Konnichiwa",
  German: "Hallo",
  Spanish: "Hola",
  Arabic: "Ahlan wa sahlan",
  Chinese: "Nihao",
};

// 関数 sayHellos を宣言してください。関数を実行するとあらゆる言語で挨拶が返ってくるようにしましょう。
/**
* @returns {undefined} この関数は色々な言語で"Hello" を表示するだけで、返り値は必要ありません。
*/
// ここにコードを書きましょう。
function sayHellos() {
    for (const key in hellos) {
        console.log(hellos[key]);
    }
}


// console.log の表示は、返り値ではないため、テストするのは困難です。
// 今回は、コンソールの表示を確認することで、テストとしてください。

sayHellos();
// "Hello"
// "Konnichiwa"
// "Hallo"
// "Hola"
// ...


//-- Day10 for...in ループ 基礎-Q2 --//
console.log("%c== Day10 for...in ループ 基礎-Q2 ==", 'color:red; font-size:14px');
// 関数 getKeys を宣言してください。
/**
* @param {object} obj
* @returns {Array<string>} 与えられたオブジェクトのすべてのキーが入った配列
*/
// ここにコードを書きましょう
function getKeys(obj) {
    const result = [];
    for (const key in obj) {
        result.push(key);
    }
    return result;
}


const object1 = { a: 1, b: 2, c: "hello" };
const object2 = { 1: "a", 2: "b", hello: "c" };

testForArrays(getKeys(object1), ["a", "b", "c"]);
testForArrays(getKeys(object2), ["1", "2", "hello"]);


//-- Day10 for...in ループ 基礎-Q3 --//
console.log("%c== Day10 for...in ループ 基礎-Q3 ==", 'color:red; font-size:14px');
// 関数 getValues を宣言してください。
/**
* @param {object} obj
* @returns {Array<any>} 与えられたオブジェクトのすべての値が入った配列
*/
// ここにコードを書きましょう
function getValues(obj) {
    const result = [];
    for (const key in obj) {
        result.push(obj[key]);
    }
    return result;
}


testForArrays(getValues(object1), [1, 2, "hello"]);
testForArrays(getValues(object2), ["a", "b", "c"]);


//-- Day10 for...in ループ 基礎-Q4 --//
console.log("%c== Day10 for...in ループ 基礎-Q4 ==", 'color:red; font-size:14px');
// printAll は、与えられたオブジェクトのすべての値を表示する関数です。しかし、以下のコードではうまくいきません。何が問題なのでしょうか。正しく動くように修正してください。
const myObj = { foo: 1, bar: 2, key: 3, delta: 4, lee: 5 };
function printAll(object) {
    for (const key in object) {
    console.log(object[key]);
    }
}
printAll(myObj);


//-- Day10 for...in ループ 基礎-Q5 --//
console.log("%c== Day10 for...in ループ 基礎-Q5 ==", 'color:red; font-size:14px');
// 関数 swapPairs を宣言してください。
/**
* @param {object} obj - オブジェクト。ただし値はすべて異なるものとする。
* @returns {object} 与えられたオブジェクトのキーと値を入れ替えた、新しいオブジェクト
*/
// ここにコードを書きましょう
function swapPairs(obj) {
    const result = {};
    for (const key in obj) {
        result[obj[key]] = key;
    }
    return result;
}

const object3 = { a: 1, b: 2, c: 3, d: 4 };
const object4 = { 1: "a", 2: "b", 3: "c", 4: "d" };

testForArrays(swapPairs(object3), { 1: "a", 2: "b", 3: "c", 4: "d" });
testForArrays(swapPairs(object4), { a: "1", b: "2", c: "3", d: "4" });


//-- Day10 for...in ループ 基礎-Q6 --//
console.log("%c== Day10 for...in ループ 基礎-Q6 ==", 'color:red; font-size:14px');
// 配列で for ... in ループを使用することはできるでしょうか。 dekimasen



//-- Day10 for...in ループ 基礎-Q7 --//
console.log("%c== Day10 for...in ループ 基礎-Q7 ==", 'color:red; font-size:14px');
// オブジェクトで for ... of ループを使用することはできるでしょうか。 dekimasen


//-- Day10 復習: 配列とオブジェクト-Q1 --//
console.log("%c== Day10 復習: 配列とオブジェクト-Q1 ==", 'color:red; font-size:14px');
// 関数 getFirstObjectValues を宣言してください。
/**
* @param {Array<object>} objArray - オブジェクトを要素に持つ配列
* @returns {Array<any>} 与えられた配列の最初のオブジェクトのすべての値が入った配列
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

testForArrays(getFirstObjectValues(collection), [1, 2]);
testForArrays(getFirstObjectValues(collection.slice(1)), [3, 3]);


//-- Day10 復習: 配列とオブジェクト-Q2 --//
console.log("%c== Day10 復習: 配列とオブジェクト-Q2 ==", 'color:red; font-size:14px');
// 関数 getAllValues を宣言してください。 for in と for of 、両方の for ループを使用する必要があるかもしれません！
/**
* @param {Array<object>} objArray
* @returns {Array<any>} すべてのオブジェクトのすべての値が入った配列
*/
// ここにコードを書きましょう
function getAllValues(objArray) {
    const result = [];
    for (const object of objArray) {
        for (const key in object) {
            result.push(object[key]);
        }
    }
    return result;
}

testForArrays(getAllValues(collection), [1, 2, 3, 3, 4, 100]);
testForArrays(getAllValues(collection.slice(1)), [3, 3, 4, 100]);


//-- Day10 復習: 配列とオブジェクト-Q3 --//
console.log("%c== Day10 復習: 配列とオブジェクト-Q3 ==", 'color:red; font-size:14px');
// 関数 selectAllValues を宣言してください。
/**
* @param {Array<object>} objArray
* @param {string} keyName - 取り出したいキーの名前
* @returns {Array<any>} すべてのオブジェクトにおいて第二引数のキーに対応する値が入った配列
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

testForArrays(selectAllValues(collection, "a"), [1, 3, 100]);
testForArrays(selectAllValues(collection, "b"), [2, 3, 4]);
Day10_0209_2.js
function test(actual, expected) {
    if (actual === expected) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
    return 0;
}

function testForArrays(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Test PASSED.");
      } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
}

let actual;
let expected;



//-- Day10 for...in ループ 中級-Q1 --//
console.log("%c== Day10 for...in ループ 中級-Q1 ==", 'color:red; font-size:14px');
// 関数 swapPairs2 を宣言してください。
/**
* @param {object} obj
* @returns {object} 与えられたオブジェクトのキーと値を入れ替えた新しいオブジェクト。重複する値がある場合は、最初のキー/値のペアのみを使用し、その後のペアは無視すること。
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

// 1 はすでに使われているので、d:1 は無視される
testForArrays(swapPairs2(object5), { 1: "a", 2: "b", 3: "c" });
// この場合も 1  はすでに使われているので、二回目以降、1 が値になるキー/値のペアは無視される。
testForArrays(swapPairs2(object6), { 1: "a" });


//-- Day10 for...in ループ 中級-Q2 --//
console.log("%c== Day10 for...in ループ 中級-Q2 ==", 'color:red; font-size:14px');
// 関数 getAllValues2 を宣言してください。
/**
* @param {Array<object>} objArray
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

const collection2 = [{ a: 1, b: 2, c:2 }, { d: 1, e: 3 }, { f: 4, g:5 }];

testForArrays(getAllValues2(collection2), [1, 2, 3, 4, 5]);
testForArrays(getAllValues2(collection2.slice(1)), [1, 3, 4, 5]);


//-- Day10 for...in ループ 中級-Q3 --//
console.log("%c== Day10 for...in ループ 中級-Q3 ==", 'color:red; font-size:14px');
// 関数 getRandomHello を宣言してください。
// ヒント： Math オブジェクトの .random メソッドが使えるかもしれません。
/**
* @returns {string} 基礎演習 1 で使った `hellos` オブジェクトの中の任意の言葉
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
console.log(getRandomHello()); // "konnichiawa"、"hola"、等、実行する度にランダムな言葉が表示されるはずです。
Day10_0209_3.js
function test(actual, expected) {
    if (actual === expected) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
    return 0;
}

function testForArrays(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Test PASSED.");
      } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
}

let actual;
let expected;



//-- Day10 for...in ループ 応用-Q1 --//
console.log("%c== Day10 for...in ループ 応用-Q1 ==", 'color:red; font-size:14px');
// 関数 swapPairs3 を宣言してください。
/**
* @param {object} obj
* @returns {object} 与えられたオブジェクトのキーと値を入れ替えた新しいオブジェクト。重複する値がある場合は、それらのキーを配列に入れること。
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

const object5 = { a: 1, b: 2, c: 3, d: 1 };
const object6 = { a: 1, b: 1, c: 1, d: 1 };

testForArrays(swapPairs3(object5), { 1: ["a", "d"], 2: "b", 3: "c" });
testForArrays(swapPairs3(object6), { 1: ["a", "b", "c", "d"] });


//-- Day10 for...in ループ 応用-Q2 --//
console.log("%c== Day10 for...in ループ 応用-Q2 ==", 'color:red; font-size:14px');
// 関数 noDuplicateValues を宣言してください。この問題はめちゃくちゃトリッキーです!!!😲 2 つのループを使用する必要があるかもしれません。
/**
* @param {object} obj
* @returns {object} 引数のオブジェクトとほぼ同じ形のオブジェクトだが、同じ値を持つキー/値のペアは除外する。
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

const object3 = { a: 1, b: 2, c: 3, d: 4 };
const object4 = { 1: "a", 2: "b", 3: "c", 4: "d" };

testForArrays(noDuplicateValues(object3), object3);
testForArrays(noDuplicateValues(object5), { b: 2, c: 3 });
testForArrays(noDuplicateValues(object6), {});
Day10_0209_4.js
function test(actual, expected) {
    if (actual === expected) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
    return 0;
}

function testForArrays(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Test PASSED.");
      } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
}

let actual;
let expected;



//-- Day10 for...in ループ ナイトメア-Q1 --//
console.log("%c== Day10 for...in ループ ナイトメア-Q1 ==", 'color:red; font-size:14px');
// 関数 getDepth を宣言してください。
/**
* @param {object} obj
* @returns {number} 引数のオブジェクトの深さ（レイヤーの数）を返す。入れ子になったオブジェクトはそれぞれひとつのレイヤーとして計算してください。入れ子になったオブジェクトが複数ある場合は、一番深いレイヤーの数を返してください。
*/
// ここにコードを書きましょう
let counter = 0;
let result = [];

function getDepth(obj) {
    for (const key in obj) {
        counter++;
        console.log("obj_value=", obj[key]);
        if (typeof obj[key] === "object") {
            getDepth(obj[key]);
        } else {
            result.push(counter);
            counter = 0;
        }
    }
    console.log("result=", result);
    return Math.max(...result);
}


const rabbitHole1 = { a: "A" };
const rabbitHole2 = { a: "A", b: { c: "C" } };
const rabbitHole3 = { a: "A", b: { c: "C" }, d: { e: { f: "F" } } };
const rabbitHoleZ = {
    z: {
    y: {
        x: {
        w: {
            v: {
            u: {
                t: {
                s: {
                    r: {
                    q: {
                        p: {
                        o: {
                            n: {
                            m: {
                                l: {
                                k: {
                                    j: {
                                    i: {
                                        h: {
                                        g: {
                                            f: {
                                            e: "E",
                                            },
                                        },
                                        },
                                    },
                                    },
                                },
                                },
                            },
                            },
                        },
                        },
                    },
                    },
                },
                },
            },
            },
        },
        },
    },
    },
};

// rabbitHole1.a までの深さは 1 です
test(getDepth(rabbitHole1), 1);
// rabbitHole2.b.c までの深さは 2 です
test(getDepth(rabbitHole2), 2);
// rabbitHole3.d.e.f までの深さは 3 です
test(getDepth(rabbitHole3), 3);
// z y x w v u t s r q p o n m l k j i h g f e
test(getDepth(rabbitHoleZ), 22);
Day10_0209_5.js
function test(actual, expected) {
    if (actual === expected) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
    return 0;
}

function testForArrays(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Test PASSED.");
      } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
}

let actual;
let expected;



//-- Day10 参照渡しと値渡し 基礎-Q1 --//
console.log("%c== Day10 参照渡しと値渡し 基礎-Q1 ==", 'color:red; font-size:14px');
// Two can be as bad as one.
let theLoneliestNumber = 1;

let aFriend = theLoneliestNumber;

console.log(theLoneliestNumber); // 1
console.log(aFriend); // 1
console.log(theLoneliestNumber === aFriend); // true


//-- Day10 参照渡しと値渡し 基礎-Q2 --//
console.log("%c== Day10 参照渡しと値渡し 基礎-Q2 ==", 'color:red; font-size:14px');
// Why are there so many songs about rainbows?
const kermit = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
];
const missPiggy = kermit.slice();

console.log(kermit); // object
console.log(missPiggy); // object
console.log(kermit === missPiggy); // false


//-- Day10 参照渡しと値渡し 基礎-Q3 --//
console.log("%c== Day10 参照渡しと値渡し 基礎-Q3 ==", 'color:red; font-size:14px');
// Every other day of the week is fine.
let mamas = "Monday";

let papas = mamas;

papas += ", so good to me.";

console.log(mamas); // "Monday"
console.log(papas); // "Monday, so good to me."
console.log(mamas === papas); // false


//-- Day10 参照渡しと値渡し 基礎-Q4 --//
console.log("%c== Day10 参照渡しと値渡し 基礎-Q4 ==", 'color:red; font-size:14px');
// Help!
const theFabFour = {
    bass: ["paul"],
    drums: ["ringo"],
    guitar: ["george", "john"],
    vocals: ["george", "john", "paul", "ringo"],
};

const theFifthBeatle = theFabFour;
theFifthBeatle.guitar.push("beau");

console.log(theFabFour); // object
console.log(theFifthBeatle); // object
console.log(theFabFour === theFifthBeatle); // true

console.log(theFabFour.guitar); // ["george", "john"]
console.log(theFifthBeatle.guitar); // ["george", "john"]
console.log(theFabFour.guitar === theFifthBeatle.guitar); // true


//-- Day10 参照渡しと値渡し 基礎-Q5 --//
console.log("%c== Day10 参照渡しと値渡し 基礎-Q5 ==", 'color:red; font-size:14px');
// You're yes, then you're no.
let isHot = true;
let isCold = !isHot;

isHot = !isHot;

console.log(isHot); // false
console.log(isCold); // false
console.log(isHot === isCold); // true


//-- Day10 参照渡しと値渡し 基礎-Q6 --//
console.log("%c== Day10 参照渡しと値渡し 基礎-Q6 ==", 'color:red; font-size:14px');
// That's how easy love can be.
const easyAs = [
    ["a", "b", "c"],
    [1, 2, 3],
    ["do", "re"],
];
const simpleAs = easyAs.slice();
console.log(simpleAs === easyAs);
simpleAs[2].push("mi");

console.log(easyAs); // object
console.log(simpleAs); // object
console.log(easyAs === simpleAs); // false

console.log(easyAs[2]); // ["do", "re", "mi"]
console.log(simpleAs[2]); // ["do", "re", "mi"]
console.log(easyAs[2] === simpleAs[2]); // true
Day11_0210_1.js
function test(actual, expected) {
    if (actual === expected) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
    return 0;
}

function testForArrays(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Test PASSED.");
      } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
}

let actual;
let expected;



//-- Day11 while ループと for ループ 基礎-Q1 --//
console.log("%c== Day11 while ループと for ループ 基礎-Q1 ==", 'color:red; font-size:14px');
// 関数 sayHellos を宣言してください。引数に数字 n をとり、for ループを使って "Hello!" を n 回表示させましょう。
// テストケース:
function sayHellos(number) {
    for (let i = 0; i < number; i++) {
        console.log("hello!");
    }
    return 0;
}
sayHellos(4);
// "Hello!"
// "Hello!"
// "Hello!"
// "Hello!"


//-- Day11 while ループと for ループ 基礎-Q2 --//
console.log("%c== Day11 while ループと for ループ 基礎-Q2 ==", 'color:red; font-size:14px');
// 関数 countToTen を宣言してください。1 から 10 までの数字を毎行 1 だけ増えていくように表示させてください。
// ヒント :　for ループのブロックの中で、添え字（index）を console.log してみましょう。
// テストケース:
function countToTen() {
    for (let i = 0; i < 10; i++) {
        console.log(i + 1);
    }
}
countToTen();
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


//-- Day11 while ループと for ループ 基礎-Q3 --//
console.log("%c== Day11 while ループと for ループ 基礎-Q3 ==", 'color:red; font-size:14px');
// 関数 counter 内の while ループを for ループに書き直してください。書き直しても結果が変わらないようにしましょう。
function counter(num) {
    let i = 0;
    while (i < num) {
        console.log(i);
        i++;
    }

    for (i = 0; i < num; i++) {
        console.log(i);
    }
}

counter(4);
Day11_0210_2.js
function test(actual, expected) {
    if (actual === expected) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
    return 0;
}

function testForArrays(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Test PASSED.");
      } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
}

let actual;
let expected;



//-- Day11 while ループと for ループ 中級-Q1 --//
console.log("%c== Day11 while ループと for ループ 中級-Q1 ==", 'color:red; font-size:14px');
// 関数 createRange を宣言してください。
/**
* @param {number} start
* @param {number} end
* @returns {Array<number>} start 以上 end 以下のすべての整数を含む配列
*/
// ここにコードを書きましょう
function createRange(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

testForArrays(createRange(4, 6), [4, 5, 6]);
testForArrays(createRange(10, 16), [10, 11, 12, 13, 14, 15, 16]);


//-- Day11 while ループと for ループ 中級-Q2 --//
console.log("%c== Day11 while ループと for ループ 中級-Q2 ==", 'color:red; font-size:14px');
// 関数 printCars 内の while ループを for ループに書き換えてください。書き直しても結果が変わらないようにしましょう。
function printCars() {
    const cars = ["Toyota", "Mazda", "Mercedes", "BMW", "Hyundai", "Volvo"];
    let i = 0;

    while (i < cars.length) {
        console.log(cars[i]);
        i++;
    }

    for (i = 0; i < cars.length; i++) {
        console.log(cars[i]);
    }
}
printCars();

//-- Day11 while ループと for ループ 中級-Q3 --//
console.log("%c== Day11 while ループと for ループ 中級-Q3 ==", 'color:red; font-size:14px');
// 以下の for ループを while ループに書き換えてください。なぜインデックスの初期値は list.length - 1 なのでしょうか。わからない場合は、「配列の最後のインデックス」と「配列の長さ」の違いについて考えてみましょう。
// ヒント：　テストケースで文字列が表示される順序に注目してください。コンソール上でこれと同じ順序で表示されるようにしてください。
const commands = ["Print me last", "Print me second", "Print me first"];

function decrement(list) {
    for (let i = list.length - 1; i >= 0; i--) {
        console.log(list[i]);
    }

    let counter = list.length - 1;
    while (0 <= counter) {
        console.log(list[counter]);
        counter--;
    }
}
// テストケース:
decrement(commands);
// "Print me first"
// "Print me second"
// "Print me last"


//-- Day11 while ループと for ループ 中級-Q4 --//
console.log("%c== Day11 while ループと for ループ 中級-Q4 ==", 'color:red; font-size:14px');
// 関数 createRangeBySteps を宣言してください。
/**
* @param {number} start
* @param {number} end
* @param {number} step
* @returns {Array<number>} start 以上 end 以下の整数を、 step の刻みで入れた配列。
*/
// ここにコードを書きましょう
function createRangeBySteps(start, end, step) {
    const result = [];
    for (let i = start; i <= end; i += step) {
        result.push(i);
    }
    return result;
}

testForArrays(createRangeBySteps(1, 10, 2), [1, 3, 5, 7, 9]);
testForArrays(createRangeBySteps(10, 30, 5), [10, 15, 20, 25, 30]);


//-- Day11 while ループと for ループ 中級-Q5 --//
console.log("%c== Day11 while ループと for ループ 中級-Q5 ==", 'color:red; font-size:14px');
// 関数 addTogether を宣言してください。引数として 同じ長さの 数字の配列を 2 つとります。
/**
* @param {Array<number>} numArray1
* @param {Array<number>} numArray2
* @returns {Array<number>} それぞれの配列の対応する要素の和からなる配列
*/
// ここにコードを書きましょう
function addTogether(numArray1, numArray2) {
    const result = [];
    for (let i = 0; i < numArray1.length; i++) {
        result.push(numArray1[i] + numArray2[i]);
    }
    return result;
}

testForArrays(addTogether([1, 2, 3], [4, 5, 6]), [5, 7, 9]);
testForArrays(addTogether([1, 2, 3], [7, 8, 9]), [8, 10, 12]);


//-- Day11 while ループと for ループ 中級-Q6 --//
console.log("%c== Day11 while ループと for ループ 中級-Q6 ==", 'color:red; font-size:14px');
// 関数 addTogether の引数の配列が異なる長さであっても動くよう、関数を修正してください。
function addTogether02(numArray1, numArray2) {
    const result = [];
    let arrayLength = 0;
    let i = 0;
    if (numArray1.length <= numArray2.length) {
        for (i = 0; i < numArray1.length; i++) {
            result.push(numArray1[i] + numArray2[i]);
        }
        for (i; i < numArray2.length; i++) {
            result.push(numArray2[i]);
        }
    } else {
        for (i = 0; i < numArray2.length; i++) {
            result.push(numArray1[i] + numArray2[i]);
        }
        for (i; i < numArray1.length; i++) {
            result.push(numArray2[i]);
        }
    }

    return result;
}

testForArrays(addTogether02([1], [4, 5, 6]), [5, 5, 6]);
Day11_0210_3.js
function test(actual, expected) {
    if (actual === expected) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
    return 0;
}

function testForArrays(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Test PASSED.");
      } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
}

let actual;
let expected;



//-- Day11 while ループと for ループ 応用-Q1 --//
console.log("%c== Day11 while ループと for ループ 応用-Q1 ==", 'color:red; font-size:14px');
// 関数 unique を宣言してください。引数として配列を 1 つとり、重複していない値のみが入った配列を返してください。
/**
* @param {Array<any>} anyArray
* @returns {Array<any>} 重複していない値のみが入った配列
*/
// ここにコードを書きましょう
function unique(anyArray) {
    const result = [];
    for (const number of anyArray) {
        if (anyArray.filter(element => element === number).length < 2) {
            result.push(number);
        }
    }
    return result;
}

testForArrays(unique([1, 1, 1, 1, 1]), []);
testForArrays(unique([1, 3, 4, 5, 2, 4]), [1, 3, 5, 2]);


//-- Day11 while ループと for ループ 応用-Q2 --//
console.log("%c== Day11 while ループと for ループ 応用-Q2 ==", 'color:red; font-size:14px');
// 関数 sum を宣言してください。不特定の数の引数を取り、すべての引数の合計を返してください。
// ヒント：　この問題を解くには、スプレッド構文 (spread syntax) について調べる必要があるかもしれません。
/**
* @param {...number} numbers
* @returns {number} 引数の合計値
*/
// ここにコードを書きましょう
function sum(...numbers) {
    let result = 0;
    for (const number of numbers) {
        result += number;
    }
    return result;
}

test(sum(1), 1);
test(sum(1, 1, 1, 1, 1), 5);
test(sum(1, 2, 3, 4, 5), 15);


//-- Day11 while ループと for ループ 応用-Q3 --//
console.log("%c== Day11 while ループと for ループ 応用-Q3 ==", 'color:red; font-size:14px');
// 関数 zip を宣言してください。不特定の数の配列を引数として取り、各配列の値が全部入った配列を返してください。
/**
* @param {...<Array<any>} anyArray
* @returns {Array<any>} 与えられた配列内のすべての値を持つ配列
*/
// ここにコードを書きましょう
function zip(...anyArray) {
    const result = [];
    for (const array of anyArray) {
        for (const number of array) {
            result.push(number);
        }
    }
    return result;
}

testForArrays(zip([1], [2], [3], [4]), [1, 2, 3, 4]);
testForArrays(zip([1, 2, 3], [4, 5], [1], [4]), [1, 2, 3, 4, 5, 1, 4]);
Day11_0210_4.js
function test(actual, expected) {
    if (actual === expected) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
    return 0;
}

function testForArrays(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Test PASSED.");
      } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
}

let actual;
let expected;



//-- Day11 while ループと for ループ ナイトメア-Q1 --//
console.log("%c== Day11 while ループと for ループ ナイトメア-Q1 ==", 'color:red; font-size:14px');
// パーティに n 人のゲストが来ています。各ゲストには番号が割り当てられます。到着したすべてのゲストに新しいゲストを紹介する関数、 getIntroductions を宣言してください。
/**
* @param {number} gestNumber - ゲストの数
* @returns {Array<string>} 到着するゲストへの挨拶
*/
// ここにコードを書きましょう
function getIntroductions(gestNumber) {
    const result = [];
    let count = 1;
    while (count <= gestNumber) {
        for (let i = 1; i <= count; i++) {
            if (i === 1) {
                result.push("welcome " + String(count));
            } else if (i === 2) {
                result[count - 1] += ", meet " + String(i - 1);
            } else if (i === count) {
                result[count - 1] += " and " + String(i - 1);
            } else {
                result[count - 1] += ", " + String(i - 1);
            }
        }
        count++;
    }
    return result;
}

testForArrays(getIntroductions(1), ["welcome 1"]);
testForArrays(getIntroductions(2), ["welcome 1", "welcome 2, meet 1"]);
testForArrays(getIntroductions(5), [
    "welcome 1",
    "welcome 2, meet 1",
    "welcome 3, meet 1 and 2",
    "welcome 4, meet 1, 2 and 3",
    "welcome 5, meet 1, 2, 3 and 4",
]);



//-- Day11 while ループと for ループ ナイトメア-Q2 --//
console.log("%c== Day11 while ループと for ループ ナイトメア-Q2 ==", 'color:red; font-size:14px');
// クリスマスツリーを表示する関数 christmasTree を宣言してください。
/**
* @param {string} str - 任意の 1 文字
* @param {number} treeHeight - ツリーの高さ
* @returns {string} 与えられた文字と高さを使用して、クリスマスツリーを文字列で作る。
*/
// ここにコードを書きましょう
function christmasTree(str, treeHeight) {
    let result = "";
    let i = 0;
    let j = 0;
    let blank = treeHeight;
    for (i = 0; i < treeHeight; i++) {
        // 最初の空欄追加
        for (j = 0; j < blank; j++) {
            if ((i !== 0) && (j === 0)) {
                result += "\n";
            } else if ((i === 0) && (j === 0)){
                result += "";
            } else {
                result += " ";
            }
        }
        blank--;
        // 文字の追加
        for (j = 0; j <= i; j++) {
            if (j === 0) {
                result += str;
            } else {
                result += " " + str;
            }
        }
    }
    console.log(result);
    return result;
}

const expected1 = "T";
test(christmasTree("T", 1), expected1);
const expected2 = " +\n+ +";
test(christmasTree("+", 2), expected2);
const expected4 = "   #\n  # #\n # # #\n# # # #";
test(christmasTree("#", 4), expected4);

// \n は改行を意味するコードです。実際に文字列をconsole.logすると、ツリーがこんな風に表示されますよ。

/*
        T
       T T
      T T T
     T T T T
    T T T T T
*/
Day12_0213_1.js
function test(actual, expected) {
    if (actual === expected) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
    return 0;
}

function testForArrays(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
}

let actual;
let expected;

//-- Day12 値としての関数 基礎-Q1 --//
console.log("%c== Day12 値としての関数 基礎-Q1 ==", 'color:red; font-size:14px');
// returnAll という関数を考えます。
// function returnAll(value) {
//   return value;
// }
// 関数宣言はなく、関数式で returnAll を書いてみましょう。
const returnAll = function(value) {
    return value;
}


//-- Day12 値としての関数 基礎-Q2 --//
console.log("%c== Day12 値としての関数 基礎-Q2 ==", 'color:red; font-size:14px');
// returnAll を呼び出した結果の typeof を表示させてみましょう。それぞれ、なんと表示されるでしょう。
// 例えば、、、
console.log(typeof returnAll(false));   // boolean

console.log(typeof returnAll(5));       // number
console.log(typeof returnAll("5"));     // string
console.log(typeof returnAll([]));      // object
console.log(typeof returnAll({ a: 1 })); // object

function foo() {
    return "hi";
}

console.log(typeof returnAll(foo)); // function
console.log(typeof returnAll(foo())); // string


//-- Day12 値としての関数 基礎-Q3 --//
console.log("%c== Day12 値としての関数 基礎-Q3 ==", 'color:red; font-size:14px');
// console.log(returnAll(foo)) と console.log(returnAll(foo())) の違いは何でしょう。🤔
// fooと言う関数を引数に与えているか、fooの実行結果である値を渡しているか？の違い
Day12_0213_2.js
function test(actual, expected) {
    if (actual === expected) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
    return 0;
}

function testForArrays(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
}

let actual;
let expected;



//-- Day12 値としての関数 中級-Q1 --//
console.log("%c== Day12 値としての関数 中級-Q1 ==", 'color:red; font-size:14px');
// 関数 doSomething を宣言してください。
/**
* @param {Function} doSomething
* @param {any} number - 与えられた関数に渡す引数
* @returns {any} 与えられた引数を、与えられた関数に渡したときの返り値
*/
// ここにコードを書きましょう
function addTen(number) {
    return number + 10;
}
function doSomething(functions, number) {
    return functions(number);
}

test(doSomething(addTen, 6), 16);
test(doSomething(addTen, -100), -90);


//-- Day12 値としての関数 中級-Q2 --//
console.log("%c== Day12 値としての関数 中級-Q2 ==", 'color:red; font-size:14px');
// ここまでの授業で扱った関数は outer、addTen、doSomething のようにすべて名前がついていて、上の演習でもdoSomething に名前のある関数を渡しました。しかし、名前のない関数、つまり、無名関数を doSomething に渡すこともできます。以下のコードでも関数 doSomething はきちんと動作します。
test(
    doSomething(function (num) {
    return num * 4;
    }, 2),
    8
);
// 慣れないと読みづらいかもしれませんが、上のコードは次のコードと同じ挙動をします。
function multiplyFour(num) {
  return num * 4;
}
test(doSomething(multiplyFour, 2), 8);


//-- Day12 値としての関数 中級解説-Q1 --//
console.log("%c== Day12 値としての関数 中級解説-Q1 ==", 'color:red; font-size:14px');
// 次のコードをじっくりと見てください。
const outer = function () {
    return function () {
    return 5;
    };
};


//-- Day12 値としての関数 中級解説-Q2 --//
console.log("%c== Day12 値としての関数 中級解説-Q2 ==", 'color:red; font-size:14px');
// 関数 outer の _返り値_ は何ですか。typeof の結果は何になりますか。
console.log(outer()); // 関数処理の中身
console.log(typeof outer()); // 型が関数


//-- Day12 値としての関数 中級解説-Q3 --//
console.log("%c== Day12 値としての関数 中級解説-Q3 ==", 'color:red; font-size:14px');
// 関数 outer を呼び出したものを変数に代入するとどうなるでしょう。
const inner = outer();  // 関数の中身
console.log(inner);     // 型が関数である事
console.log(typeof inner);
// inner の値とは？ inner の typeof 何になるでしょうか。


//-- Day12 値としての関数 中級解説-Q4 --//
console.log("%c== Day12 値としての関数 中級解説-Q4 ==", 'color:red; font-size:14px');
// どうすれば 5 という返り値が得られるでしょう
console.log(inner());   // 関数を実行した返り値をlogに出力させる


//-- Day12 値としての関数 中級解説-Q5 --//
console.log("%c== Day12 値としての関数 中級解説-Q5 ==", 'color:red; font-size:14px');
// 以下のコードを実行する前に結果を予測してみましょう。foo をコンソールに表示すると、何が表示されると思いますか。
const add = function (x) {
    return function (y) {
    return x + y;
    };
};

const addFive = add(5);
console.log(addFive);
let foo = addFive(3);
console.log(foo); // 8


//-- Day12 値としての関数 中級解説-Q6 --//
console.log("%c== Day12 値としての関数 中級解説-Q6 ==", 'color:red; font-size:14px');
// addFive を typeof で評価した結果は何になりますか。
// function
console.log(typeof addFive);
console.log(typeof addFive(5));
console.log(addFive(5));
Day13_0214_1.js
function test(actual, expected) {
    if (actual === expected) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
    return 0;
}

function testForArrays(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
}

let actual;
let expected;


//-- Day13 Closures ペア-Q2 --//
console.log("%c== Day13 Closures ペア-Q2 ==", 'color:red; font-size:14px');
// 次のコードは、A と B どちらのテストが正しいでしょうか。
// 講義では、まだ、テンプレート文字列（テンプレートリテラル）を取り上げていませんが、以下のコードを試して、どのように動作するかを確認してみましょう。もっと知りたい場合は テンプレート文字列 をチェックしてください！
function doSomething(value, action) {
    console.log(action);
    return action(value);   // ==> return greeting(name);
}

function greeting(name) {
    return `Hello ${name}`;
}

// test(doSomething("Alex", greeting()), "Hello Alex"); // A
test(doSomething("Alex", greeting), "Hello Alex"); // B


//-- Day13 Closures ペア-Q3 --//
console.log("%c== Day13 Closures ペア-Q3 ==", 'color:red; font-size:14px');
// 何がコンソールに表示されるでしょうか。なぜ、その値が表示されるのでしょう。
let x = "Outside x";
function bar() {
    let x = "Inside x"; // ローカルスコープ
    return "This is bar! " + x;
}

bar();
console.log(x); // ==>> グローバルスコープ
console.log(bar()); // ==>> "This is bar! Outside x"



//-- Day13 Closures ペア-Q4 --//
console.log("%c== Day13 Closures ペア-Q4 ==", 'color:red; font-size:14px');
// プライベート変数とは何ですか。
// ローカルスコープ内で定義された変数





//-- Day13 Closures 基礎-Q1 --//
console.log("%c== Day13 Closures 基礎-Q1 ==", 'color:red; font-size:14px');
// 下にクロージャが作られています。クロージャのスコープ内にあるのは、どの変数でしょうか。
// しっかりとコードを読んだら、関数宣言の下にあるコメントを 1 行ずつ外して、コンソールの表示を確認してください。各行のコードが何をしているか分かりますか。疑問があるときは、必ず質問してください。🙋
function createPasswordProtectedAccount(userChosenPassword) {
    const savedPassword = userChosenPassword;

    function checkPassword(passwordEntered) {
        if (savedPassword === passwordEntered) {
            console.log("正しいパスワードです。アクセスを許可します。");
        } else {
            console.log("パスワードが間違っています。アクセスできません。");
        }
        return 1;
    }
    // console.log(typeof checkPassword);
    return checkPassword;
}

const account = createPasswordProtectedAccount("Test1234"); // 引数に初期パスワードを入れる。
console.log(account);
account("8skwob"); // 引数に間違ったパスワードを入れる => "パスワードが間違っています。アクセスできません。"
account("Test1234"); // 引数に正しいパスワードを入れる => "正しいパスワードです。アクセスを許可します。"


//-- Day13 Closures 基礎-Q2 --//
console.log("%c== Day13 Closures 基礎-Q2 ==", 'color:red; font-size:14px');
// さあ、あなたの番です！以下のクロージャ を見てみましょう。
// 関数 createDonationAccount を呼び出し、返り値を変数に代入しましょう。正しく書けていれば、"寄付受付口座が作成されました。" とコンソールに表示されるはずです。
// 次に、変数に代入された関数を 3 回呼び出してみましょう。正しくできていれば、3 回目の実行で、コンソールに 2 と表示されるはずです。
function createDonationAccount() {
    let donations = 0;

    function addDonation() {
        console.log(donations);
        donations += 1;
    }
    console.log("寄付受付口座が作成されました。");
    return addDonation;
}
const account1 = createDonationAccount();
account1();
account1();
account1();


//-- Day13 Closures 基礎-Q3 --//
console.log("%c== Day13 Closures 基礎-Q3 ==", 'color:red; font-size:14px');
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


//-- Day13 Closures 基礎-Q4 --//
console.log("%c== Day13 Closures 基礎-Q4 ==", 'color:red; font-size:14px');
// 次の関数は動作しますが、大きな問題があります。それは何でしょうか？（講義の中で勉強したコードとよく似ていますが、何も見ずに自分で書いてみましょう。）
// let counter = 0;

function makeCounter() {
    let counter = 0;
    return function () {
        counter += 1;
        return counter;
    };
}
// counter変数が外部で自由に変更できてしまう。

const counterA = makeCounter();
test(counterA(), 1);
test(counterA(), 2);

const counterB = makeCounter(); // 新しいカウンターを作りたい。
test(counterB(), 1);
test(counterB(), 2);
Day13_0214_2.js
function test(actual, expected) {
    if (actual === expected) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
    return 0;
}

function testForArrays(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
}

let actual;
let expected;


//-- Day13 Closures 中級-Q1 --//
console.log("%c== Day13 Closures 中級-Q1 ==", 'color:red; font-size:14px');
// 自分でクロージャを作りましょう。以下のようなシナリオを考えます。
// あなたは、13 歳未満の子どもはアクセスできない機能のある Web サイトを作成しています。
// 引数に age をとる関数 createWebsiteAccount を宣言してください。
// 呼び出されるたびに、age を 1 つ加算し、また、age が 13 歳以上なら true を返し、13 歳未満なら false を返す内部関数を作ります。
/**
* @param {number} age 年齢
* @returns {() => boolean} 実行されるたびに age に 1 を足し、 age が 13 以上かどうかを返す関数
*/
// ここにコードを書きましょう
function createWebsiteAccount(age) {
    let saveAge = age;
    return function() {
        saveAge++;
        if (13 <= saveAge) {
            return true;
        } else {
            return false;
        }
    }
}

const childAccount = createWebsiteAccount(10);
test(childAccount(), false); // => false
test(childAccount(), false); // => false
test(childAccount(), true); // => true (今、子供は 13 歳です！)

const adultAccount = createWebsiteAccount(33);
test(adultAccount(), true); // => true (何回呼び出すかに関わらず、いつも true を返す)
test(adultAccount(), true); // => true (何回呼び出すかに関わらず、いつも true を返す)
test(adultAccount(), true); // => true (何回呼び出すかに関わらず、いつも true を返す)
test(adultAccount(), true); // => true (何回呼び出すかに関わらず、いつも true を返す)



//-- Day13 Closures 中級-Q2 --//
console.log("%c== Day13 Closures 中級-Q2 ==", 'color:red; font-size:14px');
// 引数に x を取り、関数を返す product という関数を作成してください。内部関数は引数に y をとり、x と y の積を返します。
/**
* @param {number} x
* @returns {(y: number) => number} 引数として y をとり、x に y を掛け合わせた値を返す関数
*/
// ここにコードを書きましょう
function product(x) {
    let number1 = x;
    return function(number2) {
        return number2 * number1;
    }
}

const product3 = product(3);

test(product3(4), 12);
test(product(4)(5), 20);


//-- Day13 Closures 中級-Q3 --//
console.log("%c== Day13 Closures 中級-Q3 ==", 'color:red; font-size:14px');
// 引数に x を取り、関数を返す subtract という関数を作成してください。内部関数は引数に y をとり、x から y を引いた値を返します。
/**
* @param {number} x
* @returns {(y: number) => number} 引数として y をとり、x から y を引いた値を返す関数
*/
// ここにコードを書きましょう
function subtract(x) {
    return function(y) {
        // let number1 = x;
        return x - y;
    }
}

const subtract5 = subtract(5);

test(subtract5(4), 1);
test(subtract(10)(8), 2);
Day13_0214_3.js
function test(actual, expected) {
    if (actual === expected) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
    return 0;
}

function testForArrays(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
}

let actual;
let expected;



//-- Day13 Closures ナイトメア-Q1 --//
console.log("%c== Day13 Closures ナイトメア-Q1 ==", 'color:red; font-size:14px');
// 関数 addCurry を宣言してください。これを解くには、おそらく カリー化（currying）と呼ばれる技術を使用する必要があるでしょう。
/**
* @param {number} x
* @returns {Function} 呼び出しが連鎖でき、value メソッドで値を取り出せる関数
*/
// ここにコードを書きましょう
let result = 0;

function sum(x) {
    result += x;
    return sum;
}

function value() {
    let reResult = result;
    result = 0;
    return reResult;
}

let addCurry = sum;
sum.value = value;

// 関数を一度呼び出すだけでも、value() で値を得られます。
test(addCurry(1).value(), 1);

// 関数呼び出しを連鎖させて、累計を出すことができます。
test(addCurry(1)(2).value(), 3);
test(addCurry(1)(2)(3)(4)(5)(6).value(), 21);
Day14_0215_1.js
function test(actual, expected) {
    if (actual === expected) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
    return 0;
}

function testForArrays(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
}

let actual;
let expected;


//-- Day14 メソッド 基礎-Q1 --//
console.log("%c== Day14 メソッド 基礎-Q1 ==", 'color:red; font-size:14px');
// このオブジェクトを使います。
const myMathObject = {
    sum: function (...number) {
        let result = 0;
        for (const num of number) {
            result += num;
        }
        return result;
    }
//   product: function () {},
//   isEven: function () {},
};

// オブジェクト myMathObject のメソッドを作成してみましょう。
// sum は全ての引数の合計を返します
// これらはテストのサンプルです。下の問題は自分でテストを考えましょう。
test(myMathObject.sum(1), 1);
test(myMathObject.sum(1, 2, 3), 6);

// product は全ての引数の 積 を返します。
myMathObject.product = function(...number) {
    let result = 1;
    for (const num of number) {
        result *= num;
    }
    return result;
}
test(myMathObject.product(1), 1);
test(myMathObject.product(1, 2, 3), 6);

// isEven は引数に数値を取り、それが偶数の場合は true を返し、奇数の場合は false を返します。
myMathObject.isEven = function(...number) {
    const result = [];
    for (const num of number) {
        if (num % 2 === 0) {
            result.push(true);
        } else {
            result.push(false);
        }
    }
    return result;
}
testForArrays(myMathObject.isEven(1), [false]);
testForArrays(myMathObject.isEven(1, 2, 3), [false, true, false]);


//-- Day14 メソッド 基礎-Q2 --//
console.log("%c== Day14 メソッド 基礎-Q2 ==", 'color:red; font-size:14px');
// 作成したメソッドを使って、次の問題を解きましょう。
// 19283, 18475, 199999 の合計値を求めてください。
test(myMathObject.sum(19283, 18475, 199999), 237757);

// 19283, 18475, 199999 の積を求めてください。
test(myMathObject.product(19283, 18475, 199999), 71250328746575);

// 19 が偶数か奇数かを求めてください。
testForArrays(myMathObject.isEven(19), [false]);


//-- Day14 メソッド 基礎-Q3 --//
console.log("%c== Day14 メソッド 基礎-Q3 ==", 'color:red; font-size:14px');
// myMathObject に getNumbers メソッドを追加してください。
/**
* @param {...any} anyArray - 任意の数の引数
* @returns {Array<number>} 引数のうち、数値型のものだけを要素に持つ配列。要素の順番は引数で与えられた順番にする。
*/
myMathObject.getNumbers = function(...number) {
    const result = [];
    for (const num of number) {
        if (typeof num === "number") {
            result.push(num);
        }
    }
    return result;
}
testForArrays(myMathObject.getNumbers(1, 2, 3, 4), [1, 2, 3, 4]);
testForArrays(myMathObject.getNumbers("foo", 3, "4", "hi", 1), [3, 1]);
Day14_0215_2.js
function test(actual, expected) {
    if (actual === expected) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
    return 0;
}

function testForArrays(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
}

let actual;
let expected;



//-- Day14 メソッド 中級-Q1 --//
console.log("%c== Day14 メソッド 中級-Q1 ==", 'color:red; font-size:14px');
// myMathObject に abs メソッドを追加してください。Math のビルトイン・メソッドを 使用してはいけません 。
/**
* @param {number} number
* @returns {number} 与えられた数字の絶対値
*/
myMathObject.abs = function(...number) {
    let result = 0;
    for (const num of number) {
        if (num < 0) {
            result = num * -1;
        } else {
            result = num;
        }
    }
    return result;
}
test(myMathObject.abs(1), 1);
test(myMathObject.abs(-1), 1);
test(myMathObject.abs(435678.745389), 435678.745389);
test(myMathObject.abs(-675843.753489), 675843.753489);


//-- Day14 メソッド 中級-Q2 --//
console.log("%c== Day14 メソッド 中級-Q2 ==", 'color:red; font-size:14px');
// myMathObject に power メソッドを追加してください。テスト以外では Math.pow() メソッドや ** べき乗演算子を 使用してはいけません 。
/**
* @param {number} baseNum 底（てい）
* @param {number} exponentNum 指数
* @returns {number} 与えられた底を与えられた指数で累乗した結果
*/
const MIN_BASE = -5;
const MAX_BASE = 5;
const MIN_EXPONENT = -5;
const MAX_EXPONENT = 5;

myMathObject.power = function(baseNum, exponentNum) {
    let result = 1;
    let i = 0;
    if (0 <= exponentNum) {
        for (i = 0; i < exponentNum; i++) {
            result = result * baseNum;
        }
    } else {
        exponentNum *= -1;
        for (i = 0; i < exponentNum; i++) {
            result = result * baseNum;
        }
        result = 1 / result;
    }
    return result;
}

// 以下のコードでは、一度にたくさんのテストしています。
// （また、浮動小数点数の比較をするためにisNearlyEqualという関数を使っています。）
for (let base = MIN_BASE; base <= MAX_BASE; ++base) {
    for (let exponent = MIN_EXPONENT; exponent <= MAX_EXPONENT; ++exponent) {
        const actual = myMathObject.power(base, exponent);
        const expected = Math.pow(base, exponent);
        if (isNearlyEqual(actual, expected)) {
            console.log("Yay! Test PASSED.");
        } else {
            console.error("Test FAILED. Keep trying!");
            console.log("    actual: ", actual);
            console.log("  expected: ", expected);
            console.trace();
        }
    }
}

// 参照文献： https://floating-point-gui.de/errors/comparison/

function isNearlyEqual(a, b) {
    const absA = Math.abs(a);
    const absB = Math.abs(b);
    const diff = Math.abs(a - b);

    if (a == b) {
        return true;
    } else if (a == 0 || b == 0 || absA + absB < Number.MIN_VALUE) {
        return diff < Number.EPSILON * Number.MIN_VALUE;
    } else {
        return diff / Math.min(absA + absB, Number.MAX_VALUE) < Number.EPSILON;
    }
}
Day14_0215_3.js
function test(actual, expected) {
    if (actual === expected) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
    return 0;
}

function testForArrays(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
}

let actual;
let expected;



//-- Day14 メソッド 応用-Q1 --//
console.log("%c== Day14 メソッド 応用-Q1 ==", 'color:red; font-size:14px');
// myMathObject に ceil メソッドを追加してください。Math のビルトイン・メソッドを 使用してはいけません 。
/**
* @param {number} num
* @returns {number} 与えられた数字を切り上げた整数
*/
myMathObject.ceil = function(num) {
    num += 1;
    num *= 100000000;
    num = (num - (num % 100000000)) / 100000000;
    return num;
}
test(myMathObject.ceil(1.1), 2);
test(myMathObject.ceil(2.2), 3);
test(myMathObject.ceil(3.3), 4);
test(myMathObject.ceil(4.4), 5);
test(myMathObject.ceil(5.5), 6);


//-- Day14 メソッド 応用-Q2 --//
console.log("%c== Day14 メソッド 応用-Q2 ==", 'color:red; font-size:14px');
// myMathObject に floor メソッドを追加してください。Math のビルトインメソッドを 使用してはいけません 。
/**
* @param {number} num
* @returns {number} 与えられた数字を切り下げた整数
*/
myMathObject.floor = function(num) {
    num *= 100000000;
    num = (num - (num % 100000000)) / 100000000;
    return num;
}

test(myMathObject.floor(1.1), 1);
test(myMathObject.floor(2.2), 2);
test(myMathObject.floor(3.3), 3);
test(myMathObject.floor(4.4), 4);
test(myMathObject.floor(5.5), 5);


//-- Day14 メソッド 応用-Q3 --//
console.log("%c== Day14 メソッド 応用-Q3 ==", 'color:red; font-size:14px');
// myMathObject に round メソッドを追加してください。Math のビルトインメソッドを 使用してはいけません 。
/**
* @param {number} num
* @returns {number} 与えられた数字を四捨五入した整数
*/
myMathObject.round = function(num) {
    if (num % 1 < 0.5) {
        num *= 100000000;
        num = (num - (num % 100000000)) / 100000000;
        return num;
    } else {
        num += 1;
        num *= 100000000;
        num = (num - (num % 100000000)) / 100000000;
        return num;
    }
}
test(myMathObject.round(1.1), 1);
test(myMathObject.round(2.2), 2);
test(myMathObject.round(3.3), 3);
test(myMathObject.round(4.4), 4);
test(myMathObject.round(5.5), 6);
test(myMathObject.round(6.6), 7);
test(myMathObject.round(7.7), 8);


//-- Day14 メソッド 応用-Q4 --//
console.log("%c== Day14 メソッド 応用-Q4 ==", 'color:red; font-size:14px');
// myMathObject に primeFactorization メソッドを追加してください。
/**
* @param {number} num
* @returns {{ [primeFactor: number]: number }} 引数の数値を素因数分解し、キーを _素因数_ 、値を対応する _指数_ にしたオブジェクト
*/
myMathObject.primeFactorization = function(num) {
    const result = {};
    for (let i = 2; i <= num; i++) {
        let   primeNumber = 0;
        let   exponentNumber = 0;
        while (num % i === 0) {
            primeNumber = i;
            exponentNumber++;
            num /= i;
            result[primeNumber] = exponentNumber;
        }
    }
    return result;
}

testForArrays(myMathObject.primeFactorization(2), { 2: 1 });
testForArrays(myMathObject.primeFactorization(3), { 3: 1 });
testForArrays(myMathObject.primeFactorization(4), { 2: 2 });
testForArrays(myMathObject.primeFactorization(5), { 5: 1 });
testForArrays(myMathObject.primeFactorization(6), { 2: 1, 3: 1 });
testForArrays(myMathObject.primeFactorization(200560490130), {
    2: 1,
    3: 1,
    5: 1,
    7: 1,
    11: 1,
    13: 1,
    17: 1,
    19: 1,
    23: 1,
    29: 1,
    31: 1,
});
testForArrays(myMathObject.primeFactorization(900719925474099), {
    3: 1,
    53: 1,
    157: 1,
    1613: 1,
    2731: 1,
    8191: 1,
});
Day15_0216_1.js
//-- Day15 CSS と JavaScript 基礎-Q1 --//
console.log("%c== Day15 CSS と JavaScript 基礎-Q1 ==", 'color:red; font-size:14px');
// 基礎演習
// Hacker news にアクセスし、デベロッパーコンソールを開いて、以下の項目を行ってみましょう。
// title というクラスを持つ、1 つ目の要素のフォントのサイズを 50px に変更してください。
const titles = document.body.getElementsByClassName("title");
titles[0].style.fontSize = 50;

// title というクラスを持つ、ページ上のすべての要素の背景色を blue に変更してください。
for (let i = 0; i < titles.length; i++) {
    titles[i].style.backgroundColor = "blue";
}
Day15_0216_2.js
//-- Day15 CSS と JavaScript 中級-Q1 --//
console.log("%c== Day15 CSS と JavaScript 中級-Q1 ==", 'color:red; font-size:14px');
// 中級演習
// title というクラスを持つ、ページ上のすべての要素を選択します。JavaScript と CSS のみを使用して、それらの要素を 1 つおきに非表示にしてください。ヒント： display プロパティを使います。
const titles = document.body.getElementsByClassName("title");

for (let i = 0; i < titles.length; i += 2) {
    titles[i].style.display = "block";
}
// "none": 非表示、　　"block": 表示
// i=を１にすると、非表示になる箇所が入れ替わる。
Day15_0216_3.js
//-- Day15 CSS と JavaScript 応用-Q1 --//
console.log("%c== Day15 CSS と JavaScript 応用-Q1 ==", 'color:red; font-size:14px');
// 応用演習
// title というクラスを持つ、ページ上のすべての要素を選択し、各要素の背景色を赤、青、黄色からランダムに変更する関数を作成してください。作成したら関数を呼び出してみましょう！🚦
function changeRandomBackGroundColor(idClass) {
    let randomNum = 0;
    for (let i = 0; i < idClass.length; i++) {
        randomNum = Math.floor(Math.random() * 3) + 1;
        switch (randomNum) {
            case 1:
                idClass[i].style.backgroundColor = "red";
                break;
            case 2:
                idClass[i].style.backgroundColor = "blue";
                break;
            case 3:
                idClass[i].style.backgroundColor = "yellow";
                break;
            default:
                console.log("error");
        }
    }
}

const titles = document.body.getElementsByClassName("title");

changeRandomBackGroundColor(titles);
Day15_0216_4_gators.js
// === HTML =====================================================================================
<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="theme-color" content="#000000">
  <link rel="stylesheet" href="gators.css">
</head>

<body>
    <div id="greenBox1">
        <button id="releaseButton" type="button" name="button1">ワニ放出</button>
        <input type="text" id="counter" name="counter">
    </div>
    <div id="greenBox2"></div>
    <div id="greenBox3"></div>
    <div id="greenBox4"></div>
    <div id="greenBox5"></div>
    <div id="blueBox">ワニ池</div>
    <script type="text/javascript" src="gators.js"></script>
</body>
</html>


// === ccs =====================================================================================
#greenBox1 {
    width: 400px;
    height: 100px;
    background-color: greenyellow;
    margin: auto;
}

#greenBox2 {
    width: 400px;
    height: 50px;
    background-color: greenyellow;
    margin: auto;
    text-align: center;
    color: white;
    font-size: xx-large;
}

#greenBox3 {
    width: 400px;
    height: 50px;
    background-color: greenyellow;
    margin: auto;
    text-align: center;
    color: white;
    font-size: xx-large;
}

#greenBox4 {
    width: 400px;
    height: 50px;
    background-color: greenyellow;
    margin: auto;
    text-align: center;
    color: white;
    font-size: xx-large;
}

#greenBox5 {
    width: 400px;
    height: 50px;
    background-color: greenyellow;
    margin: auto;
    text-align: center;
    color: white;
    font-size: xx-large;
}

#blueBox {
    width: 400px;
    background-color: blue;
    margin: auto;
    text-align: center;
    color: white;
    font-size: xx-large;
}

#counter {
    margin: 5px 0 0 5px;
    display: inline-block;
    width: 60px;
    font-size: larger;
}

#releaseButton {
    border: 0px;        /*枠線の有無 太さ　線タイプ（solidとか）　線の色*/
    line-height: 30px;  /*テキストの行間を高さの中央値に配置*/
    display: inline-block;
    margin: 5px 0 0 5px;    /*ボタンの外側の余白　上右下左*/
    padding: 5px 20px;    /*ボタンの内側の余白　上下　左右*/
    font-size: 1rem;    /*テキストのフォントサイズ*/
    text-align: center; /*テキストをボタンの中央配置*/
    color: #fff;      /*テキストの文字色*/
    text-shadow: 1px 1px 1px #000; /*テキスト後ろの影の位置*/
    border-radius: 10px;    /*隅を丸角にする　丸さを指定*/
    background-color: rgba(220, 0, 0, 1);   /*素の状態の背景色*/
    background-image: linear-gradient(to top left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0));
    box-shadow: inset 3px 3px 4px rgba(255, 255, 255, 0.6), inset -3px -3px 4px rgba(0, 0, 0, 0.6); /*＋左－右　＋上－下　ぼかし具合　色*/
}

#releaseButton:hover {
    background-color: rgba(255, 0, 0, 1);   /*カーソルが上に来た時の色　変更可能　明るくしてる*/
}

#releaseButton:active {
    box-shadow: inset -3px -3px 3px rgba(255, 255, 255, 0.6), inset 3px 3px 3px rgba(0, 0, 0, 0.6); /*ボタン押下時のシャドーの反転*/
}



// === js =====================================================================================
let buttonIds = document.getElementById("releaseButton");
let t1 = 0;
let str = ""

function increaseCroc() {
    t1 = document.getElementById("counter").value;
    t1 = Number(t1);

    if (isNaN(t1) || t1 === 0) {
        document.getElementById("blueBox").innerText = "ワニ、出現せず！";
    } else {
        if (str !== "") {
            aaa();
        }

        str = "";
        for (let i = 0; i < t1; i++) {
            str += "🐊"
        }
        document.getElementById("blueBox").innerText = str;
    }
}
function aaa() {
    document.getElementById("greenBox2").innerText = document.getElementById("greenBox3").innerText;
    document.getElementById("greenBox3").innerText = document.getElementById("greenBox4").innerText;
    document.getElementById("greenBox4").innerText = document.getElementById("greenBox5").innerText;
    document.getElementById("greenBox5").innerText = document.getElementById("blueBox").innerText;
}
buttonIds.addEventListener("click", increaseCroc);
Day17_0220_1_.js
function test(actual, expected) {
    if (actual === expected) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
    return 0;
}

function testForArrays(actualssss, expected) {
    if (JSON.stringify(actualssss) === JSON.stringify(expected)) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
}

let actual;
let expected;



//-- Day17 高階関数入門 基礎-Q1 --//
console.log("%c== Day17 高階関数入門 基礎-Q1 ==", 'color:red; font-size:14px');
// これからみなさんに書いてもらう関数は、特段新しいものばかりではありませんが、注目してほしいのは、Array.map の使い方です。演習のコードをしっかり見て、.map を使いこなせるようになりましょう。
// 関数 getGreeting を宣言してください。この関数は .map メソッドに実行されているという点に注目してください。なお、関数内で .map メソッドを使用しては いけません。
/**
* @param {string} nameStr
* @returns {string} 与えられた引数に挨拶文を追加した文字列
*/
// ここにコードを書きましょう
function getGreeting(nameStr) {
    return "Hello, " + nameStr + ".";
}

testForArrays(["zeno", "yanis", "xander"].map(getGreeting), [
    "Hello, zeno.",
    "Hello, yanis.",
    "Hello, xander.",
]);


//-- Day17 高階関数入門 基礎-Q2 --//
console.log("%c== Day17 高階関数入門 基礎-Q2 ==", 'color:red; font-size:14px');
// 関数 abs を宣言してください。この関数は .map メソッドに実行されているという点に注目してください。 なお、関数内で .map メソッドを使用しては いけません。
/**
* @param {number} num
* @returns {number} 与えられた引数の絶対値
*/
// ここにコードを書きましょう
function abs(num) {
    return Math.abs(num);
}

testForArrays([1, 2, 3].map(abs), [1, 2, 3]);
testForArrays([-1, -2, -3].map(abs), [1, 2, 3]);
testForArrays([-1, 2, -3].map(abs), [1, 2, 3]);


//-- Day17 高階関数入門 基礎-Q3 --//
console.log("%c== Day17 高階関数入門 基礎-Q3 ==", 'color:red; font-size:14px');
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
Day17_0220_2_.js
function test(actual, expected) {
    if (actual === expected) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
    return 0;
}

function testForArrays(actualssss, expected) {
    if (JSON.stringify(actualssss) === JSON.stringify(expected)) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
}

let actual;
let expected;



//-- Day17 高階関数入門 中級-Q1 --//
console.log("%c== Day17 高階関数入門 中級-Q1 ==", 'color:red; font-size:14px');
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
Day17_0220_3_.js
function test(actual, expected) {
    if (actual === expected) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
    return 0;
}

function testForArrays(actualssss, expected) {
    if (JSON.stringify(actualssss) === JSON.stringify(expected)) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
}

let actual;
let expected;



//-- Day17 高階関数入門 応用-Q1 --//
console.log("%c== Day17 高階関数入門 応用-Q1 ==", 'color:red; font-size:14px');
// 関数 multiplyByIndex を宣言してください。
/**
* @param {Array<number>} num
* @returns {Array<number>} 与えられた配列の各要素とそのインデックスを掛け合わせた数字が要素として入った、新たな配列
*/
// ここにコードを書きましょう
function multiplyByIndex(numArray) {
    const result = [];
    for (let i = 0; i < numArray.length; i++) {
        result.push(i * numArray[i]);
    }
    return result;
}

// -0 !? JavaScript には奇妙なところがありますね。
testForArrays(multiplyByIndex([1, 2, 3]), [0, 2, 6]);
testForArrays(multiplyByIndex([2, 3, 4]), [0, 3, 8]);
testForArrays(multiplyByIndex([-3, -4, -5]), [-0, -4, -10]);


//-- Day17 高階関数入門 応用-Q2 --//
console.log("%c== Day17 高階関数入門 応用-Q2 ==", 'color:red; font-size:14px');
// 関数 feedback を宣言してください。
/**
* @param {Array<any>} anyArray
* @param {Function} action - 実行したい関数
* @param {number} iterNum - 関数を実行したい回数
* @returns {Array<any>} 与えられた配列の各要素に、実行したい回数だけ関数を実行した結果が入った、新しい配列
*/
// ここにコードを書きましょう
function feedback(anyArray, action, iterNum) {
    const result = anyArray.map(function(num) {
        let number = num;
        for (let i = 0; i < iterNum; i++) {
            number = double(number);
        }
        return number;
    });

    return result;
}

function double(element) {
    return element * 2;
}

testForArrays(feedback([1, 2, 3], double, 1), [2, 4, 6]);
testForArrays(feedback([1, 2, 3], double, 2), [4, 8, 12]);
testForArrays(feedback([1, 2, 3], double, 8), [256, 512, 768]);
Day17_0220_4_pokemon.js
function test(actual, expected) {
    if (actual === expected) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
    return 0;
}

function testForArrays(actualssss, expected) {
    if (JSON.stringify(actualssss) === JSON.stringify(expected)) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
}

let actual;
let expected;





//-- Day17 ポケモンプロジェクト 基礎-Q1 --//
console.log("%c== Day17 ポケモンプロジェクト 基礎-Q1 ==", 'color:red; font-size:14px');
// データ中のすべてのポケモンの名前を要素に持つ配列を返す、関数 getNames を宣言してください。
/**
* @returns {Array<string>} データ中のすべてのポケモンの名前を要素に持つ配列
*/
function getNames() {
    return allPokemon.map(function(monster) {
        return monster.Name;
    })
}

testForArrays(getNames(), getNamesExpected);


//-- Day17 ポケモンプロジェクト 基礎-Q2 --//
console.log("%c== Day17 ポケモンプロジェクト 基礎-Q2 ==", 'color:red; font-size:14px');
// 与えられた名前を持つポケモンのオブジェクトを返す、関数 getPokemonByName を宣言してください。
/**
* @param {string} pokeName - ポケモンの名前
* @returns {object} 与えられた名前を持つポケモンのオブジェクト
*/
function getPokemonByName(pokeName) {
    for (const object of allPokemon) {
        if (object.Name === pokeName) {
            return object;
        }
    }
}

testForArrays(getPokemonByName("Pikachu"), getPokemonByNameExpected);


//-- Day17 ポケモンプロジェクト 基礎-Q3 --//
console.log("%c== Day17 ポケモンプロジェクト 基礎-Q3 ==", 'color:red; font-size:14px');
// 全ポケモンの最大 CP (戦闘力) の平均値を返す、関数 getAvgMaxCP を宣言してください。
/**
* @returns {number} 全ポケモンの最大CP（戦闘力）の平均値
*/
function getAvgMaxCP() {
    let initValue = 0;

    const MaxCPArray = allPokemon.map(function(object) {
        return object.MaxCP;
    })

    return MaxCPArray.reduce((accumlator, currentValue) => accumlator + currentValue, initValue) / MaxCPArray.length;
}
// コンピュータは内部で2進法を使っているため、10進法の小数点以下の計算で誤差がでることがあります。
// このテストで計算した値が期待値と全く同じでなくても近似値であれば合格として、テストをコメントアウトしておいてください。

test(getAvgMaxCP(), getAvgMaxCPExpected);


//-- Day17 ポケモンプロジェクト 基礎-Q4 --//
console.log("%c== Day17 ポケモンプロジェクト 基礎-Q4 ==", 'color:red; font-size:14px');
// 引数に文字列で attack（技）を取る getResistantPokemon という関数を宣言してください。この関数は、与えられた attack に耐性のある（resistantな）すべてのポケモンのオブジェクトを要素に持つ配列を返します。
/**
* @param {string} attack（技）
* @returns {Array<object>} 与えられた技に耐性がある、すべてのポケモンのオブジェクトが入った配列
*/
function getResistantPokemon(attack) {
    const result = [];
    for (const obj of allPokemon) {
        for (const resistant of obj.Resistant) {
            if (resistant === attack) {
                result.push(obj);
            }
        }
    }
    return result;
}
testForArrays(getResistantPokemon("Fire"), getResistantPokemonExpected);


//-- Day17 ポケモンプロジェクト 基礎-Q5 --//
console.log("%c== Day17 ポケモンプロジェクト 基礎-Q5 ==", 'color:red; font-size:14px');
// 引数に文字列 attack （技）を取る関数 getResistantPokemonNames を宣言してください。この関数は与えられた attack に耐性のあるすべてのポケモンの名前が入った配列を返します。 ヒント： 上記で作成した getResistentPokemon を活用できるかも。
/**
* @param {string} attack（技）
* @returns {Array<string>} 与えられた技に耐性がある、すべてのポケモンの名前が入った配列
*/
function getResistantPokemonNames(attack) {
    const stack = getResistantPokemon(attack);

    return stack.map(function(obj) {
        return obj.Name;
    })
}
testForArrays(getResistantPokemonNames("Ice"), getResistantPokemonNamesExpected);


//-- Day17 ポケモンプロジェクト 基礎-Q6 --//
console.log("%c== Day17 ポケモンプロジェクト 基礎-Q6 ==", 'color:red; font-size:14px');
// weakness（弱点）をキー、その弱点を持つポケモンの数を値とするオブジェクトを返す、関数 getWeaknessCounts を宣言してください。
/**
* @returns {{ [weakness: string]: number }} 弱点とその弱点を持つポケモンの数の組み合わせをキー/値のペアで表現したオブジェクト
*/
const allType = ["Fire", "Ice", "Flying", "Psychic", "Water", "Ground", "Rock", "Electric", "Grass", "Fighting", "Poison", "Steel", "Bug"];
function getWeaknessCounts() {
    const result = {};
    let counter = 0;
    for (const types of allType) {
        for (const pokeObj of allPokemon) {
            for (const weaks of pokeObj.Weaknesses) {
                if (types === weaks) {
                    counter++;
                }
            }
        }
        result[types] = counter;
        counter = 0;
    }
    return result;
}
testForArrays(getWeaknessCounts(), getWeaknessCountsExpected);