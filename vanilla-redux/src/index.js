import { createStore } from "redux";
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// define reducer
const countModifier = (count = 0, action) => {
  // ... modify state
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "SUB") {
    return count - 1;
  }

  return count;
};

// created store
const countStore = createStore(countModifier);

const onChange = () => {
  // 변경된 상태값을 출력.
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
};

const handleMinus = () => {
  countStore.dispatch({ type: "SUB" });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
