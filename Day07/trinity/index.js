import { data } from "./data.js";
import { makeRoomCard } from "./func.js";

const container = document.querySelector(".container");
data.forEach((v) => container.insertAdjacentHTML("beforeend", makeRoomCard(v.imgUrlList[0], v.roomTitle, v.priceTitle, v.roomDesc)));
