import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../redux/store";

function ToDo({ text, id }) {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(actionCreators.deleteToDoAction(id));
  };
  return (
    <li>
      {text}
      <button onClick={onClick}>DEL</button>
    </li>
  );
}

export default ToDo;
