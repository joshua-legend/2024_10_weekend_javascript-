const checkList = [
  { id: "policy", isChecked: false, isNecessary: true },
  { id: "service", isChecked: false, isNecessary: true },
  { id: "consent", isChecked: false, isNecessary: true },
  { id: "years", isChecked: false, isNecessary: true },
  { id: "private", isChecked: false, isNecessary: false },
  { id: "marketing", isChecked: false, isNecessary: false },
];

const checkButton = document.getElementById("checkButton");
checkList.forEach((v) => {
  const tag = document.getElementById(v.id);
  tag.addEventListener("input", (e) => {
    v.isChecked = e.target.checked;
    // 필수이면서 모두 체크된 상황
    if (checkList.every((v) => (v.isNecessary == true ? v.isChecked : true))) {
      checkButton.classList.add("checked");
      checkButton.classList.remove("notChecked");
    } else {
      checkButton.classList.add("notChecked");
      checkButton.classList.remove("checked");
    }
  });
});

const all = document.getElementById("all");

all.addEventListener("input", (e) => {
  //체크리스트 현황판 끝냄
  if (e.target.checked == true) {
    checkList.map((v) => {
      v.isChecked = true;
      return v;
    });
  } else {
    checkList.map((v) => {
      v.isChecked = false;
      return v;
    });
  }

  checkList.forEach((v) => {
    const tag = document.getElementById(v.id);
    tag.checked = v.isChecked;
  });

  if (checkList.every((v) => (v.isNecessary == true ? v.isChecked : true))) {
    checkButton.classList.add("checked");
    checkButton.classList.remove("notChecked");
  } else {
    checkButton.classList.add("notChecked");
    checkButton.classList.remove("checked");
  }
});
