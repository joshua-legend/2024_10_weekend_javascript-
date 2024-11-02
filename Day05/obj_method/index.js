/* 일반함수, 화살표함수 */
const car = {
  name: "캐스퍼",
  speed: 0,
  color: "white",
  start: function () {
    console.log("부릉부릉");
  },
  end: () => {
    console.log("시동끔");
  },
};

const calc = {
  add: function (a, b) {
    return a + b;
  },
  substract: function (a, b) {
    return a - b;
  },
};
