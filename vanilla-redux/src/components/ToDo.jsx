import React from "react";
import { Link } from "react-router-dom";

function ToDo({ text, onDeleteBtnClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onDeleteBtnClick}>DEL</button>
    </li>
  );
}

export default ToDo;
