import {useCallback, useState} from "react";
import List from "./components/List";



function App() {

  const [number, setNumber] = useState(10);
  const [colorCheck, setColorCheck] = useState(false);

  const style ={color: colorCheck ? 'red':'blue'};

  const generateArray = useCallback(() => {
        return new Array(number).fill('default').map((def, key) =>{
            return `element ${key + 1}`
        });
  },[number]);

  return (
    <div>
        <h1 style={style}>Number: {number}</h1>
        <button onClick={() => setNumber(prev => prev+1)}>Plus Number</button>
        <button onClick={() => setNumber(prev => prev-1)}>Minus Number</button>
        <button onClick={() => setColorCheck(prev => !prev)}>Color change</button>
        <List getItems={generateArray}/>
    </div>
  );
}

export default App;
