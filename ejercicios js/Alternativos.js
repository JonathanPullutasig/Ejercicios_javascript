// --------------------------------------ejercicio 1--------------------------------
// const btnCalcular4 = document.querySelectorAll(".btn-ca")[3];
console.log(btnCalcular1);
// const respu1 = document.querySelectorAll(".respuesta-p")[2];
function Datos ()
{
    let fechaSalida = new Date(document.getElementById("fechaSalida").value)
    let fechaLLegada = new Date(document.getElementById("fechaLlegada").value)
    if (fechaSalida >= fechaLLegada) {
        alert("La fecha de salida no puede ser mayor i igual que la fecha de llegada.")
        ValoresPredeterniados_4()
        return
    }
    let tiempoEnVuelo = parseFloat(document.getElementById("tiempo").value) * 60
    if (tiempoEnVuelo <= 0 ) {
        alert("El tiempo en vuelo no puede ser menor o igual a 0")
        document.getElementById("tiempo").value = 10
        return
    }
    let tiempoDeVuelo = TiempoEntreFechas(fechaSalida, fechaLLegada)
    document.getElementById("respuesta").innerHTML = SegundosToHorasMinutosSegundos(tiempoDeVuelo)
    document.getElementById("etapa").innerHTML = EtapaVuelo(tiempoEnVuelo, tiempoDeVuelo)
}

function TiempoEntreFechas (fechaSalida, fechaLLegada)
{
    var fechaSalida = fechaSalida.getTime()
    var fechaLLegada = fechaLLegada.getTime()
    return (fechaLLegada - fechaSalida) / 1000
}

function SegundosToHorasMinutosSegundos (segundos)
{
    var horas = Math.floor(segundos / 3600)
    horas = (horas < 10) ? '0' + horas : horas
    var minutos = Math.floor((segundos / 60) % 60)
    minutos = (minutos < 10) ? '0' + minutos : minutos
    var segundo = Math.floor(segundos % 60)
    segundo = (segundo < 10) ? '0' + segundo : segundo
    return horas + "hh" + minutos + "mm" + segundo + "ss"
}

function EtapaVuelo (tiempoEnVuelo, tiempoDeVuelo) {
    if (tiempoEnVuelo > 600) 
    {
        if (tiempoEnVuelo < tiempoDeVuelo - 15) 
        {
            return "Etapa de vuelo."
        }
        else
        {
            return "Etapa de aterrizaje."
        }
    }
    else
    {
        return "Etapa de despegue."
    }
}

function ValoresPredeterniados_4() {
    let salida = new Date()
    let llegada = new Date()
    llegada.setDate(salida.getDate() + 1)
    document.getElementById("fechaSalida").value = salida.toISOString().slice(0,16);
    document.getElementById("fechaLlegada").value = llegada.toISOString().slice(0,16);
}
// --------------------------------------ejercicio 2--------------------------------
const btnCalcular2 = document.querySelectorAll(".btn-ca")[4];
const respu2 = document.querySelectorAll(".respuesta-p")[3];
function Datos_5() {
    let a = document.getElementById("ax2").value
    let b = document.getElementById("bx").value
    let c = document.getElementById("c").value
    let raices = General(a, b, c)
    document.getElementById("x1").innerHTML = raices[0]
    document.getElementById("x2").innerHTML = raices[1]
}

function General (a, b, c) 
{
    let discrimiante = Math.sqrt(b ** 2 - 4 * a * c)
    let x1
    let x2
    if (discrimiante >= 0) 
    {
        x1 = (- b + discrimiante) / (2 * a)
        x2 = (- b - discrimiante) / (2 * a)
        return [x1.toFixed(4), x2.toFixed(4)]
    }
    else
    {
        alert("El discrimiante es menor a 0, no existe una solución para la función")
        return null
    }
}
// --------------------------------------ejercicio 3--------------------------------

// --------------------------------------ejercicio 4--------------------------------
