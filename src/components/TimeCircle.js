import React,{useState,useEffect} from 'react'
import {Button} from 'react-bootstrap'
import { store } from 'react-notifications-component';


export default function TimeCircle({plant}) {
const [status,setStatus]=useState({plant});
const [timeValue,setTimeValue]= useState(parseInt(0));
const [isButtonDisabled,setState]=useState(false);
const [initialState,setInitial]=useState(10);
    
useEffect(() => {
      if(timeValue<=0)
      {
         setStatus({...status,waterStatus:'Plants needs watering'})
         if(initialState<=0)
         {
           showNotification();
        }
         setTimeout(() => setState(false), 40000);         
          return;
      }else
      {
         setStatus({...status,waterStatus:'Plant is watering now'})   
      }
    const intervalId=setTimeout(()=>{
        setTimeValue(timeValue-1);
        
    },1000);
    return () => clearTimeout(intervalId);
},[timeValue]);
const btnWatering=()=>{
    setTimeValue(10);
    setInitial(0);
    setTimeout(() => setState({ isButtonDisabled: true }), 10000);
}

const stopWatering=()=>{
    setTimeValue(0);
    setState(false);
    setInitial(10);
}

const showNotification=()=>{
    store.addNotification({
        title: "Plant Monitoring!",
        message: "Plants needs watering after 30 Sec",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
}
    return (
        <div className="col-md-12">
         <h5 style={{color:"blue"}}>status: <span style={{fontSize:'15px',color:'brown'}}>{status.waterStatus}</span></h5>
        <Button className='btn btn-primary' style={{marginRight:'10%'}} onClick={btnWatering} disabled={isButtonDisabled}>Start</Button>
        <Button className='btn btn-primary' onClick={stopWatering} >Stop</Button>
        <div className='timer-circle'>
          {timeValue}
        </div>
        </div>
    )
}
