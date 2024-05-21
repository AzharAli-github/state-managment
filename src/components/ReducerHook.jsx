import React, { useReducer } from "react";

function UserForm() {
    const [state, dispatch] = useReducer(
        (state, action) => { }, (
        {
            ...state,
            ...action,
        }),
        {
            fist: "",
            last: "",
        }
    );

return (
    <div>
        <input type="text"
            value={state.fist}
            onChange={(e) => dispatch({first: e.target.value})} />
        <input type="text"
            value={state.last}
            onChange={(e) => dispatch({last: e.target.value})} />
            <div>
               First:  {state.fist} 
            </div>
            <div>
            Last: {state.last}
            </div>
    </div>
)
}

export const ReducerHook = () => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "SET_NAME":
                return { ...state, name: action.payload };
            case "ADD_NAME":
                return {
                    ...state,
                    names: [...state.name, state.name],
                    name: "",
                },
                {
                    names: [],
                    name: "",
                }

        };
    });

    return(
        <div>
            <input type="text"
            value={state.name}
            onChange={e => dispatch ({type : "SET_NAME", payload: e.target.value})} />
            <div>{state.name}</div>
        </div>
    )
}