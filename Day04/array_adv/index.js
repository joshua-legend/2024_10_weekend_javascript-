// map
const arr = [1, 2, 3, 4, 5];
arr.map((a) => a + 3); // 각각 3더하기
arr.map((a) => 10); // 모두 10으로 바꾸기
arr.map((a) => a * 2);
arr.map((a) => a ** 2);
arr.map((a) => (a % 2 ? a + 10 : a - 10));
arr.map((a) => (a >= 3 ? a + 3 : a - 3));

const fruits = ["apple", "orange", "kiwi", "mango", "watermelon", "melon"];
fruits.map((a) => (a.length <= 5 ? a.toUpperCase() : "🍌"));

// some & every
const arr1 = [1, 3, 5, 7, 9];

arr1.some((a) => true);
arr1.some((a) => a > 5); // true
arr1.some((a) => a == 7); // true

arr1.every((a) => a > 1); // false
arr1.every((a) => a > 0); // true

// 1. 과일 리스트에서 a or e가 모두 포함하는지 확인하는 로직 만들기!
fruits.every((x) => x.includes("a") || x.includes("e"));
// 2. 과일 리스트에서 글자가 모두 10글자 이하인지 확인하는 로직 만들기!
fruits.every((x) => x.length <= 10);

// 유저에게 아무 영단어를 입력받고
// aeiou(모음)이 들어갔는지 안들어 갔는지 확인하는 로직 만들기!

const word = prompt("영단어 입력!"); // kiwi
const wordList = word.split(""); //[k,i,w,i]
const vowels = "aeiou".split(""); //[a,e,i,o,u]

wordList.some((x) => vowels.some((y) => y == x));
