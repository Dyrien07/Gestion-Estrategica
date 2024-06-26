import axios from "axios"
import toast from "react-hot-toast"


 export const getHorasTxPersona = async(month, year)=>{
    try{
        let datos = await axios.get(`http://10.62.120.52:8084/api/facturacion/getHorasTxPersona?mes=${month}&anio=${year}`)
        return datos.data
    }catch(e){
        return []
    }
    
    

}
export const getHorasTxSector = async(month, year)=>{
    try{
        let datos = await axios.get(`http://10.62.120.52:8084/api/facturacion/getHorasTxS?mes=${month}&anio=${year}`)
        return datos.data
    }catch(e){
        toast("Fallo busqueda de datos")
    }
    
    

}
export const getHorasTxFuncion = async(month, year)=>{
    try{
        let datos = await axios.get(`http://10.62.120.52:8084/api/facturacion/getHorasTxF?mes=${month}&anio=${year}`)
        return datos.data
    }catch(e){
        toast("Fallo busqueda de datos")
    }
}

export const getHorasE50xP = async(month, year)=>{
    try{
        let datos = await axios.get(`http://10.62.120.52:8084/api/facturacion/getHorasE50xP?mes=${month}&anio=${year}`)
        return datos.data
    }catch(e){
        console.log(e.mesage)
    }
}

export const getHorasE50xF = async(month, year)=>{
    try{
        let datos = await axios.get(`http://10.62.120.52:8084/api/facturacion/getHorasE50xF?mes=${month}&anio=${year}`)
        return datos.data
    }catch(e){
        console.log(e.mesage)
    }
}

export const getHorasE50xS = async(month, year)=>{
    try{
        let datos = await axios.get(`http://10.62.120.52:8084/api/facturacion/getHorasE50xS?mes=${month}&anio=${year}`)
        return datos.data
    }catch(e){
        console.log(e.mesage)
    }
}
export const getHorasE100xP = async(month, year)=>{
    try{
        let datos = await axios.get(`http://10.62.120.52:8084/api/facturacion/getHorasE100xF?mes=${month}&anio=${year}`)
        return datos.data
    }catch(e){
        console.log(e.mesage)
    }
}

export const getHorasE100xF = async(month, year)=>{
    try{
        let datos = await axios.get(`http://10.62.120.52:8084/api/facturacion/getHorasE100xF?mes=${month}&anio=${year}`)
        return datos.data
    }catch(e){
        console.log(e.mesage)
    }
}
export const getHorasE100xS = async(month, year)=>{
    try{
        let datos = await axios.get(`http://10.62.120.52:8084/api/facturacion/getHorasE100xS?mes=${month}&anio=${year}`)
        return datos.data
    }catch(e){
        console.log(e.mesage)
    }
}

export const getHorasFC = async (month, year) => {
    try {
        let datos = await axios.get(`http://10.62.120.52:8084/api/facturacion/getFueraConvHS?mes=${month}&anio=${year}`)
        return datos.data
    }catch(e){
        console.log(e.mesage);
    }
}

export const getHorasDC = async (month, year) => {
    try {
        let datos = await axios.get(`http://10.62.120.52:8084/api/facturacion/getDentroConvHS?mes=${month}&anio=${year}`)
        return datos.data
    }catch(e){
        console.log(e.mesage);
    }
}

export const GetHorasDCYFC = async (month, year) => {
    try {
        let datos = await axios.get(`http://10.62.120.52:8084/api/facturacion/getTotalHS?mes=${month}&anio=${year}`)
        return datos.data
    }catch(e){
        console.log(e.mesage);
    }
}

export const getNoveadesxMes = async (month, year) => {
    try {
    let datos = await axios.post("http://10.62.120.52:8084/api/facturacion/novedadesxmes",{
            mes : month,
            anio : year
        })

        console.log(datos.data)
        return datos.data

    }catch(e) {

    }
}

export const getNoveadesxDia = async (month, year) => {
    try {
    let datos = await axios.post("http://10.62.120.52:8084/api/facturacion/novedadesxdia",{
            mes : month,
            anio : year
        })
        return datos.data

    }catch(e) {
console.log(e.mesage)
    }
}
