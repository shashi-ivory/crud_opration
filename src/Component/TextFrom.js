import React, { useState } from "react";

function TextFrom() {
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState([]);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = () => {
    setInputValue("");
    setDisplayValue((prevValue) => prevValue + " " + inputValue);
  };
  return (
    <div className="container">
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Task
        </span>
        <input
          value={inputValue}
          type="text"
          className="form-control"
          placeholder="Task"
          aria-label="Task"
          aria-describedby="basic-addon1"
          onChange={handleInputChange}
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
      <p>{displayValue}</p>
    </div>
  );
}

export default TextFrom;
