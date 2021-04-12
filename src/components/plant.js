import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import TimeCircle from './TimeCircle'


export default function Plant({plant}) {
    return (
  <>          
  <div className="card">
  <div className="card-header">
  <img src={plant.imageUrl} style={style}/></div>
  <div className="card-body">
  <p className="card-text">{plant.plantName}</p>
  <TimeCircle plant={plant}/>
  </div>
  </div>
  </>
    )
}

const style={
   height:250,
   width:250
  }
