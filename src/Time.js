import React, { useState, useEffect } from "react";

const Time = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCounter((counter) => counter + 1);
      }, 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  
 
  

  return <h2>the time interval since the last component was mounted in {counter} seconds</h2>;
};

export default Time;