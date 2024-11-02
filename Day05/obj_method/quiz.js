// 카페 포스기 프로그램
const cafe = {
  menu: [
    { name: "아메리카노", price: 2500 },
    { name: "라떼", price: 3000 },
  ],
  cost: function (name, price, amount) {
    return price * amount;
  },
  info: function () {
    console.log(this.menu);
  },
  addMenu: function () {
    const name1 = prompt("메뉴 이름 입력");
    const price1 = Number(prompt("메뉴 가격 입력"));
    this.menu.push({ name: name1, price: price1 });
  },
  deleteMenu: function () {
    const coffee = prompt("메뉴 삭제 이름");
    this.menu.filter((x) => x.name != coffee);
  },
};
