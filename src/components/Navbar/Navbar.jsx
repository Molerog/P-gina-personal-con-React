// import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (  
    <ul className = 'flexContainerList'>
        <Link to = '/'>Inicio</Link>
        <Link to = '/Home'> Sobre mí </Link>
        <Link to = '/Contact'> Contacto </Link>
    </ul>
  )
}

export default Navbar