import React, { useEffect, useState } from "react";

export const UseStateCounter = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={addOne}>Count = {count}</button>
    </>
  );
};
