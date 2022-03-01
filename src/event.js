import React from "react";

function Event() {
  //Create function here
  function Greeting() {
    return alert("Hallo everyone, have nice day")
  }

  return (
    // Code Inside div
    <div>
      <p>
        If you press <b>Click Here</b> Then alert will be show
      </p>
      {/* <button onClick={Greeting()} >Click Here</button> */}
      <button onClick={Greeting} >Click Here</button>

      <p>
        If you press <b>Click Me</b> Then alert will be show
      </p>
      {/* <button onClick={alert("Hallo batch 31")} >Click Here</button> */}
      <button onClick={() => alert("Hallo batch 31")} >Click Here</button>
    </div>
  );
}

export default Event;
