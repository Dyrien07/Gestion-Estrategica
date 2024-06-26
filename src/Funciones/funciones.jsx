import axios from "axios"
import { url } from "../constants/constants"
import toast from "react-hot-toast"


 export const getConceptos = async(month, year)=>{
    try{
        let datos = await axios.post("http://10.62.120.52:8084/api/facturacion/getInforme",{
            mes: month
        })
        return datos.data
    }catch(e){
        toast("Fallo busqueda de datos")
    }
    
    

}