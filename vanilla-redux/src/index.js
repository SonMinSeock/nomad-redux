import { createStore } from "redux";
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;

// define reducer
const countModifier = (state = 0) => {
  // ... modify state

  return state;
};

// created store
const countStore = createStore(countModifier);

console.log(countStore.getState());
number.innerText = count;

const updateText = () => {
  number.innerText = count;
};

const handleAdd = () => {
  count += 1;
  updateText();
};

const handleMinus = () => {
  count -= 1;
  updateText();
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
