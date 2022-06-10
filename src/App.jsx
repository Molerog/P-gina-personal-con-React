import './App.css';
// import HTML from './assets/HTML.svg'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Sobremi from './components/Sobremi/Sobremi'
import Tecnologias from './components/Tecnologias/Tecnologias'
import ObjectArray from './data/ObjectArray/ObjectArray'

function App() {
  
  return (
    <div>
      <Navbar />
      <Home objeto = {ObjectArray} />
      <Sobremi />
      <Tecnologias objeto = {ObjectArray} />
    </div>
  )
}

export default App;
