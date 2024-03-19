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

console.log("\nDAY18ウォーミングアップ");

const arrayOfObjects = [
  { name: "alice", favoriteColor: "green" },
  { name: "bob", favoriteColor: "blue" },
];


function getNames(array) {
  return array.map(function(element) {
    console.log(element);
    return element.name;//それぞれの要素に対してアクセス　==> object =>> key / value
  })
  
}

function getFavoriteColors(array) {
  return array.map(function(element) {
    return element.favoriteColor;//それぞれの要素に対してアクセス　==> object =>> key / value
  })
  
}

test(getNames(arrayOfObjects), ["alice", "bob"]);
test(getFavoriteColors(arrayOfObjects), ["green", "blue"]);

