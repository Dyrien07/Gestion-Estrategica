import React, { useState } from "react";
import "./style.css";
import { data } from "../../constants/constants";
import DatePicker from "react-datepicker";
import { SendData } from "./Helpers";
import dayjs from "dayjs";
import { Toaster } from "react-hot-toast";
import { Hourglass } from "react-loader-spinner";

import "react-datepicker/dist/react-datepicker.css";

const IngresoDatos = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [dato, setDato] = useState("");
    const [Concepto, setConcepto] = useState("");
    const [loading, setLoading] = useState(false);
    const [precio_estimado, setPrecio_estimado] = useState("");
    const [vol_fcast, setVol_fcast] = useState("");

    const test = dayjs(startDate);
    const fecha = test.$D + "/" + parseInt(test.$M + 1) + "/" + test.$y;

    return loading ? (
        <Hourglass />
    ) : (
        <div className="container-fluid">
            <div className="row center">
                <div className="col-lg-4">
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        value={Concepto}
                        onChange={(e) => setConcepto(e.target.value)}
                    >
                        <option defaultValue={""}>Seleccione el dato a cargar</option>
                        {data.map((option, index) => (
                            <option key={index} value={option.name}>{option.name}</option>
                        ))}
                    </select>
                </div>
                <div className="row center">
                    <div className="col-lg-4">
                        <div className="form-floating mb-3 margin10">
                            <input
                                type="number"
                                className="form-control"
                                id="floatingInput"
                                value={precio_estimado}
                                onChange={(e) =>
                                    setPrecio_estimado(e.target.value)
                                }
                            />
                            <label htmlFor="floatingInput">Precio Estimado</label>
                        </div>
                        <div className="form-floating">
                            <input
                                type="number"
                                className="form-control"
                                id="floatingPassword"
                                value={vol_fcast}
                                onChange={(e) => setVol_fcast(e.target.value)}
                            />
                            <label htmlFor="floatingPassword">Vol Fcast</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row center">
                <div className="col-lg-4">
                    <br />
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat={"dd/MM/yyyy"}
                        withPortal
                        todayButton={"hoy"}
                    />
                </div>
            </div>
            <br />
            <div className="row center">
                <Toaster />
                <div className="col-lg-4">
                    <div className="form-floating mb-3">
                        <input
                            type="number"
                            className="form-control"
                            id="floatingInput"
                            placeholder="Ingrese dato a cargar"
                            value={dato}
                            onChange={(e) => setDato(e.target.value)}
                        />
                        <label
                            onClick={() => SendData(Concepto, fecha, dato)}
                            htmlFor="floatingInput"
                        >
                            Valor a cargar
                        </label>
                        <br />
                        <button
                            className="btn btn-primary btn-primary"
                            onClick={() =>
                                SendData(
                                    Concepto,
                                    fecha,
                                    dato,
                                    setLoading,
                                    setConcepto,
                                    setStartDate,
                                    setDato,
                                    precio_estimado,
                                    vol_fcast
                                )
                            }
                        >
                            Cargar
                        </button>
                    </div>
                    {loading && (
                        <Hourglass
                            visible={loading}
                            height="500"
                            width="100%"
                            ariaLabel="hourglass-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            colors={["#306cce", "#72a1ed"]}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default IngresoDatos;
