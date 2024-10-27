// skill 함수를 정의하고
// const triggerSkill = (skill) => {
//   console.log("스킬 발동!");
//   skill();
//   console.log("스킬 마무리!");
// };

// const elementSkill = (element) => {
//   console.log(`${element} 모으기`);
//   console.log(`${element}  발사`);
// };

// const skills = ["🧊", "⚡", "🔥","💨"];
// const skillNumber = Number(prompt("🧊 ⚡ 🔥 💨 중에 어떠한 스킬을 발동할까요?"));
// triggerSkill(() => elementSkill(skills[skillNumber]));

//타코 음식 만들기!
// 유저에게 타코 메뉴를 선택하고(🦐, 🥩,🍗, 🧀)
// 요리 하기 함수를 만들기 (요리시작! ~ 요리끝!)
// 타코 만들기 함수를 만들기 (🦐, 🥩,🍗, 🧀)
// 1. 타코 준비 -> 2. 메뉴 넣기 -> 3. 굽기 -> 4.타코완성
// 준비된 ~~타코가 나왔습니다!

const main = ["🦐", "🥩", "🍗", "🧀"];
const cook = (recipe) => {
  console.log("요리 시작!");
  recipe();
  console.log("요리 완료!");
};
const makeTaco = (main) => {
  console.log("타코 준비!");
  console.log(`${main} 넣기`);
  console.log("굽기");
  console.log(`${main} 타고 완성!`);
};
const menu = Number(prompt("타코 메뉴 (🦐, 🥩, 🍗, 🧀)  고르세요!"));
cook(() => makeTaco(main[menu - 1]));
