// import React from 'react'
// import HTML from '../../assets/HTML.svg'
import './Home.css'
import Image from '../../assets/Cazador.webp'
import Sobremi from '../Sobremi/Sobremi'




const Home = ({objeto}) => {
  return (  
    <div className = 'home'>
      <div className="info-container">
           <ul>
               <li>Nombre: {objeto.info.nombre}</li>
               <li>Ciudad: {objeto.info.ciudad}</li>
               <li>Edad: {objeto.info.edad}</li>
               <li>Profesión: {objeto.info.profesion}</li>
            </ul>
            <img src={Image} alt="Bloodborne"/>
      </div>
            <Sobremi />        
    </div>
  )
}

export default Home