// --------------------------------------ejercicio 1--------------------------------

const PadLeft = (value, length) => {
  return value.toString().length < length
    ? PadLeft("0" + value, length)
    : value;
};

function Datos() {
  let altura = document.getElementById("altura").value;
  let proyeccion = document.getElementById("proyeccion").value;
  if (ValidarAlturaProyeccion(altura, proyeccion)) {
    let angulo = CalcAngulo(altura, proyeccion);
    document.getElementById("angulo").innerHTML = AnguloHorasMinutos(angulo);
    document.getElementById("hora").innerHTML = AnguloToHora(angulo);
  }
}

const ValidarAlturaProyeccion = (altura, proyeccion) => {
  if (proyeccion < 0) {
    document.getElementById("proyeccion").value = "0";
    alert("No se puede ingresar valores negativos");
    return false;
  }
  if (proyeccion > 1000000) {
    document.getElementById("proyeccion").value = "1000000";
    alert("No se puede ingresar mayores a 1 millón");
    return false;
  }
  if (altura < 1) {
    document.getElementById("altura").value = "1";
    alert("La altura no puede ser 0");
    return false;
  }
  if (altura > 1000000) {
    document.getElementById("altura").value = "1000000";
    alert("No se puede ingresar mayores a 1 millón");
    return false;
  }
  return true;
};

const AnguloHorasMinutos = (grados) => {
  let minutos = (grados - parseInt(grados)) * 60;
  let segundos = (minutos - parseInt(minutos)) * 60;
  return (
    Math.trunc(grados) +
    "° " +
    PadLeft(Math.trunc(minutos), 2) +
    "' " +
    PadLeft(Math.trunc(segundos), 2) +
    "''"
  );
};

const AnguloToHora = (angulo) => {
  var hora = document.getElementById("este").checked
    ? 6 + angulo / 15
    : 18 - angulo / 15;
  var minutos = (hora - parseInt(hora)) * 60;
  var segundos = (minutos - parseInt(minutos)) * 60;
  return (
    PadLeft(Math.trunc(hora), 2) +
    ":" +
    PadLeft(Math.trunc(minutos), 2) +
    "' " +
    PadLeft(Math.trunc(segundos), 2) +
    "''"
  );
};

const CalcAngulo = (altura, base) => {
  return Math.atan(altura / base) * (180 / Math.PI);
};

// --------------------------------------ejercicio 2--------------------------------
const btnCalcular2 = document.querySelectorAll(".btn-ca")[1];
const respu2 = document.querySelectorAll(".respuesta-p")[0];
btnCalcular2.addEventListener("click", () => {
  const input1_2 = document.querySelector("#eje2").value;
  let signo = input1_2 >= 0 ? true : false;
  let parteFra = input1_2 % 1;
  let resultado = (input1_2 - (input1_2 - parteFra)).toFixed(2);
  respu2.innerHTML = signo ? parseFloat(resultado) : 1 + parseFloat(resultado);
});

// --------------------------------------ejercicio 3--------------------------------
const btnCalcular3 = document.querySelectorAll(".btn-ca")[2];
// console.log(btnCalcular3);
const respu3 = document.querySelectorAll(".respuesta-p")[1];
btnCalcular3.addEventListener("click", () => {
  let num1 = document.querySelector("#eje3_1").value.toString();
  let num2 = document.querySelector("#eje3_2").value.toString();
  let num3 = document.querySelector("#eje3_3").value.toString();
  let num4 = document.querySelector("#eje3_4").value.toString();
  let num5 = document.querySelector("#eje3_5").value.toString();

  respu3.innerHTML = num1[0] + num2[1] + num3[2] + num4[3] + num5[4];
});

// ------------------------ejercicio 4---------------------------
// console.log(btnCalcular1);
// const respu1 = document.querySelectorAll(".respuesta-p")[2];
function Datos_4() {
  let fechaSalida = new Date(document.getElementById("fechaSalida").value);
  let fechaLLegada = new Date(document.getElementById("fechaLlegada").value);
  if (fechaSalida >= fechaLLegada) {
    alert(
      "La fecha de salida no puede ser mayor i igual que la fecha de llegada."
    );
    ValoresPredeterniados_4();
    return;
  }
  let tiempoEnVuelo = parseFloat(document.getElementById("tiempo").value) * 60;
  if (tiempoEnVuelo <= 0) {
    alert("El tiempo en vuelo no puede ser menor o igual a 0");
    document.getElementById("tiempo").value = 10;
    return;
  }
  let tiempoDeVuelo = TiempoEntreFechas(fechaSalida, fechaLLegada);
  document.getElementById("respuesta").innerHTML =
    SegundosToHorasMinutosSegundos(tiempoDeVuelo);
  document.getElementById("etapa").innerHTML = EtapaVuelo(
    tiempoEnVuelo,
    tiempoDeVuelo
  );
}

