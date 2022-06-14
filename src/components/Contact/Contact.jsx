import './Contact.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'


const Contact = () => {
  let users = JSON.parse(localStorage.getItem('USUARIOS')) || [];
  const saveData = () =>{
    users.push(data);
    localStorage.setItem('USUARIOS', JSON.stringify(users));
  }
  const [data, setData] = useState({
  username: '',
  email: ''
  });
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  let navigate = useNavigate();

  const initialState = {
    username: '',
    email:''
  };

  const clearState = () => {
    setData({...initialState});
  }

  const handleInputChange = (event) =>{
    if (data.username.length < 3){
      setMessage('El nombre debe contener como mínimo 3 letras');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    console.log(event.target.name)
    console.log(event.target.value)
    setData({
      ...data,
      [event.target.name] : event.target.value,  //Detecta el campo en el que estoy escribiendo y el valor que estoy escribiendo
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('se lanza el formulario', data);
    saveData();
    clearState();
    setMessage('formulario enviado con éxito');
    setTimeout(() => {
      navigate('/Home');
    }, 3000);
  };
  return (
    <>
    <span className = 'info'>Deja tu Email y tu nombre y nos pondremos en contacto</span>
    <div className = 'formContainer'>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        onChange={handleInputChange}  
        value={data.username}
        name="username"
      />
      <input
        type="email"
        placeholder="email"
        onChange={handleInputChange}
        value={data.email}
        name="email"
      />
      <button type="submit" disabled={btnDisabled}>
        Enviar
      </button>
    </form>
    </div>
      {message}
    </>
  )
}

export default Contact