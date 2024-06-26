import './App.css';
import { BrowserRouter, Route,Routes } from "react-router-dom";
import MainMenu from './components/MainMenu/MainMenu';
import IngresoDatos from './components/IngresoDatos/IngresoDatos';
import CustomHeader from './components/CustomHeader';
import TableroDTG from './components/TableroDTG';
import Cfg from './components/Config/Cfg';
import Spec from './components/Tablero Spec';


function App() {
 

  return (
    <div className="App">
      <CustomHeader></CustomHeader>
     <BrowserRouter>
     <Routes>
      <Route path={"/gestion"} element={<MainMenu/>}></Route>
      <Route path={"/gestion/Tablero"} element={<TableroDTG/>}></Route>
      <Route path={"/gestion/IngresoDatos"} element={<IngresoDatos/>}></Route>
        <Route path={"/gestionn/cfg"}  element={<Cfg/>}></Route>
        <Route path={"/gestion/Spec"} element={<Spec/>}></Route>
      
      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;