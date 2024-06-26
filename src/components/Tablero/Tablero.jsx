import React, { useState } from "react";

const TableHeaders = [
    { name: "Conceptos de Facturacion" },
    { name: "UM" },
    { name: "Precio Estimado (Base)" },
    { name: "Volumen Fcast" },
];

const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];

const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const data = [
    {
        name: "Facturacion Fijos Inmobiliarios 511",
        um: "m",
        precio_estimado: 200,
        volumen: 21,
        a1: 23,
        a2: 543,
        a3: 45,
        a4: 324,
        a5: 45,
        a6: 345,
        a7: 7865,
        a8: 5234,
        a9: 345,
        a10: null,
        a11: null,
        a12: 123,
        a13: 321,
        a14: 43,
        a15: 1235,
        a16: 15,
        a17: null,
        a18: 238,
        a19: 13247,
        a20: 231,
        a21: null,
        a22: 8327,
        a23: 34,
        a24: 2348,
        a25: 2048,
        a26: 213,
        a27: 2837,
        a28: 938,
        a29: 324,
        a30: 234,
        a31: 133,
    },
    {
        name: "valor a",
        um: "m",
        precio_estimado: 200,
        volumen: 21,
        a1: 23,
        a2: 543,
        a3: 45,
        a4: 324,
        a5: 45,
        a6: 345,
        a7: 7865,
        a8: 5234,
        a9: 345,
        a10: null,
        a11: null,
        a12: 123,
        a13: 321,
        a14: 43,
        a15: 1235,
        a16: 15,
        a17: null,
        a18: 238,
        a19: 13247,
        a20: 231,
        a21: null,
        a22: 8327,
        a23: 34,
        a24: 2348,
        a25: 2048,
        a26: 213,
        a27: 2837,
        a28: 938,
        a29: 324,
        a30: 234,
        a31: 133,
    },
    {
        name: "valor a",
        um: "m",
        precio_estimado: 200,
        volumen: 21,
        a1: 23,
        a2: 543,
        a3: 45,
        a4: 324,
        a5: 45,
        a6: 345,
        a7: 7865,
        a8: 5234,
        a9: 345,
        a10: null,
        a11: null,
        a12: 123,
        a13: 321,
        a14: 43,
        a15: 1235,
        a16: 15,
        a17: null,
        a18: 238,
        a19: 13247,
        a20: 231,
        a21: null,
        a22: 8327,
        a23: 34,
        a24: 2348,
        a25: 2048,
        a26: 213,
        a27: 2837,
        a28: 938,
        a29: 324,
        a30: 234,
        a31: 133,
    },
    {
        name: "valor a",
        um: "m",
        precio_estimado: 200,
        volumen: 21,
        a1: 23,
        a2: 543,
        a3: 45,
        a4: 324,
        a5: 45,
        a6: 345,
        a7: 7865,
        a8: 5234,
        a9: 345,
        a10: null,
        a11: null,
        a12: 123,
        a13: 321,
        a14: 43,
        a15: 1235,
        a16: 15,
        a17: null,
        a18: 238,
        a19: 13247,
        a20: 231,
        a21: null,
        a22: 8327,
        a23: 34,
        a24: 2348,
        a25: 2048,
        a26: 213,
        a27: 2837,
        a28: 938,
        a29: 324,
        a30: 234,
        a31: 133,
    },
    {
        name: "valor a",
        um: "m",
        precio_estimado: 200,
        volumen: 21,
        a1: 23,
        a2: 543,
        a3: 45,
        a4: 324,
        a5: 45,
        a6: 345,
        a7: 7865,
        a8: 5234,
        a9: 345,
        a10: null,
        a11: null,
        a12: 123,
        a13: 321,
        a14: 43,
        a15: 1235,
        a16: 15,
        a17: null,
        a18: 238,
        a19: 13247,
        a20: 231,
        a21: null,
        a22: 8327,
        a23: 34,
        a24: 2348,
        a25: 2048,
        a26: 213,
        a27: 2837,
        a28: 938,
        a29: 324,
        a30: 234,
        a31: 133,
    },
    {
        name: "valor a",
        um: "m",
        precio_estimado: 200,
        volumen: 21,
        a1: 23,
        a2: 543,
        a3: 45,
        a4: 324,
        a5: 45,
        a6: 345,
        a7: 7865,
        a8: 5234,
        a9: 345,
        a10: null,
        a11: null,
        a12: 123,
        a13: 321,
        a14: 43,
        a15: 1235,
        a16: 15,
        a17: null,
        a18: 238,
        a19: 13247,
        a20: 231,
        a21: null,
        a22: 8327,
        a23: 34,
        a24: 2348,
        a25: 2048,
        a26: 213,
        a27: 2837,
        a28: 938,
        a29: 324,
        a30: 234,
        a31: 133,
    },
];

const TdValue = (data) => {
    const data2 = data.data;
    let object = [];
    for(const property in data2){
        object.push(data2[property]);
    }
    return(
        <React.Fragment>
            {object.map(obj=><td>{obj}</td>)}
        </React.Fragment>
    )
}

export const Tablero = () => {
    const [selectedMonth, setSelectedMonth] = useState(0);

    const daysInSelectedMonth = daysInMonth[selectedMonth];

    return (
        <div className="container-fluid mt-4">
            <div className="row">
                <div className="col-md-3">
                    <select
                        className="form-control"
                        value={selectedMonth}
                        onChange={(e) =>
                            setSelectedMonth(Number(e.target.value))
                        }
                    >
                        {months.map((month, index) => (
                            <option key={index} value={index}>
                                {month}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col  table-resposive">
                    <table className="table table-bordered table-hover">
                        <thead className="table-dark">
                            <tr>
                                {TableHeaders.map((header, index) => (
                                    <th key={index}>{header.name}</th>
                                ))}
                                {Array.from({
                                    length: daysInSelectedMonth,
                                }).map((_, dayIndex) => (
                                    <th key={dayIndex}>{dayIndex + 1}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((d, index) => {
                                return (
                                    <React.Fragment>
                                        <tr>
                                            <TdValue data={d}/>
                                        </tr>
                                    </React.Fragment>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
