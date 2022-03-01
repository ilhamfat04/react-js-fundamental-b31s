import React, { useState } from "react";

function State() {
  //init State
  const [counter, setCounter] = useState(0)

  console.log(counter);

  //Create Function Add
  function Add() {
    setCounter(counter + 8)
  }

  //Create Function Less
  function Less() {
    setCounter(counter - 1)
  }

  return (
    // Code Inside div
    <div>
      <h2>{counter}</h2>
      <button onClick={Add} >add</button>
      <button onClick={Less} >less</button>
    </div>
  );
}

export default State;
