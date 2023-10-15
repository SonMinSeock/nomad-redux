import React from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { actionCreators } from "../store";

function Detail({ findToDo, onDeleteBtnClick }) {
  const { id } = useParams();
  const toDo = findToDo(+id);
  const navigate = useNavigate();

  return (
    <>
      <h1>
        {toDo?.text}{" "}
        <button
          onClick={() => {
            onDeleteBtnClick(+id);
            navigate("/");
          }}
        >
          Del
        </button>
      </h1>
      <h2>CreatedAt : {toDo?.id}</h2>
    </>
  );
}

function mapStateToProps(toDos) {
  return {
    findToDo: (id) => toDos.find((toDo) => toDo.id === id),
  };
}

function mapDispatchToProps(dispatch) {
  return { onDeleteBtnClick: (id) => dispatch(actionCreators.deleteToDo(id)) };
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
