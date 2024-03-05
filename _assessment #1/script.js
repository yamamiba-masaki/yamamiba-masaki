'use strict'
// 1行目に記載している 'use strict' は削除しないでください


// 1.

function greeting(name) {
  return `Hello, ${name}!`;
}
// テスト
console.log(greeting("Kana")); // => "Hello, Kana!"
console.log(greeting("Kimiko")); // => "Hello, Kimiko!"

//2.

function average(num1, num2) {
  return ((num1 + num2) / 2); 
}

// テスト
console.log(average(1, 2)); // => 1.5
console.log(average(100, 300)); // => 200

//3.

/**
 * @param {"春"|"夏"|"秋"|"冬"} season - 現在の季節
 * @param {"暖かい"|"暑い"|"涼しい"|"寒い"} temp - 現在の気温
 * @returns {"この季節の平均的な気温です。"|"この季節には珍しい気温です。"} 季節や気温に応じて変わる、気候に関する説明
 */
let  actual;
let expected;

function describeTheWeather(season, temp) {
  if (season === "春" && temp === "暖かい") {
    return "この季節の平均的な気温です。" ;
  } else if (season === "夏" && temp === "暑い") {
    return "この季節の平均的な気温です。";  
  } else if (season === "秋" && temp === "涼しい") {
    return "この季節の平均的な気温です。";
  } else if (season === "冬" && temp === "寒い") {
    return "この季節の平均的な気温です。";
  } else {
    return "この季節には珍しい気温です。";
  }
} 

// テスト
actual = describeTheWeather("春", "暖かい");
expected = "この季節の平均的な気温です。";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = describeTheWeather("春", "寒い");
expected = "この季節には珍しい気温です。";

// さらにテストを書いて、コードが正しいことを確認してください

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}
actual = describeTheWeather("夏", "暑い");
expected = "この季節の平均的な気温です。";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = describeTheWeather("夏", "寒い");
expected = "この季節には珍しい気温です。";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}
actual = describeTheWeather("秋", "涼しい");
expected = "この季節の平均的な気温です。";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = describeTheWeather("秋", "暑い");
expected = "この季節には珍しい気温です。";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}
actual = describeTheWeather("冬", "寒い");
expected = "この季節の平均的な気温です。";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = describeTheWeather("冬", "暑い");
expected = "この季節には珍しい気温です。";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