function TiempoEntreFechas(fechaSalida, fechaLLegada) {
  var fechaSalida = fechaSalida.getTime();
  var fechaLLegada = fechaLLegada.getTime();
  return (fechaLLegada - fechaSalida) / 1000;
}

function SegundosToHorasMinutosSegundos(segundos) {
  var horas = Math.floor(segundos / 3600);
  horas = horas < 10 ? "0" + horas : horas;
  var minutos = Math.floor((segundos / 60) % 60);
  minutos = minutos < 10 ? "0" + minutos : minutos;
  var segundo = Math.floor(segundos % 60);
  segundo = segundo < 10 ? "0" + segundo : segundo;
  return horas + "hh" + minutos + "mm" + segundo + "ss";
}

function EtapaVuelo(tiempoEnVuelo, tiempoDeVuelo) {
  if (tiempoEnVuelo > 600) {
    if (tiempoEnVuelo < tiempoDeVuelo - 15) {
      return "Etapa de vuelo.";
    } else {
      return "Etapa de aterrizaje.";
    }
  } else {
    return "Etapa de despegue.";
  }
}

function ValoresPredeterniados_4() {
  let salida = new Date();
  let llegada = new Date();
  llegada.setDate(salida.getDate() + 1);
  document.getElementById("fechaSalida").value = salida
    .toISOString()
    .slice(0, 16);
  document.getElementById("fechaLlegada").value = llegada
    .toISOString()
    .slice(0, 16);
}

// ------------------------ejercicio 5---------------------------
function Datos_5() {
  let a = document.getElementById("ax2").value;
  let b = document.getElementById("bx").value;
  let c = document.getElementById("c").value;
  let raices = General(a, b, c);
  document.getElementById("x1").innerHTML = raices[0];
  document.getElementById("x2").innerHTML = raices[1];
}

function General(a, b, c) {
  let discrimiante = Math.sqrt(b ** 2 - 4 * a * c);
  let x1;
  let x2;
  if (discrimiante >= 0) {
    x1 = (-b + discrimiante) / (2 * a);
    x2 = (-b - discrimiante) / (2 * a);
    return [x1.toFixed(4), x2.toFixed(4)];
  } else {
    alert(
      "El discrimiante es menor a 0, no existe una solución para la función"
    );
    return null;
  }
}

// ------------------------ejercicio 6---------------------------
function Datos_6() {
  var kilometros = document.getElementById("kilometraje").value;
  var pago = CalculoPago(kilometros);
  document.getElementById("pago").innerHTML = "$ " + pago;
  document.getElementById("impuesto").innerHTML = "$ " + pago * 0.2;
}

function CalculoPago(kilometros) {
  suma = 300000;
  if (kilometros <= 1000 && kilometros > 300) {
    suma += (kilometros - 300) * 15000;
  }
  if (kilometros > 1000) {
    suma += (kilometros - 1000) * 10000;
  }
  return suma;
}
// ------------------------ejercicio 7---------------------------
function Datos_7() {
  var fechaNacimento = new Date(
    Date.parse(document.getElementById("fecha").value)
  );
  document.getElementById("edad").innerHTML =
    CalcularEdad(fechaNacimento).toString();
}

function CalcularEdad(fecha) {
  var hoy = new Date();
  var cumpleanos = new Date(fecha);
  var edad = hoy.getFullYear() - cumpleanos.getFullYear();
  var m = hoy.getMonth() - cumpleanos.getMonth();
  if (m < 0 || (m === 0 && hoy.getDate() <= cumpleanos.getDate())) {
    edad--;
  }

  return edad;
}

function ValoresPredeterniados_7() {
  let fecha = new Date();
  fecha.setFullYear(fecha.getFullYear() - 18);
  document.getElementById("fecha").value = fecha.toISOString().slice(0, 10);
}
// ------------------------ejercicio 8---------------------------
var contadorg = 1;
var precioFijog = 1.25;
var dineroRecuadadog = 0;
var precioPagarg = 0;
var auxMayorg = 0;

