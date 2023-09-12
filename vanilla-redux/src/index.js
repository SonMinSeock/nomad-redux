import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELET_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELET_TODO:
      return [];
    default:
      return state;
  }
};

const addToDo = (text) => {
  return { type: ADD_TODO, text };
};

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const deleteToDo = (id) => {
  return { type: DELET_TODO, id };
};
const dispatchDeleteToDo = (event) => {
  const deleteListId = event.target.parentNode.id;

  store.dispatch(deleteToDo(deleteListId));
};

const paintToDo = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");

    li.id = toDo.id;
    li.innerText = toDo.text;
    deleteBtn.innerText = "Delete";

    li.appendChild(deleteBtn);
    ul.appendChild(li);

    deleteBtn.addEventListener("click", dispatchDeleteToDo);
  });
};

const store = createStore(reducer);

store.subscribe(paintToDo);

const onSubmit = (event) => {
  event.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);
