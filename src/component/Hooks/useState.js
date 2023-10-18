import React, { useState } from "react";
import "./style.css";

const UseState = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const h1Style = {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#4CAF50", // Updated color
    textAlign: "center",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#333",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "0 10px",
  };

  return (
    <div>
      <h1 style={h1Style}>Counter: {count}</h1>
      <button style={buttonStyle} onClick={increment}>
        Increment
      </button>
      <button style={buttonStyle} onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

export default UseState;
