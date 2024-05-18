import React from "react";
import { UseStateCounter } from "./components/UseStateCounter";
import { NameList } from "./components/NameList";
import { useReducer } from "react";
// import { ReducerHook } from "./components/ReducerHook";
import { HookReducer } from "./components/HookReducer";
import { UserForm } from "./components/UserForm";
// import { MemoHook } from "./components/MemoHook";
// import { EffectHook } from "./components/EffectHook";

function App() {
  return (
    <>
      <h1>useState Examples:</h1>
      <UseStateCounter />
      <NameList />
      <h1>useReducer Examples:</h1>
      <HookReducer />
      <UserForm />
      {/* <h1>useMemo Examples:</h1>
      <MemoHook />
      <h1>useEffect Examples:</h1>
      <EffectHook /> */}
    </>
  );
}

export default App;
