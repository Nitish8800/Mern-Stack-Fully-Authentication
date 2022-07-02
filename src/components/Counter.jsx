import * as React from "react";
import { useState, useEffect } from "react";

export default function Counter({ number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    for (let i = 0; i <= number; i++) {
      const interval = setTimeout(() => {
        if (count < number) {
          setCount(count + 1);
        }
        return () => clearInterval(interval);
      });
    }
  }, [count]);

  return (
    <>
      <div>
        <div>{count}</div>
      </div>
    </>
  );
}
