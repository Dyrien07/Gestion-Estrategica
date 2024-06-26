import React from 'react'

const BuscadorTablero = () => {
  return (
    <div>
        <select className="form-select form-select-lg mb-3" aria-label="Large select example">
  <option selected>Seleccione un Mes</option>
  <option value="1">Enero</option>
  <option value="2">Febrero</option>
  <option value="3">Marzo</option>
  <option value="4">Abril</option>
  <option value="5">Mayo</option>
  <option value="6">Junio</option>
  <option value="7">Julio</option>
  <option value="8">Agosto</option>
  <option value="9">Septiemre</option>
  <option value="10">Octubre</option>
  <option value="11">Noviembre</option>
  <option value="12">Diciembre</option>
</select>

<select className="form-select form-select-sm" aria-label="Small select example">
  <option selected>Seleecione una semana</option>
  <option value="1">Semana 1</option>
  <option value="2">Semana 2</option>
  <option value="3">Semana 3</option>
  <option value="1">Semana 4</option>
  <option value="2">Semana 5</option>
</select>
    </div>
  )
}

export default BuscadorTablero