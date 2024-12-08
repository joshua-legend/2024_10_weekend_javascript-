const input = document.querySelector("#input");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const countdown = document.querySelector("#countdown");

let target;

start.addEventListener("click", () => {
  const { value } = input;
  countdown.innerText = Number(value);
  target = setInterval(() => {
    countdown.innerText = Number(countdown.innerText) - 1;
  }, 1000);
  setTimeout(() => {
    clearInterval(target);
  }, Number(value) * 1000);
});

stop.addEventListener("click", () => {
  clearInterval(target);
});
