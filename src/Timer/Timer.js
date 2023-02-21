import style from './Timer.module.css'
import { useEffect, useState } from 'react';
export default function Timer(){

     const [seconds,setSeconds]=useState(0);
     const [minutes,setMinutes]=useState(0);
     const [hour,setHour]=useState(0)
     const [toggle,setToggle]=useState(false)

  let timer;
  useEffect(()=>{
    timer=setInterval(() => {
           
      setSeconds(seconds+1);
   if(seconds==59){
    setMinutes(minutes+1);
    setSeconds(0)
   }
   if(minutes==59){
    setHour(hour+1)
    setMinutes(0)
   }
    },1000);
    return()=>clearInterval(timer)
   
  });

  const restart=()=>{
  setMinutes(0)
  setSeconds(0)
  }

  const stop=()=>{
    // setToggle(!toggle)  
   clearInterval(timer)
  }
  const resume =()=>{
    timer();
  }

  return (
    <div className={style.wrapper}>
     <div className={style.timer}>
      <h1>Timer</h1>
      <h5>{hour<10 ? '0'+hour : hour}:{minutes<10 ? '0'+minutes : minutes}:{seconds<10 ? '0'+seconds : seconds}</h5>

     <div className={style.button}>
      <button  className={style.btn} onClick={restart}>Reset</button>
      <button className={style.btn} onClick={stop}>stop</button>
      <button className={style.btn} onClick={resume}>resume</button>
      </div> 
      </div>
      </div>
    )
}