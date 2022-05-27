import React, { useEffect, useState, useRef } from "react";

const Test = () => {
  const [state, setState] = useState(0);
  const counter = useRef(null);
  useEffect(() => {
    const newNum = state.toString().toUpperCase();
    setState(newNum);
    counter.current++;
  }, [state]);
  return (
    <div>
      State: {state}
      Counter" {counter.current}
      <button
        // onClick={() => setState(state + 1)}
        style={{ backgroundColor: "red" }}
      >
        <input onChange={(e) => setState(e.target.value)} />
        Click Me
      </button>
    </div>
  );
};

export default Test;
