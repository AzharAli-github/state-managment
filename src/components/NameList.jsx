import React, { useState } from "react";

export const NameList = () => {
  const [list, setList] = useState(["Azhar", "Steve", "Richard", "Ali"]);
  const [name, setName] = useState("");

  const onAddName = () => {
    // list.push(name);
    setList([...list, name])
    setName("")
  };
  return (
    <>
      <ul>
        {list.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onAddName}>Add Name</button>
    </>
  );
};
