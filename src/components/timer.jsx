import React, { useEffect, useState } from "react";

const Timer=()=>{

    const [time,setTime]=useState(0);
    const [isRunning,setisRunning]=useState(false);

    useEffect(()=>{
              
        let interval;
        if(isRunning){

            interval=setInterval(()=>{
                   setTime((time)=>time+1);
            },10)
        }

        else if(!isRunning){
                
            clearInterval(interval);
        }
        
        return ()=> clearInterval(interval);

        }
    ,[isRunning])

    return(
        <div className="timer">
        
        <div className="time-display">
            <span>{("0" + Math.floor(time/6000)%60).slice(-2)}:</span>
            <span>{("0" + Math.floor(time/100)%60).slice(-2)}:</span>
            <span>{("0"+ time%100).slice(-2)}</span>
        </div>
     

        <div className="buttons">

           {isRunning? <button style={{borderRadius:"24px", backgroundColor:"white"}} onClick={()=>setisRunning(false)}>stop</button>:
           <button style={{borderRadius:"24px", backgroundColor:"white"}} onClick={()=>setisRunning(true)}>start</button>
            }
            <button style={{borderRadius:"24px", backgroundColor:"white"}} className="button"onClick={()=>{setisRunning(false); setTime(0);}}>reset</button>

        </div>

        </div>
    )
}

export default Timer;