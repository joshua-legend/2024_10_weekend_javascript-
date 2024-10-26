//유저에게 비밀번호 확인을 입력 받고
const alertMsg = {
  pwShort: "비밀번호가 짧습니다.",
  pwLong: "비밀번호가 깁니다.",
  pwNotIncludeSpecial: "특수문자가 반드시 들어가야 합니다!",
  pwNotEndZ: "마지막 글자는 z로 끝나야합니다!",
  pwSuccess: "올바르게 비밀번호 설정하였습니다!",
};

const pw = prompt("비밀번호 입력");
const isLowerThan4 = pw.length < 4;
const isLongThan12 = pw.length > 12;
const hasSpecial = !pw.includes("!") || !pw.includes("#") || !pw.includes("@");
const isEndZ = !pw.endsWith("z");

if (isLowerThan4) {
  alert(alertMsg.pwShort);
} else if (isLongThan12) {
  alert(alertMsg.pwLong);
} else if (hasSpecial) {
  alert(alertMsg.pwNotIncludeSpecial);
} else if (isEndZ) {
  alert(alertMsg.pwNotEndZ);
} else {
  alert(alertMsg.pwSuccess);
}
