import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {

  const [data, setData] = useState()

  const [object, setObject] = useState(
      {
        type: 'users',
        date: Date.now()
      }
  )
  const [coordinates, setCoordinates] = useState({
    x:0,
    y:0
  })
 const mouseHandler = event =>{
    setCoordinates({x:event.clientX, y:event.clientY});
  };
  useEffect(() => {
    window.addEventListener('mouseover', mouseHandler);
  },[])
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${object.type}`)
        .then(response => response.json())
        .then(json => setData(json))

  },[object])
  function updateObject(type) {
    setObject((prev) => {
      return {...prev, type: type}
    });
  }

  return (
    <div>
        <button onClick={() => updateObject('users')}>users</button>
        <button onClick={() => updateObject('todos')}>todos</button>
        <button onClick={() => updateObject('posts')}>posts</button>
        {/*<pre>{JSON.stringify(data,null,2)}</pre>*/}
        <pre>{JSON.stringify(coordinates,null,2)}</pre>
    </div>
  );
}

export default App;
