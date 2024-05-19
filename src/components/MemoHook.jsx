import React, { useMemo, useState } from "react";


export const MemoHook = () => {

    function SortedList({list}) {
        const sortedList = useMemo(() => [...list].sort(), [list]);
        return(
            <div>
                {sortedList.join(" , ")}
            </div>
        )
    }

  const [numbers] = useState([10, 11, 12]);

  const total = useMemo(
    () => numbers.reduce((acc, number) => acc + number, 0),
    [numbers]
  );

  const [names] = useState(["Azhar", "Farman", "Sheraz", "Masroor"]);

  const sortedNames = useMemo(() => [...names] .sort(),
  [names]
);

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const CountTotal = useMemo(() => count1 + count2, [count1, count2]);

  return (
    <>
        <div>Total : {total}</div>
        <div>Names : {names.join(" , ")}</div>
        {/* <div>Sorted Names : {sortedNames.join(" , ")}</div> */}
        <SortedList list={names}/>
        <div style={{marginTop: "20px"}}>
            <button onClick={() => setCount1(count1 + 1)}>Count 1 {count1}</button>
            <button onClick={() => setCount2(count2 + 1)}>Count 2 {count2}</button>
            <h3>Total {CountTotal}</h3>
        </div>
    </>
  )
};
