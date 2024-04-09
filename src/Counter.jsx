import React from 'react'
import { useState, useRef ,useEffect} from 'react';
import './styles.css'

const Counter = () => {

 const [count, setCount] = useState(0);
  // const [target, setTarget] = useState(0);
  const inputRef = useRef(null);

useEffect (()=>{
        document.title=`Target: ${count}`
    },[count]);

  
  const increment = () => {
    if (parseInt(inputRef.current.value) > count) {
      setCount(prevCount => prevCount + 1);
    }
  };


  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };
  const newTarget = () => {
    inputRef.current.focus();
  };


  return (
    
    <div className='Card'>

    <div className="first">
        <h1 className='target--score'>Target :{count}/ <input ref={inputRef}/></h1>
        
    </div>
    <div className="second">


      <button onClick={() => increment()} className='counter-button'>+</button>
      <button onClick= {() => decrement()} className='counter-button'>-</button>
        
       <button onClick={newTarget}>New Target</button>
    </div>

     

     
    </div>

     

  )
}

export default Counter
