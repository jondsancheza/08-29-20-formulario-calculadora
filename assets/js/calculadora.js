
const suma = document.getElementById("suma");
suma.addEventListener("click",()=>{
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let respuesta = document.getElementById("respuesta");
    let resultado = num1 + num2;
    respuesta.innerHTML = "<i> La suma de estos números es igual a: " + resultado + "</i>";
})


const resta = document.getElementById("resta");
resta.addEventListener("click",()=>{
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let respuesta = document.getElementById("respuesta");
    let resultado = num1 - num2;
    respuesta.innerHTML = "<i> La resta de estos números es igual a: " + resultado + "</i>";
})

const multiplicacion = document.getElementById("multiplicacion");
multiplicacion.addEventListener("click",()=>{
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let respuesta = document.getElementById("respuesta");
    let resultado = num1 * num2;
    respuesta.innerHTML = "<i> La multiplicación de estos números es igual a: " + resultado + "</i>";
})

const division = document.getElementById("division");
division.addEventListener("click",()=>{
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let respuesta = document.getElementById("respuesta");
    let resultado = num1 / num2;
    respuesta.innerHTML = "<i> La división de estos números es igual a: " + resultado + "</i>";
})