function gasolineras() {
    var litroVehiculog = litroVehiculog = document.formularioREP_1.txtLitro.value;
    var numeroLitrosDisponibleg = numeroLitrosDisponibleg = document.formularioREP_1.txtCantidadLitro.value;


        if (numeroLitrosDisponibleg >= 0) {
            numeroLitrosDisponibleg = numeroLitrosDisponibleg - litroVehiculog;
            contadorg += 1;
            precioPagarg = precioFijog * litroVehiculog;
            dineroRecuadadog =dineroRecuadadog+precioPagarg;
            document.formularioREP_1.txtDineroObtenido.value = dineroRecuadadog;
            document.formularioREP_1.txtCantidadLitro.value = numeroLitrosDisponibleg;
            document.formularioREP_1.txtCantidadGasolina.value = vehiculoPelucon(litroVehiculog);
            document.formularioREP_1.txtContador.value = contadorg;
        } 
        else 
        {
            alert("Se ha terminado la gasolina");
        };


};

function vehiculoPelucon(litroVehiculog) {
    if (litroVehiculog >= auxMayorg) {
        auxMayorg = litroVehiculog;
    }
    return auxMayorg;
}
// ------------------------ejercicio 9---------------------------
const numero = document.getElementById("numero");
const perfecto = document.getElementById("perfecto");
const capicua = document.getElementById("capicua");
const factorial = document.getElementById("factorial");
const factorion = document.getElementById("factorion");
const cifras = document.getElementById("cifras");

function NumeroPerfecto(n) {
  n = parseFloat(n);
  let suma = 1;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      suma += i;
    }
  }
  return suma === n ? "Si" : "No";
}

function NumeroCapicua(n) {
  let der = n.length - 1,
    izq = 0,
    medio = n.length / 2;
  while (izq < medio) {
    if (n[izq] !== n[der]) return "No";
    izq++;
    der--;
  }
  return "Si";
}

function NumeroFactorial(n) {
  return n <= 1 ? 1 : n * NumeroFactorial(n - 1);
}

function NumeroFactorion(n) {
  let suma = 0;
  for (let i = 0; i < n.length; i++) {
    suma += NumeroFactorial(parseFloat(n[i]));
  }
  return suma === parseFloat(n) ? "Es un factorión" : "No es un fatorión";
}

function NumeroCifras(n) {
  return Math.abs(parseFloat(n)).toString().length;
}

function MostrarResutados() {
  perfecto.innerHTML = NumeroPerfecto(numero.value);
  capicua.innerHTML = NumeroCapicua(numero.value);
  factorial.innerHTML = NumeroFactorial(parseFloat(numero.value));
  factorion.innerHTML = NumeroFactorion(numero.value);
  cifras.innerHTML = NumeroCifras(numero.value);
}
// ------------------------ejercicio 10---------------------------
function EsPrimo(num) {
  if (num < 2) return false;
  for (let k = 2; k < num; k++) {
    if (num % k === 0) {
      return false;
    }
  }
  return true;
}

function DivisoresMenores251(numero) {
  let i = 7;
  let final = 239;
  while (i < final) {
    if (numero % i === 0) {
      return false;
    }
    i += 2;
  }
  return true;
}

function DivisoresMayores251(numero) {
  let aux = 0;
  let i = 251;
  let final = 397;
  while (i <= final) {
    if (numero % i === 0 && EsPrimo(i)) {
      if (aux === 1) return false;
      aux++;
    }
    i += 2;
  }
  return true;
}

function AnalizadorDivisores(numero) {
  if (numero % 2 === 0) return false;
  if (numero % 5 !== 0) return false;
  return DivisoresMenores251(numero) ? DivisoresMayores251(numero) : false;
}

function ListaNumeros(min, max) {
  let lista = "";
  for (let i = min; i <= max; i++) {
    if (AnalizadorDivisores(i)) {
      lista += i.toString() + " ";
    }
  }
  return lista;
}

function MostrarResutados_10(min, max) {
  const lista = document.querySelector("#numeros");
  lista.innerHTML = ListaNumeros(min, max);
}
// ------------------------ejercicio 11---------------------------
let numeros = ["1", "2", "3", "4"];
let arrayCombinaciones = [];

