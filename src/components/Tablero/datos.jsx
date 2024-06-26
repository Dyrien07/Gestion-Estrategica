import React from 'react'

const datosTablero = ({data}) => {
  return (
    <tbody>
            <tr>
                <th scope="row">{data.Dia}</th>
                <td>{data.UM}</td>
                <td>{data.PrecioEstimado}</td>
                <td>{data.Periodo}</td>
                <td>{data.Estado}</td>
                <td>{data.HDR}</td>
            </tr>
        </tbody>
  )
}

export default datosTablero