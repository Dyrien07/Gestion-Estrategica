import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"


const MainMenu = () => {

  const admin = false
  return (
    <div className='MenuContainer'>
        <Link to={"/gestion/IngresoDatos"}  type= "button" className="btn btn-primary ButtonMenu">Ingreso Datos</Link>
        <Link to={"/gestion/Tablero"}  type= "button" className="btn btn-primary ButtonMenu">Tablero</Link>
        {
          admin === true &&
          <Link to={"/gestion/cfg"} type= "button" className="btn btn-primary ButtonMenu">Configuracion</Link>
        }
        <Link to={"/gestion/Spec"} type= "button" className="btn btn-primary ButtonMenu">Tablero Spec</Link>
      
        
    </div>

  )
}

export default MainMenu