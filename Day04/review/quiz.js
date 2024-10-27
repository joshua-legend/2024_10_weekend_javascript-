// cgv 프롬프트 프로그램

// 가격: 12000
// 팝콘: 6000, 스낵: 4000
// 콜라류: 3000, 사이다류: 2000
const movie = [
  "보통의가족",
  "베놈",
  "베테랑2",
  "와일드 로봇",
  "대도시의 사랑법",
];
const snacks = ["팝콘", "캬라멜팝콘", "치즈팝콘", "나쵸", "오징어구이"];
const beverages = ["콜라", "제로콜라", "스프라이트", "제로스프라이트"];

const selectedMovie = Number(prompt(movie + " 번호 입력"));
const selectedSnack = Number(prompt(snacks + " 번호 입력"));
const selectedBeverage = Number(prompt(beverages + " 번호 입력"));

const deterSnackPrice = (snack) => {
  return snack.includes("팝콘") ? 6000 : 4000;
};

const deterBeveragePrice = (beverage) => {
  return beverage.includes("콜라") ? 3000 : 2000;
};

console.log(
  `구매하신 제품: 영화:${movie[selectedMovie]}, 스낵류: ${snacks[selectedSnack]}, 음료:${beverages[selectedBeverage]}`
);
console.log(
  `총 가격: ${
    12000 +
    deterSnackPrice(snacks[selectedSnack]) +
    deterBeveragePrice(beverages[selectedBeverage])
  }입니다.`
);
