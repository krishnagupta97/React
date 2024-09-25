import './App.css'
import { useState } from 'react';


function App() {

  const [counter, setCounter] = useState(0);

  const addHandler = () => {
    setCounter(counter + 1)
  }
  
  const removeHandler = () => {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>React Project</h1>
      <h2>Counter</h2>
      <div className='btn-container'>
        <button className='btns' onClick={addHandler}> + </button>
        <div className='btns val'> {counter} </div>
        <button className='btns' onClick={removeHandler}> - </button>
      </div>
    </>
  )
}

export default App
 