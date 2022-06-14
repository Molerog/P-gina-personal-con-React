import './Contact.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'




const Contact = () => {
  const [data, setData] = useState({
    name: '',
    email: ''
  });
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  let navigate = useNavigate();

  const initialState = {
    name: '',
    email:''
  };

  const clearState = () => {
    setData({...initialState});
  }

  const handleInputChange = (event) =>{
    if (data.name.length < 3){
      setMessage('El nombre debe contener como mínimo 3 letras');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setData({
      ...data,
      [event.target.name] : event.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('se lanza el formulario', data);
    clearState();
    setMessage('formulario enviado con éxito');
    setTimeout(() => {
      navigate('/Home');
    }, 3000);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        onChange={handleInputChange}
        value={data.name}
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
      {message}
    </form>
  )
}

export default Contact