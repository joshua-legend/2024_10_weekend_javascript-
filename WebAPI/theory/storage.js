//storage.js
const input = document.querySelector("#input");
const button = document.querySelector("#button");
const lunchList = document.querySelector("#lunchList");

const data = localStorage
  .getItem("lunch")
  .split(",")
  .map((v) => `<li>${v}</li>`)
  .forEach((v) => lunchList.insertAdjacentHTML("beforeend", v));

button.addEventListener("click", () => {
  const { value } = input;
  const lunch = localStorage.getItem("lunch") || "";
  localStorage.setItem("lunch", lunch + "," + value);
  lunchList.insertAdjacentHTML("beforeend", `<li>${value}</li>`);
});
