import React, { forwardRef } from "react";
//forward refs
const InputChild = forwardRef((_, ref) => {
  return <input ref={ref} />;
});

export default InputChild;
