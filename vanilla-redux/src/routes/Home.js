import React, { useState } from "react";

function Home() {
  const [text, setText] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setText("");
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
    </>
  );
}

export default Home;
