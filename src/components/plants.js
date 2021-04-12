import React from 'react'
import Plant from './plant'

export default function Plants({plants,onStart,timerVal}) {
    return (
        <div className="row">
            {
            plants.map((plant)=>(
               <h4 key={plant.id}>
               <Plant plant={plant} onStart={onStart} timerVal={timerVal}></Plant></h4>
            ))}
            
        </div>
    )
}
