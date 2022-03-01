import React from "react";

function EmbedExpression() {
  //Create function here
  function getMajor() {
    return "Fullstack Batch 31"
  }

  //Create a variable here
  const companyName = "Dumbways.id"

  return (
    // Code Inside div
    <div>
      <p>
        Welcome to {companyName},
        <br />
        <h2>Class {getMajor()}</h2>
      </p>
    </div>
  );
}

export default EmbedExpression;
