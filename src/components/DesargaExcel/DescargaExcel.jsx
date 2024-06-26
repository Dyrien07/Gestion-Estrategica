import React from 'react';
import * as XLSX from 'xlsx';

 export function DescargarExcel(datos ) {
  // Función para convertir el objeto de entrada en un array de arrays con el formato adecuado para XLSX
  const convertirDatosAArray = (datos) => {
    let arrayDeArrays = [];

    // Iterar sobre cada elemento del objeto
    for (const key in datos) {
      if (Object.hasOwnProperty.call(datos, key)) {
        const elemento = datos[key];
        const fila = [];

        // Agregar los valores de cada propiedad al array de fila
        for (const propiedad in elemento) {
          if (Object.hasOwnProperty.call(elemento, propiedad)) {
            fila.push(elemento[propiedad]);
          }
        }

        // Agregar la fila al array de arrays
        arrayDeArrays.push(fila);
      }
    }

    return arrayDeArrays;
  };

  // Convertir el objeto de entrada en un array de arrays
  const arrayDeArrays = convertirDatosAArray(datos);

  // Función para agregar encabezados a cada conjunto de datos
  const agregarEncabezados = (arrayDeArrays, datos) => {
    let nuevoArrayDeArrays = [];

    // Iterar sobre cada conjunto de datos
    for (let i = 0; i < arrayDeArrays.length; i++) {
      const conjunto = arrayDeArrays[i];
      const encabezados = Object.keys(datos[i]); // Obtener los encabezados del campo Concepto

      // Agregar los encabezados como la primera fila del conjunto de datos
      nuevoArrayDeArrays.push(encabezados);
      nuevoArrayDeArrays.push(conjunto);
    }

    return nuevoArrayDeArrays;
  };

  // Convertir el array de arrays en una hoja de cálculo de Excel
  const descargarExcel = () => {
    const ws = XLSX.utils.aoa_to_sheet(agregarEncabezados(arrayDeArrays, datos));
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Datos");
    XLSX.writeFile(wb, "datos.xlsx");
  };
descargarExcel();
  

}
