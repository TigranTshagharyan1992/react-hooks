import React, {useEffect, useState} from 'react';

function useLogger(value) {
    useEffect( () => {
        console.log('Value changed: ', value);
    }, [value])
}

function useInput(initialValue) {

    const [value, setValue] = useState(initialValue);

    const onChange = event => {
        setValue(event.target.value);
    }
    const clear = () => setValue('');
    return {
        value, onChange, clear
    }

}

function App() {

    const input = useInput('');
    const input2 = useInput('');
    const input3 = useInput('');

    // useLogger(input.value);

  return (
          <div className={'container pt-3'}>
              <input type="text" value={input.value} onChange={input.onChange}/>
              <input type="text" value={input2.value} onChange={input2.onChange}/>
              <input type="text" value={input3.value} onChange={input3.onChange}/>
              <hr />
              <h2> <button onClick={input.clear}>clear</button>{input.value}</h2>
              <h2> <button onClick={input2.clear}>clear</button>{input2.value}</h2>
              <h2> <button onClick={input3.clear}>clear</button>{input3.value}</h2>
          </div>
  );
}

export default App;
