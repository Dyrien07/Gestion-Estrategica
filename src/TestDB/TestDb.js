import React, { useState } from 'react';

const TableHeaders = [
  { name: "Conceptos de Facturacion" },
  { name: "UM" },
  { name: "Precio Estimado (Base)" },
  { name: "Volumen Fcast" },
];

const daysOfWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

const months = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
  "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const weeks = ["Semana 1", "Semana 2", "Semana 3", "Semana 4", "Semana 5"];

const generateRandomData = () => {
  const data = [
    { name: "Facturacion Fijos Inmobiliarios 511", daysData: generateRandomDaysData() },
    { name: "Facturacion Fijos Operativos 511", daysData: generateRandomDaysData() },
    { name: "Bultos 511", daysData: generateRandomDaysData() },
    { name: "Bultos Tranf.511", daysData: generateRandomDaysData() },
    { name: "Bultos Firo", daysData: generateRandomDaysData() },
    { name: "Bultos Congelados", daysData: generateRandomDaysData() },
    { name: "Bultos Frutas y verduras", daysData: generateRandomDaysData() },
    { name: "Devolucion Vacios", daysData: generateRandomDaysData() },
    { name: "Devolucion a Picking", daysData: generateRandomDaysData() },
    { name: "Formatos Redespachados", daysData: generateRandomDaysData() },
    { name: "Control Certificado 511", daysData: generateRandomDaysData() },
    { name: "Comedor", daysData: generateRandomDaysData() },
    { name: "Continuidad Sabado(Fijo)", daysData: generateRandomDaysData() },
    { name: "Apertura Domingo(fijo)", daysData: generateRandomDaysData() },
    { name: "Apertura Feriado(fijo)", daysData: generateRandomDaysData() },
    { name: "Variable Sabado", daysData: generateRandomDaysData() },
    { name: "Variable Domingo", daysData: generateRandomDaysData() },
    { name: "Variable Feriado", daysData: generateRandomDaysData() },
    { name: "Variable Semana", daysData: generateRandomDaysData() },
    { name: "Personal Transporte", daysData: generateRandomDaysData() },
    { name: "Auditores De Cargar", daysData: generateRandomDaysData() },
    { name: "Digitalizacion Albaranes Fijo Mensual", daysData: generateRandomDaysData() },
    { name: "Digitalizacion Albaranes Variable Automatico", daysData: generateRandomDaysData() },
    { name: "Digitalizacion Albaranes Variable Mensual", daysData: generateRandomDaysData() },
    { name: "Gastos a Recuperar", daysData: generateRandomDaysData() },
    { name: "Recupero Bono Camioneros", daysData: generateRandomDaysData() }
  ];
  return data;
};

const generateRandomDaysData = () => {
  const daysData = [];
  for (let j = 0; j < 365; j++) {
    daysData.push(Math.random() * 100); // Genera datos aleatorios para cada día
  }
  return daysData;
};

const year = new Date().getFullYear();

const TableData = generateRandomData();


export const Headers = () => {
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedWeek, setSelectedWeek] = useState(0);

  const filteredData = TableData.map((item) => ({
    ...item,
    daysData: item.daysData.slice(selectedMonth * daysOfWeek.length + selectedWeek * 7, selectedMonth * daysOfWeek.length + (selectedWeek + 1) * 7)
  }));

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3">
          <select className="form-control" value={selectedMonth} onChange={(e) => setSelectedMonth(Number(e.target.value))}>
            {months.map((month, index) => (
              <option key={index} value={index}>{month}</option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <select className="form-control" value={selectedWeek} onChange={(e) => setSelectedWeek(Number(e.target.value))}>
            {weeks.map((week, index) => (
              <option key={index} value={index}>{week}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                {TableHeaders.map((header) => (
                  <th scope="col" key={header.name}>{header.name}</th>
                ))}
                {daysOfWeek.map((day) => (
                  <th scope="col" key={day}>{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((rowData, index) => (
                <tr key={index}>
                  <td>{rowData.name}</td>
                  {rowData.daysData.map((dayData, dayIndex) => (
                    <td key={dayIndex}>{dayData.toFixed(2)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
