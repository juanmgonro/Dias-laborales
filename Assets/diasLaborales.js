/** Funcion para delimitar numero de dias
 * 
 * @param {*} anioComprobacion año obtenido en input
 * @param {*} mesComprobacion mes obtenido en input
 * @returns numero de dias por mes
 */
const comprobacionDias = (anioComprobacion, mesComprobacion) => {
    let numeroDias = 0;
    switch (mesComprobacion) {
        case 0: numeroDias = 31; break;
        case 1: anioComprobacion % 4 == 0 ? numeroDias = 29 : numeroDias = 28; break;
        case 2: numeroDias = 31; break;
        case 3: numeroDias = 30; break;
        case 4: numeroDias = 31; break;
        case 5: numeroDias = 30; break;
        case 6: numeroDias = 31; break;
        case 7: numeroDias = 31; break;
        case 8: numeroDias = 30; break;
        case 9: numeroDias = 31; break;
        case 10: numeroDias = 30; break;
        case 11: numeroDias = 31; break;
    }
    return numeroDias;
}
/** Obtener dia de la semana
 * 
 * @returns numero de dia de la semana
 */
const obtenerDia = () => {
    let anio = parseInt(document.getElementById("anio").value);
    let mes = parseInt(document.getElementById("meses").value);
    let numeroDiasMes = comprobacionDias(anio, mes);
    document.getElementById("dia").setAttribute("max", numeroDiasMes);
    let dia = document.getElementById("dia").value;
    if(dia<=numeroDiasMes){
        let obtencionFecha = new Date(anio, mes, dia);
        return numDiaSemana = obtencionFecha.getDay();
    }
    else {
        alert("Elegiste un numero de dia que no coincide con el mes solicitado");
    }
}

/**
 * 
 * @param {*} numDia valor numerico de dia de la semana
 * @returns string con dia de la semana y si es laboral
 */
const obtenerDiaLaboral = (numDia) => {
    let diaSemLab = "";
    switch (numDia) {
        case 1: if (numDia === 1) diaSemLab = "Lunes";
        case 2: if (numDia === 2) diaSemLab = "Martes";
        case 3: if (numDia === 3) diaSemLab = "Miercoles";
        case 4: if (numDia === 4) diaSemLab = "Jueves";
        case 5: if (numDia === 5) diaSemLab = "Viernes";
        diaSemLab += ", dia laborable";
            break;
        case 6: if (numDia === 6) diaSemLab = "Sabado";
        case 0: if (numDia === 0) diaSemLab = "Domingo";
        diaSemLab += ", dia no laborable"
            break;
    }
    return diaSemLab;
}
/**
 * Funcion principal donde se llaman demas funciones.
 */
function calculaFechaLaboral() {
    const numDia = obtenerDia();
    const diaLaboralSemanal = obtenerDiaLaboral(numDia);
    document.getElementById("diaLaboral").innerHTML = diaLaboralSemanal;
}