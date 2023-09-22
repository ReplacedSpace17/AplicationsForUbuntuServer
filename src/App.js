import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import BallenaPage from './Species/ballena';
import iconBallena from '../src/Images/ballena.png';
import iconDelfin from '../src/Images/delfin.png';
import iconOrca from '../src/Images/orca.png';
function App() {
  return (
    <div className='bodyHome'>
      <div className='contentTitle'>
        <h1>CETÁCEOS</h1>
      </div>
      <div className='contentParrafo'>
        <h1>¿QUÉ SON?</h1>
        <p>Los cetáceos (Cetacea) son un infraorden de mamíferos placentarios completamente adaptados a la vida acuática. El nombre «cetáceo» deriva del griego κῆτος, kētos, que significa «ballena» o «monstruo marino» y fue acuñado por Aristóteles para referirse a los animales acuáticos dotados de respiración pulmonar. Presentan un cuerpo fusiforme, semejante al de los peces, que los hace más hidrodinámicos. </p>
      </div>
      <div className='contentMenu'>
        <a href="https://ecuador.inaturalist.org/taxa/41566-Megaptera-novaeangliae">
          <div className='card'>
          <p className='titleCard'>Ballena</p>
          <img src={iconBallena} className='icon'/>
        </div></a>
        <a href="https://www.inaturalist.org/guide_taxa/1867963">
         <div className='card'>
          <p className='titleCard'>Delfín</p>
          <img src={iconDelfin} className='icon'/>
        </div> </a>
        <a href="https://www.inaturalist.org/taxa/41521-Orcinus-orca">
         <div className='card'>
          <p className='titleCard'>Orca</p>
          <img src={iconOrca} className='icon'/>
        </div>
        </a>
      </div>
    </div>
  );
}

export default App;
