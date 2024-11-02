// //filter 걸러줘!
// const arr = [1, 2, 3, 4, 5];
// const test = arr.filter((x) => x == 1 || x == 3);
// const test1 = arr.filter((x) => x % 2 == 0);
// console.log(test);
// console.log(test1);

// // //1. 30 이하만 살리기!
// // const arr1 = [10, 20, 30, 40, 50];
// // const a1 = arr1.filter((x) => x <= 30);

// // //2. 글자 길이가 5글자 이하만 살리기
// // //3. 알파벳 i 또는 e가 포함한 과일만 살리기!
// // const fruits = ["apple", "banana", "kiwi", "mango", "watermelon"];
// // const alphabet = ["k", "j", "q", "r"];
// // const a2 = fruits.filter((x) => x.length <= 5);
// // const a3 = fruits.filter((x) => x.includes("i") || x.includes("e"));
// // fruits.filter((x) => alphabet.some((y) => x.includes(y)));

// // 메소드 체이닝
// // const c = new Array(20).fill("김밥");
// // const c1 = new Array(10).fill(1);
// // const c2 = new Array(10).fill(0).map((x) => x + 1);

// // [1, 3, 5, 7, 9].map((x, i) => i);

// // 0~999 배열
// const arr1 = new Array(1000).fill(0).map((x, i) => i);

// // Q1. 0~1000 배열이 있고 홀수만 담기!
// const arr2 = new Array(1000)
//   .fill(0)
//   .map((x, i) => i)
//   .filter((x) => x % 2 == 1);
// // Q2. 0~1000 배열이 있고 3의배수만 담기!
// const arr3 = new Array(1000)
//   .fill(0)
//   .map((x, i) => i)
//   .filter((x) => x % 3 == 0);
// // Q3. 0~1000 배열이 있고 5의배수만 담고, 500~600은 걸르기!
// const arr4 = new Array(1000)
//   .fill(0)
//   .map((x, i) => i)
//   .filter((x) => x % 5 == 0)
//   .filter((x) => x < 500 || 600 < x);

// map, filter, reduce(누적시켜줘)

//reduce((a,c)=>{}, init)
// [1, 2, 3, 4, 5].reduce((a, c) => a + c);

//1 ~ 123의 누적의합 구하기!
// new Array(124)
//   .fill(0)
//   .map((x, i) => i)
//   .reduce((a, c) => a + c);

// ["a", "c", "e"].reduce((a, c) => a + c);
