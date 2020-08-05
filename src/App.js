import React, {useState} from 'react'; // useState Function use krny k lia phely import krni parni ..
import './App.css';
import Message from './Message.js';   // Message.js file ky andr Message_Function ko use krny ky lia import kia hai .
// import {Message} from './Message.js';  /// Yeah Message_Function ky sath brackets islia lagai hain ku ky agr 'Message.js' File ky ander export_Default naw likha ho tab.
function App() {
  
  let [count,setcount ]=useState(0); // count Variable hai or setCount uski Value Change krny ky lia hai. 'useState' variable declare or initialiaze krwany ky use kia hai kheh skhty hain 'useState(0)' ka mtlb variable ki value integar hai.
  let[isMorning , setMorning] =useState(true); // Same uper wali line but ab is main value of Variable Boolean hai.
  return(
  <div className={`box ${isMorning ? 'daylight':'darklight'}`}> 
    <h1>Good {isMorning ? 'Morning' : 'Night'}</h1> 
    <Message counter ={count}/>
   <button onClick={()=>setcount(++count)} >Update Counter</button>
   <button onClick={()=> setMorning(!isMorning)} >Update Day</button>
  </div>
  );
}

export default App;
