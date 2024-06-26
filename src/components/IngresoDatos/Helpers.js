import axios from "axios";
import { url } from "../../constants/constants";
import toast from "react-hot-toast";

export const SendData = async (
    concepto,
    fecha,
    dato,
    setloading,
    setConcepto,
    setFecha,
    setDato,
    precio_estimado,
    volfcast
) => {
    if (concepto === "" || concepto === "Seleccione el dato a cargar") {
        toast("Seleccione un concepto de facturacion para cargar");
        return;
    }
    if (dato === "") {
        toast("Ingrese el dato a cargar");
        return;
    }
    try {
        let datitos = {
            concepto,
            fecha,
            dato,
            precio_estimado,
            volfcast,
        };
        { /*

        if (
            concepto === "Tiendas Secos (511)" ||
            concepto === "Refrigerados" ||
            concepto === "Bultos Transf.511" ||
            concepto === "Bultos 504" ||
            concepto === "Bultos 504 (Navidad)" ||
            concepto === "Servicio Entrega Garantizada 511" ||
            concepto === "Servicio Entrega Garantizada Transf. 511" ||
            concepto === "Devolución a Picking 511" ||
            concepto === "Devolución a Picking 504"
        ) {
            datitos = { ...datitos, um: "Cajas" };
        } else if (
            concepto === "Servicio Entrega Garantizada Transf. 511" ||
            concepto === "Servicio Entrega Garantizada Transf. 511"
        ) {
            datitos = { ...datitos, um: "Bulto" };
        }
    */}

        setloading(true);
        let request = await axios.post(url, datitos);

        console.log(datitos);
        setloading(false);
        if (request === "ok") {
            toast.success("Se grabo correcetamente");
        } else {
            toast.error("Ocurrio un error en el  sistema");
        }
        setConcepto("");
        setFecha(new Date());
        setDato("");
    } catch (e) {
        console.log(e.message);
        setloading(false);
        toast.error("Ocurrio un error");
    }
};
