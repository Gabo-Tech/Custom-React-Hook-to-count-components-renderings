import React, { useState , useEffect} from 'react';
import './App.css';
import useCount from './useCount';
function App() {
  const [bool, setBool] = useState(true);
  const counter = useCount();
  return (  
        <p>
            {counter}
            <button onClick={()=>{setBool(!bool)}}>Change boolean value</button>
            This is a boolean {JSON.stringify(bool)}
        </p>
  );
}

export default App;
