import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

  const [counter, setCounter] =  useState(0);

  return (
    <div>
      <h1>Counter: {counter}</h1>
        <button className="btn">Push</button>
        <button className="btn">Pop</button>
    </div>
  );
}

export default App;