function Combinaciones(alfabeto, n, resultados, resultado) {
  if (!resultado) {
    resultado = [];
  }
  for (let i = 0; i < alfabeto.length; ++i) {
    const newResultado = resultado.slice();
    const newAlfabeto = alfabeto.slice();
    newResultado.push(alfabeto[i]);
    newAlfabeto.splice(i, 1);
    if (n > 1) {
      Combinaciones(newAlfabeto, n - 1, resultados, newResultado);
    } else {
      resultados.push(newResultado);
    }
  }
}

function ListaNumeros_11() {
  Combinaciones(numeros, 3, arrayCombinaciones);
  let lista = "";
  for (let i = 0; i < arrayCombinaciones.length; i++)
    lista += arrayCombinaciones[i].join("") + " ";
  return lista;
}

function MostrarResutados_11() {
  const lista = document.querySelector("#combinaciones");
  lista.innerHTML = ListaNumeros_11();
  arrayCombinaciones = [];
}
// ------------------------ejercicio 12---------------------------
const btnStartRecord = document.getElementById("btnStartRecord");
const btnStopRecord = document.getElementById("btnStopRecord");
const btnplayText = document.getElementById("playText");
const textovoz = document.getElementById("textovoz");

let recognition = new webkitSpeechRecognition();
recognition.lang = "es-ES";
recognition.continuous = true;
recognition.interimResults = true;

recognition.onresult = (e) => {
  const results = e.results;
  // console.log(results);
  const frase = results[results.length - 1][0].transcript;
  textovoz.value = frase;
};
recognition.onend=()=>{
    console.log('el microfono deja de escuchar');
}
recognition.onerror=(e)=>{
    console.log(e.error);
}

btnStartRecord.addEventListener("click", () => {
  recognition.start();
});

btnStopRecord.addEventListener("click", () => {
  recognition.abort();
});
btnplayText.addEventListener('click',()=>{
    leerTexto(textovoz.value)
})
function leerTexto(textovoz){
    const speech=new SpeechSynthesisUtterance();
    speech.text=textovoz
    speech.volume=1
    speech.rate=1
    speech.pitch=1

    window.speechSynthesis.speak(speech)
}

// ------------------------ejercicio 13---------------------------
function contar() {
  // Capturas el valor del input, lo limpas de espacios al inicio y al final y luego haces un arreglo
  const texto = document
    .getElementById("texto")
    .value.trim()
    .toLowerCase()
    .split("");

  // Creamos un objeto que será el que almacene las repeticiones
  const repeticiones = {};

  // Ciclamos el texto del input y verificamos si existe y sumamos 1, de no existir siempre valdrá 1
  texto.forEach((letra) => {
    repeticiones[letra] = (repeticiones[letra] || 0) + 1;
  });

  // Ahora ciclamos el objeto y lo agregamos al resultado
  for (let letra in repeticiones) {
    const text = `${letra} = ${repeticiones[letra]}<br>`;
    document.getElementById("resultado").innerHTML += text;
  }
}

// ------------------------ejercicio 14---------------------------
const width=400
const height=400
let $map=document.getElementById('mapa')
let $distan=document.getElementById('distancia')
let clicks=0
$map.addEventListener('click',(e)=>{
    clicks++
    let distancia=obtenerDistancia(e,target)
    // console.log(distancia);
    let distanciaHint=obtenerDistanciaHint(distancia)
    $distan.innerHTML=`<h1>${distanciaHint}</h1>`
    if(distancia <20){
        alert(`Tesoro encontrado en ${clicks} clicks`)
        // location.reload()
        borrar()
    }

})
// funcion numeros aleatorios
const numAleatorio=(size)=>{
    return Math.floor(Math.random()*size)
}
let target={
    x:numAleatorio(width),
    y:numAleatorio(height)
}
console.log(target);
// target o objetivo
const obtenerDistancia=(e,target)=>{
    let diffX=e.offsetX-target.x
    let diffY=e.offsetY-target.y
    return Math.sqrt((diffX*diffX)+(diffY*diffY))

}
const obtenerDistanciaHint=(distancia)=>{
    if(distancia<30){
        return 'Esta muy cerca !'
    }else if(distancia<40){
        return 'Muy caliente'
    }else if(distancia<60){
        return 'Caliente'
    }else if(distancia<100){
        return 'Calido'
    }else if(distancia <180){
        return 'Frio'
    }else if(distancia<360){
        return 'muy frio'
    }else{
        return 'Congelado'
    }
}

function borrar(){
    document.getElementById('distancia').innerHTML=''
}