import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [Count, newCountmethod] = useState(0);
  function decHandler() {
    newCountmethod(Count-1);
    // if (Count < 0) {
    //   Count = 0;
    //   newCountmethod(Count)
    // }
  }
  function incHandler() {
    newCountmethod(Count+1);
    // if (Count > 20) {
    //   Count = 0;
    //   newCountmethod(Count)
    // }
  }
  function resetHandler() {
    newCountmethod(0)
  }
  return (
    <div className="App">
      <div className="main_container">
        <div>Increment & Decrement</div>
        <div>
          <button onClick={decHandler}>-</button>
          <div>{Count}</div>
          <button onClick={incHandler}>+</button>
        </div>
        <button onClick={resetHandler}>reset</button>
      </div>
    </div>
  );
}

export default App;
