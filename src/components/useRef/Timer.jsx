import { useState, useRef, useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => clearInterval(intervalRef.current)}>stop</button>
    </div>
  );
};

export default Timer;
