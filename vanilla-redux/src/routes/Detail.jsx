import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const toDos = useSelector((state) => state);

  const { text, id: toDoId } = toDos?.find((toDo) => toDo.id === +id);

  return (
    <>
      <h1>{text}</h1>
      <h5>Created at: {toDoId}</h5>
    </>
  );
}

export default Detail;
