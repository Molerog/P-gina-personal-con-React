import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
// import HTML from './assets/HTML.svg'
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import ObjectArray from "./data/ObjectArray/ObjectArray";
import Tecnologias from "./components/Tecnologias/Tecnologias";
import Inicio from "./components/Inicio/Inicio";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="mainContainer ">
        <Routes>
          <Route path="/" element={<Inicio objeto ={ObjectArray}/>}/>
          <Route path="/Home" element={<Home objeto={ObjectArray} />} />
          <Route path="/Contact" element={<Contact />}/>
        </Routes>
      </div>
      <Tecnologias objeto = {ObjectArray} />

    </BrowserRouter>
  );
}

export default App;
