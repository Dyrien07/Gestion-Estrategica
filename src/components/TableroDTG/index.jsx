import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import "./style.css";
import { getConceptos } from "../../Funciones/funciones";
import { Toaster,toast } from "react-hot-toast";
import * as XLSX from 'xlsx';




const fecha = new Date();
const mes = fecha.getMonth();

const TableroDTG = () => {
    const [selectedMonth, setSelectedMonth] = useState(mes);
    const [datos, setDatos] = useState([]);
    const obtenerData = async () => {
        try {
            const result = await getConceptos(selectedMonth +1);
            console.log(result);
            setDatos(result);
         
        } catch (e) {
            console.log(e);
        }
    };

    const dayMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const Month = [
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



    const daysInSelectedMonth = dayMonth[selectedMonth];
    const dayHeaders = [];
    const dayHeadersVM = [];
    const monthHeader = selectedMonth +1

    for (let i = 1; i <= daysInSelectedMonth ; i++) {
        dayHeaders.push({
            field:    i.toString(),  
            headerName:  i +"/"+ parseInt(monthHeader)  ,
            width: 80,
            type: "number",
        });
    }

    for (let i = 1; i <= daysInSelectedMonth ; i++) {
        dayHeadersVM.push({
            field:  "volumen_ventas_dia" +i  ,
            headerName:  i +"/"+ parseInt(monthHeader)  ,
            width: 80,
            type: "number",
        });
    }

    const TableHeaders = [
        {
            field: "Concepto",
            headerName: "Conceptos de Facturacion",
            width: 300,
            type: "string",

        },
        { field: "UM", headerName: "UM", width: 100 },
        {
            field: "PrecioEstimado",
            headerName: "Precio Estimado(Base)",
            width: 200,
            type: "string",
        },
        { field: "VolumenFcast", headerName: "Volumen Fcast", width: 150 },
        ...dayHeaders,
        {
            field: "Vol_Acumulado",
            headerName: "Volumen Acumulado",
            width:300,
            type: "string",

        },
        {
            field: "VolumenEstimado",
            headerName: "Volumen Estimado",
            width:300,
            type: "string",
        },
        {
            field:"[Variacion(B/W)]",
            headerName: "Variacion[b/(w)]",
            width:300,
            type: "string",
        },
        {
            field:"VentasBrutas",
            headerName: "Ventas Brutas Fcast",
            width:300,
            type: "string",
        },
        ...dayHeadersVM,
        {
            field:"VentasBrutasAcc",
            headerName: "% Ventas Brutas Acumuladas",
            width:300,
            type: "string",
        },
        {
            field:"VentasBrutasEst",
            headerName: "% Ventas Brutas Estimadas",
            width:300,
            type: "string",
        },
        {
            field:"DiasPrc",
            headerName: "% Dias",
            width:100,
            type: "string",
        }

    ];


const Excel = () =>{
    if(datos.length === 0){
        toast.error("No hay datos")
    }else{

    
    const conceptos = datos.map(item => item.Concepto);

  const fechas = Object.keys(datos[0]).filter(key => key !== 'Concepto' && key !== 'id' && key !== 'Anio' && key !== 'Mes'
                                                     && key !== 'VolumenFcast' && key !== 'PrecioEstimado' && key !== 'VolumenEstimado'
                                                     && key !== 'Variacion(B/W)'); 
  const arrayDeArrays = [];

  arrayDeArrays.push(['Concepto', 'UM', 'PrecioEstimado', 'VolumenFcast', ...fechas]);

  for (const concepto of conceptos) {
    const datosConcepto = datos.find(item => item.Concepto === concepto);
    const fila = [concepto, datosConcepto.UM, datosConcepto.PrecioEstimado, datosConcepto.VolumenFcast];
    for (const fecha of fechas) {
      fila.push(datosConcepto[fecha] || '0'); 
    }
    arrayDeArrays.push(fila);
  }



  const ws = XLSX.utils.aoa_to_sheet(arrayDeArrays);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Datos ");
  XLSX.writeFile(wb, "datos" + Month[selectedMonth] +".xlsx");
}
}



    useEffect(() => {
        obtenerData()
    }, [selectedMonth]);

    return (
        <div className="container-fluid">
            <Toaster />
            <div className="row">
                <div className="col-md-3">
                    <select
                        className="form-control"
                        value={selectedMonth}
                        onChange={(e) =>
                            setSelectedMonth(Number(e.target.value))
                        }
                    >
                        {Month.map((month, index) => (
                            <option key={index} value={index}>
                                {month}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="row left">
                <div className="col-2" onClick={() =>Excel() }>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-file-arrow-down-fill"
                        viewBox="0 0 16 16"
                    >
                        <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8 5a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5A.5.5 0 0 1 8 5z" />
                    </svg>
                    <h6> Descargar Excel</h6>
                </div>
            </div>

            <Box sx={{ height: 600, width: "100%" }}>
                <DataGrid
                    rows={datos}
                    columns={TableHeaders}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 100,
                            },
                        },
                    }}
                    pageSizeOptions={[100]}
                />
            </Box>
        </div>
    );
};

export default TableroDTG;
