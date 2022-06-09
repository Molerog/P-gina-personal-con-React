// import React from 'react'
// import HTML from '../../assets/HTML.svg'
import './Home.css'
import Image from '../../assets/Cazador.webp'

const Home = () => {
  return (  
    <div className = 'mainContainer '>
           <ul>
               <li>Nombre: Germán</li>
               <li>Apellido: Molero</li>
               <li>Edad: 34</li>
               <li>Profesión: Cazador de bestias</li>
            </ul>
            <img src={Image} alt="Bloodborne"/>
    </div>
  )
}

export default Home