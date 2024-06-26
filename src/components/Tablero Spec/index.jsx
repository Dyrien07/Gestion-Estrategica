import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { Toaster } from "react-hot-toast";
import {
    getHorasDC,
    getHorasE100xF,
    getHorasE100xP,
    getHorasE100xS,
    getHorasE50xF,
    getHorasE50xP,
    getHorasE50xS,
    getHorasFC,
    getHorasTxFuncion,
    getHorasTxPersona,
    getHorasTxSector,
    getNoveadesxDia,
    getNoveadesxMes,
} from "./Funciones";

const Spec = () => {
    const fecha = new Date();
    const mes = fecha.getMonth();

    const [selectedMonth, setSelectedMonth] = useState(mes);
    const [datos, setDatos] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState(0);
    const [TableHeaders, setTableHeaders] = useState([]); // Estado para almacenar los headers

    const Filtros = [
        "Horas Trabajadas por Persona", //0
        "Horas Trabajadas por Sector", //1
        "Horas Trabajadas por Funcion", //2
        "Horas Extras al 50 por Persona", //3
        "Horas Extras al 50 por Sector", //4
        "Horas Extras al 50 por Funcion", //5
        "Horas Extras al 100 por Persona", //6
        "Horas Extras al 100 por Sector", //7
        "Horas Extras al 100 por Funcion", //8
        "Horas Dentro de Convenio", //9
        "Horas Fueras de Convenio", //10
        "Horas por Dia", //11
        "Novedades por Dia", //12
        "Novedades por Mes", // 13
    ];

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
    const monthHeader = selectedMonth + 1;

    for (let i = 1; i <= daysInSelectedMonth; i++) {
        dayHeaders.push({
            field: i.toString(),
            headerName: i + "/" + parseInt(monthHeader),
            width: 80,
            type: "number",
        });
    }

    const onChangeFilter = () => {
        if (
            selectedFilter === 0 ||
            selectedFilter === 3 ||
            selectedFilter === 6
        ) {
            const headers = [
                {
                    field: "Nombre",
                    headerName: "Nombre",
                    width: 300,
                    type: "string",
                },

                ...dayHeaders,
            ];
            return headers;
        } else if (
            selectedFilter === 1 ||
            selectedFilter === 4 ||
            selectedFilter === 7
        ) {
            const headers = [
                {
                    field: "Sector",
                    headerName: "Sector",
                    width: 200,
                    type: "string",
                },

                ...dayHeaders,
            ];
            return headers;
        } else if (
            selectedFilter === 2 ||
            selectedFilter === 5 ||
            selectedFilter === 8
        ) {
            const headers = [
                {
                    field: "Funcion",
                    headerName: "Funcion",
                    width: 300,
                    type: "string",
                },

                ...dayHeaders,
            ];

            return headers;
        } else if (
            selectedFilter === 9 ||
            selectedFilter === 10 ||
            selectedFilter === 11
        ) {
            const headers = [
                {
                    field: "Personas",
                    headerName: "Cantidad de Personas",
                    type: "string",
                    flex: 1,
                },
                {
                    field: "HS",
                    headerName: "Horas Normales",
                    flex: 1,
                },
                {
                    field: "Horas50",
                    headerName: "Horas al 50",
                    type: "string",
                    flex: 1,
                },
                {
                    field: "Horas100",
                    headerName: "Horas al 100",
                    type: "string",
                    flex: 1,
                },
                {
                    field: "dia",
                    headerName: "Dia",
                    flex: 1,
                },
            ];
            return headers;
        } else if (selectedFilter === 13) {
            const headers = [
                {
                    field: "Nombre",
                    headerName: "Nombre",
                    width:300
                },
                {
                    field: "CodEmpresa",
                    headerName: "Empresa",
                    width: 150,
                },
                {
                    field: "funcion",
                    headerName: "Funcion",
                    width: 150,
                },
                {
                    field: "sector",
                    headerName: "Sector",
                    width: 150,
                },
                
                {
                    field: "HsNormales",
                    headerName: "Horas Normales",
                    width: 140,
                },
                {
                    field: "Hs50",
                    headerName: "Horas 50",
                    width: 140,
                },
                {
                    field: "Hs100",
                    headerName: "Horas 100",
                    width: 140,
                },
                {
                    field: "vacaciones",
                    headerName: "Vacaciones",
                    width: 140,
                },
                {
                    field: "Colaboracion_a_otros_CD",
                    headerName: "Colaboraciones",
                    width: 180
                },
                {
                    field: "Fallecimiento",
                    headerName: "Fallecimiento",
                    width:140

                },
                {
                    field: "Suspension",
                    headerName: "Suspension",
                    width:140
                },
                {
                    field: "Donacion_de_sangre",
                    headerName: "Donacion Sangre",
                    width:140
                },
                {
                    field: "Franco_Compensatorio",
                    headerName: "Franco Compensatorio",
                    width: 180
                },
                {
                    field: "Licencia_Judicial",
                    headerName: "Licencia Judicial",
                    width:140
                },
                {
                    field: "Mudanza",
                    headerName: "Mudanza",
                    width:140
                },
                {
                    field: "Licencia_ART",
                    headerName: "Licencia ART",
                    width:140
                },
                {
                    field: "Enfermedad",
                    headerName: "Enfermedad",
                    width:140
                },
                {
                    field: "Permiso_Gremial",
                    headerName: "Permiso Gremial",
                    width:140
                },
                {
                    field: "presentes",
                    headerName: "Presentes",
                    width:140
                },
            ];
            return headers;
        }else if(selectedFilter == 12){
            const headers = [
                {
                    field: "Nombre",
                    headerName: "Nombre",
                    width:300
                },
                {
                    field: "CodEmpresa",
                    headerName: "Empresa",
                    width: 150,
                },
                {
                    field: "funcion",
                    headerName: "Funcion",
                    width: 150,
                },
                {
                    field: "sector",
                    headerName: "Sector",
                    width: 150,
                },
                {
                    field: "dia",
                    headerName: "Dia",
                    width: 150,
                },
                {
                    field: "HsNormales",
                    headerName: "Horas Normales",
                    width: 140,
                },
                {
                    field: "Hs50",
                    headerName: "Horas 50",
                    width: 140,
                },
                {
                    field: "Hs100",
                    headerName: "Horas 100",
                    width: 140,
                },
                {
                    field: "vacaciones",
                    headerName: "Vacaciones",
                    width: 140,
                },
                {
                    field: "Colaboracion_a_otros_CD",
                    headerName: "Colaboraciones",
                    width: 180
                },
                {
                    field: "Fallecimiento",
                    headerName: "Fallecimiento",
                    width:140

                },
                {
                    field: "Suspension",
                    headerName: "Suspension",
                    width:140
                },
                {
                    field: "Donacion_de_sangre",
                    headerName: "Donacion Sangre",
                    width:140
                },
                {
                    field: "Franco_Compensatorio",
                    headerName: "Franco Compensatorio",
                    width: 180
                },
                {
                    field: "Licencia_Judicial",
                    headerName: "Licencia Judicial",
                    width:140
                },
                {
                    field: "Mudanza",
                    headerName: "Mudanza",
                    width:140
                },
                {
                    field: "Licencia_ART",
                    headerName: "Licencia ART",
                    width:140
                },
                {
                    field: "Enfermedad",
                    headerName: "Enfermedad",
                    width:140
                },
                {
                    field: "Permiso_Gremial",
                    headerName: "Permiso Gremial",
                    width:140
                },
                {
                    field: "presentes",
                    headerName: "Presentes",
                    width:140
                },
            ];
            return headers;
        }
    };

    const getData = async () => {
        if (selectedFilter === 0) {
            let spec = await getHorasTxPersona(selectedMonth + 1, 2024);
            setDatos(spec);
        } else if (selectedFilter === 1) {
            let spec = await getHorasTxSector(selectedMonth + 1, 2024);
            console.log(spec);
            setDatos(spec);
        } else if (selectedFilter === 2) {
            let spec = await getHorasTxFuncion(selectedMonth + 1, 2024);
            console.log(spec);
            setDatos(spec);
        } else if (selectedFilter === 3) {
            let spec = await getHorasE50xP(selectedMonth + 1, 2024);
            setDatos(spec);
        } else if (selectedFilter === 4) {
            let spec = await getHorasE50xS(selectedMonth + 1, 2024);
            setDatos(spec);
        } else if (selectedFilter === 5) {
            let spec = await getHorasE50xF(selectedMonth + 1, 2024);
            setDatos(spec);
        } else if (selectedFilter === 6) {
            let spec = await getHorasE100xP(selectedMonth + 1, 2024);
            setDatos(spec);
        } else if (selectedFilter === 7) {
            let spec = await getHorasE100xS(selectedMonth + 1, 2024);
            setDatos(spec);
        } else if (selectedFilter === 8) {
            let spec = await getHorasE100xF(selectedMonth + 1, 2024);
            setDatos(spec);
        } else if (selectedFilter === 10) {
            let spec = await getHorasFC(selectedMonth + 1, 2024);
            setDatos(spec);
        } else if (selectedFilter === 9) {
            let spec = await getHorasDC(selectedMonth + 1, 2024);
            setDatos(spec);
        }else if (selectedFilter === 13){
            let spec = await getNoveadesxMes(selectedMonth + 1,2024)
            setDatos(spec);
        }else if (selectedFilter === 12){
            let spec = await getNoveadesxDia(selectedMonth + 1,2024);
            setDatos(spec);
        }
    };

    useEffect(() => {
        const newTableHeaders = onChangeFilter();
        if (newTableHeaders) {
            setTableHeaders(newTableHeaders);
        }

        const dayHeaders = [];
        const daysInSelectedMonth = dayMonth[selectedMonth];
        const monthHeader = selectedMonth + 1;

        for (let i = 1; i <= daysInSelectedMonth; i++) {
            dayHeaders.push({
                field: i.toString(),
                headerName: i + "/" + parseInt(monthHeader),
                width: 80,
                type: "number",
            });
        }
        getData();
    }, [selectedFilter, selectedMonth]);

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
                <div className="col-md-3">
                    <select
                        className="form-control"
                        value={selectedFilter}
                        onChange={(e) =>
                            setSelectedFilter(Number(e.target.value))
                        }
                    >
                        {Filtros.map((filtro, index) => (
                            <option key={index} value={index}>
                                {filtro}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        height: 400,
                        width: "100%",
                        justifyContent: "center",
                    }}
                >
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
                        pageSizeOptions={[50]}
                        
                    />
                </Box>
            </div>
        </div>
    );
};

export default Spec;
