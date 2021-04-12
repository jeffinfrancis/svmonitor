import './App.css';
import Plants from './components/plants'
import React,{useState,useEffect} from 'react';



function App() {
  const [plant, setPlant] = useState([]);
  // Calling the WebAPI to get the Plants informations
  useEffect(() => {
    const apiUrl = `http://localhost:5000/api/svmonitor`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setPlant(repos);
      });
  }, []);
  

  return (
    <div className="container">
    <div className="row"> 
    <h3> Plant Monitoring
    <small className="text-muted"> SV Monitor </small></h3>
    <Plants plants={plant}/>    
    </div>
    </div>
  );
}

export default App;
