import { useState, useEffect } from 'react';
import "./App.css";
import axios from 'axios';
import api from './services/api'
export default function App() {
  // const [planet, setPlanet] = useState({});
  const [population, setPopulation] = useState('');
  const [climate, setClimate] = useState('');
  const [page, setPage] = useState(1);
  const [name, setName]=useState('');
  const [diameter, setDiameter]=useState('');
const [gravity, setGravity] =useState('');


  useEffect(() => {
    api.get(`${page}`).then((response) => {
      // setPlanet(response.data);
      // console.log(response.data)
      setName(response.data.name);
      setClimate(response.data.climate);
      setPopulation(response.data.population);
      setDiameter(response.data.diameter);
      setGravity(response.data.gravity);
    });
  }, [page]);

  function handlePlanets() {
    setPage(page+1);
    // setPlanet([...planet, { id: Math.random(planet) }]);
  }
  
  return (
    <div className="container">
      <div className="form">
      <header>
<h1>Planeta</h1>
<h2>{name}</h2>

      </header>
          <ul >
            <li className="titulo">Gravidade</li>
            <li>{gravity}</li><hr/>
            <li className="titulo">Clima</li>
            <li>{climate}</li>
            <hr/>
            <li className="titulo">Populaçao</li>
              <li>{population}</li><hr/>
            <li className="titulo">Diametro</li>
              <li>{diameter}</li>
          </ul>
            
       
      </div>

      <div className="btn">
        <button onClick={handlePlanets} className="darkbutton">
          NEXT
        </button>
      </div>
    </div>
  );
}