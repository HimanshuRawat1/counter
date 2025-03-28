import React, { useState } from 'react';
function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count+1);
  };
  const decrementCount = () => {
    setCount(count-1);
  };
return (
  <div className="app-container">
    <h1>Counter application</h1>
    <div className="counter-display">
      Count:{count}
    </div>
    <div className="button-group">
      <button className="increment-button" onClick={incrementCount}>Increment</button>
      <button className="decrement-button" onClick={decrementCount}>Decrement</button>
    </div>
  </div>  
 );
}

export default App;