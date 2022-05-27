import React, { useRef } from "react";
import InputChild from "./inputChild";

const InputParent = () => {
  const childRef = useRef();
  const clickHandler = () => {
    childRef.current.focus();
  };
  return (
    <article>
      This is where the ref is forwareded
      <InputChild ref={childRef} />
      <button onClick={clickHandler}> Focus input </button>
    </article>
  );
};

export default InputParent;
