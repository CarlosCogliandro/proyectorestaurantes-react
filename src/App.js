import NavBar from "./component/NavBar/NavBar";
import CardContainer from "./component/CardContainer/CardContainer";
import Contacto from './component/Contacto/Contacto';
import Footer from "./component/Footer/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar /> 
        <Routes>
          <Route path="/" element={<CardContainer/>}/>
          <Route path='/nosotros' element={<div style={{textAlign:'center', margin:'200px', color:'blue', fontSize:'50px'}}>Informacion de nosotros</div>}/>
          <Route path='/contacto' element={<Contacto/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
