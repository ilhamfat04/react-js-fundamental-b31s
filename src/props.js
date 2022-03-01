import React from "react";

//Import Components
import List from "./components/list";

function Props() {
  return (
    // Code Inside div
    <div>
      <List listData="Mercedez Benz" action="Buy" />
      <List listData="BMW" action="Sell" />
    </div>
  );
}

export default Props;
