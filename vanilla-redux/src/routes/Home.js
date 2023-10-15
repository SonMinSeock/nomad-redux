import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setText("");
    addToDo(text);
  };
  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <h1>ToDo</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="ex) 강아지 산책" onChange={onChange} value={text} />
        <input type="submit" value="Add" />
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
