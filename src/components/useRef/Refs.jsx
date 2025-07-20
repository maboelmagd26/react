import React, { useRef } from "react";

const Refs = () => {
  const elementRef = useRef(null);

  const focusInputWriteName = () => {
    if (elementRef.current) {
      elementRef.current.focus();
      elementRef.current.value = "Mahmoud";
    }
  };
  return (
    <div>
      <input ref={elementRef} className="ref" />
      <button onClick={focusInputWriteName}>focus</button>
    </div>
  );
};

export default Refs;
