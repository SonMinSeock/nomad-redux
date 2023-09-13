import React, { useState } from "react";

function Home() {
  const [text, setText] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(text);
  };
  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <h1>ToDo</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="ex) 강아지 산책" onChange={onChange} />
        <input type="submit" value="Add" />
      </form>
    </>
  );
}

export default Home;
