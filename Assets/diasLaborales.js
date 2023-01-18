function calculaFecha(){
    
    let dia = document.getElementById("dia").value;
    let anio = document.getElementById("anio").value;
    let mes = document.getElementById("meses").value;
    const meses =["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"]
    let numMes= meses.indexOf(mes);
    let obtencionFecha = new Date (anio, numMes, dia);
    console.log(obtencionFecha);
    let numDiaSemana = obtencionFecha.getDay();

    mostrarResultado(numDiaSemana)
    
    console.log(`Dia: ${dia} Mes: ${mes},${numMes} Año: ${anio} Dia semanal ${numDiaSemana}`);
    console.log(typeof(numDiaSemana));
}

const mostrarResultado = (numDia) =>{
    let diasLaborales="";
    switch(numDia){
        case 1: if(numDia === 1) diasLaborales = "Lunes";
        case 2: if(numDia === 2) diasLaborales = "Martes";
        case 3: if(numDia === 3) diasLaborales = "Miercoles";
        case 4: if(numDia === 4) diasLaborales = "Jueves";
        case 5: if(numDia === 5) diasLaborales = "Viernes";
        diasLaborales+=", dia laborable";
        break;
        case 6: if(numDia === 6) diasLaborales = "Sabado";
        case 0: if(numDia === 0) diasLaborales = "Domingo";
        diasLaborales+=", dia no laborable"
        break;
    }
    document.getElementById("diaLaboral").innerHTML=diasLaborales;
}