import React, {useState, useEffect} from "react";

export const EffectHook = () => {
    
    const [names, setNames] = useState([]);

    useEffect(() => {
        fetch("/names.json")
        .then((response) => response.json())
        .then((data) => setNames(data));
    }, []);

    const [selectedName, setSelectedName] = useState(null)

    return(
        <div>
            <div>
                {names.map((nome, index) => (
                    <button key={index} onClick={() => setSelectedName(nome)}>
                        {nome}
                    </button>
                ))}
            </div>
            <div>{selectedName}</div>
        </div>
    )
}