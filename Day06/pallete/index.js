import { colors } from "./data.js";
import { makeColor, makePallete } from "./func.js";

const pallete = makePallete();
colors.forEach((v) => pallete.appendChild(makeColor(v)));
document.body.appendChild(pallete);
