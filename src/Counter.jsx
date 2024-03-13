import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    console.log('Component Mounted');
    document.body.style.backgroundColor = 'lightblue';

    // Cleanup logic for componentWillUnmount
    return () => {
      console.log('Component Will Unmount');
      
    };
  }, []);

  useEffect(() => {
    console.log('Component Updated');
    document.title = `Count: ${count}`;
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const removeContainer = () => {
    // Use setTimeout to ensure the cleanup effect is executed
    setTimeout(() => {
      setDisplay(false);
    }, 0);
  };
  

  // Render the component only if display is true
  return display ? (

    <div className="counter-container">
      <p className="counter-display">{count}</p>
      <button className="counter-button" onClick={decrement}>
        Decrement
      </button>
      <button className="counter-button" onClick={reset}>
        Reset
      </button>
      <button className="counter-button" onClick={increment}>
        Increment
      </button>
      <div className="div-clear">
      <button className="clear" onClick={removeContainer}>
        Clear
      </button>
      
    </div>
    </div>
  ) : null;
}

export default Counter;
