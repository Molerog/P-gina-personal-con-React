// import React from 'react'
// import HTML from '../../assets/HTML.svg'
import './Home.css'
import Image from '../../assets/Cazador.webp'

const Home = ({objeto}) => {
  return (  
    <div className = 'mainContainer '>
           <ul>
               <li>Nombre: {objeto.info.nombre}</li>
               <li>Ciudad: {objeto.info.ciudad}</li>
               <li>Edad: {objeto.info.edad}</li>
               <li>Profesión: {objeto.info.profesion}</li>
            </ul>
            <img src={Image} alt="Bloodborne"/>
    </div>
  )
}

export default Home