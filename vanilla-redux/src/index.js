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
let count = countStore.getState();

console.log(`Dispatch 이전 count 결과 : ${count}`);

countStore.dispatch({ type: "ADD" });

count = countStore.getState();

console.log(`Dispatch 이후 count 결과 : ${count}`);

// number.innerText = count;

// const updateText = () => {
//   number.innerText = count;
// };

// const handleAdd = () => {
//   count += 1;
//   updateText();
// };

// const handleMinus = () => {
//   count -= 1;
//   updateText();
// };

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);
