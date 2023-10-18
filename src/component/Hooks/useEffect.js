import React, { useState, useEffect } from "react";
import "./style.css";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px",
          borderRadius: "5px",
          border: "none",
        }}
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
    </div>
  );
};

export default UseEffect;
