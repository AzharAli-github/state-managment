import React, { useEffect } from "react";

export const UseEffectTime = () =>{
    useEffect(() => {
        console.log("first use effect 1", count);
      });
    
      useEffect(() => {
        console.log("first use effect 2 ", count);
      }, []);
    
      useEffect(() => {
        console.log("first use effect 3 ", count);
        const timeout = setTimeout(() => {
          console.log('count', count)
        }, 1000);
        return () => {
        };
      }, []);
}

