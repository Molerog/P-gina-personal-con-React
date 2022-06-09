import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'

function App() {
  const tecnologias = [{
    nombre:"Html",
    img: ""
  },
  {
    nombre: "Css",
    img: ""
  },
  {
    nombre: "Javascript",
    img: ""
  },
  {
    nombre: "Bootstrap",
    img: ""
  },
  {
    nombre: "Bootstrap",
    img: ""
  },
  {
    nombre: "NodeJs",
    img: ""
  },
  {
    nombre: "Sql",
    img: ""
  },
  {
    nombre: "MongoDb",
    img:""
  }  
]
  return (
    <div>
      <Navbar />
      <Home objeto = {tecnologias} />
    </div>
  )
}

export default App;
