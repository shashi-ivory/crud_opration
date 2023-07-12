import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import TextFrom from "./Component/TextFrom";

function App() {
  const [num, setNum] = useState("");
  var handleNum = () => {};

  // const updatedNums = numbers.map((number)=>{
  //     return (number + 2);
  // );

  // console.log(updatedNums);
  return (
    <div className="App">
      <TextFrom />
    </div>
  );
}

export default App;
