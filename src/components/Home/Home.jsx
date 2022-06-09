import React from 'react'
import './Home.css'

const Home = ({objeto}) => {
    const tecnologia = objeto.map(elemento => {
        return (
        <div>
            <li>{elemento.nombre}</li>
            <img src={elemento.img} alt="esto es una imagen" />
        </div>
            )
    })
  return (
    <div className = 'mainContainer'>
        <div>
           <ul>
               <li>Nombre: Germán</li>
               <li>Apellido: Molero</li>
               <li>Edad: 34</li>
               <li>Tecnologías adquiridas:</li>
                    <ul>
                        {tecnologia}
                    </ul>
            </ul> 
        </div>
        <div> FOTO </div>
    </div>
  )
}

export default Home