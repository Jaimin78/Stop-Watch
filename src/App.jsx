import './App.css'
import {useState} from 'react';

export default function App() {

  const [isDisabled, setDisabled] = useState(false);
  const [time,setTime] = useState(0);
  let [intervalid, setId] = useState(0);
  
  const startWatch = () => {
   let interval = setInterval(()=>{
      setTime((x)=>x+1)
    },1000)
    setDisabled(true)
    setId(interval)
  }
  
  const stopWatch = () => {
    clearInterval(intervalid)
    setDisabled(false)
  }
  
  const resetWatch = () => {
    clearInterval(intervalid)
    setTime(0)
    setDisabled(false)
  }
  
  return (
    <main>
       <h1>Stop Watch</h1>
       <h2>{time}</h2>
       <button onClick={startWatch} disabled={isDisabled}>Start</button>  
       <button onClick={stopWatch}>Stop</button>
      
       <button onClick={resetWatch}>Reset</button>
    </main>
  )
}