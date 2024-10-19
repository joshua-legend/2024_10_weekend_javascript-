//1. 유저에게 첫 번째 숫자, 두 번째 숫자를 입력 받고
//두 수의 합을 콘솔로그로 나타내기!
const first = prompt("첫 번째 숫자");
const second = prompt("두 번째 숫자");
console.log(`두 수의 합은: ${Number(first) + Number(second)}`);

//2. 유저에게 나이를 물어보고, 태어난 년도
//콘솔로그로 나타내기!
const age = prompt("나이가 몇살?");
console.log(`태어난 년도는 ${2025 - Number(age)}`);

// 3. 유저에게 한변의 길이를 입력 받고, 정사각형의 넓이 나타내기
const side = Number(prompt("한 변의 길이 입력"));
console.log(`정사각형의 넓이:${side * side}`);

// 4. 유저에게 밑변과 높이를 입력 받고, 정삼각형의 넓이 나타내기
const base = Number(prompt("밑변 입력"));
const heigth = Number(prompt("높이 입력"));
console.log(`정삼각형의 넓이:${base * height * 0.5}`);

// 5. 유저에게 반지름을 입력 받고, 원의 넓이와 둘레 나타내기
const radius = Number(prompt("반지름 입력"));
console.log(`원의 넓이:${radius * radius * 3.14}, 둘레: ${2 * radius * 3.14}`);

// 6. 유저에게 일본 여행 갈 여비를 엔화로 바꾸기
const yen_rate = 109 / 1000;
const won = Number(prompt("일본 여행 갈 여비"));
console.log(`엔화: ${won * yen_rate}`);
