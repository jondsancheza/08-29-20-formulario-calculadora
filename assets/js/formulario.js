const inputName = document.getElementById("inputName")
const nombreMensaje = document.getElementById("nombreMensaje")
const inputLastName = document.getElementById("inputLastName")
const apellidoMensaje = document.getElementById("apellidoMensaje")
const inputEmail = document.getElementById("inputEmail")
const correoMensaje = document.getElementById("correoMensaje")                                                                                                     
const inputPassword = document.getElementById("inputPassword")
const passwordMensaje = document.getElementById("passwordMensaje")
const inputCelular = document.getElementById("inputCelular")
const celularMensaje = document.getElementById("celularMensaje")

function validarFormulario(event) {
    event.preventDefault()
    if (inputName.value == ""){
        inputName.classList.add("alert")
        nombreMensaje.innerText = "Llena el campo por favor"
        inputName.placeholder = "Campo obligatorio."
    }
    if (inputLastName.value == ""){
        inputLastName.classList.add("alert")
        apellidoMensaje.innerHTML = "Llena el campo por favor"
        inputLastName.placeholder = "Campo obligatorio"
    }
    if (inputEmail.value == "") {
        inputEmail.classList.add("alert")
        correoMensaje.innerHTML = "Llena el campo por favor"
        inputEmail.placeholder = "Campo obligatorio"
    }
    if (inputPassword.value == "") {
        inputPassword.classList.add("alert")
        passwordMensaje.innerHTML = "Llena el campo por favor"
        inputPassword.placeholder = "Campo obligatorio"
    }
    if (inputCelular.value == "") {
        inputCelular.classList.add("alert")
        celularMensaje.innerHTML = "Llena el campo por favor"
        inputCelular.placeholder = "Campo obligatorio"
    }
    else{
       window.location = "./assets/pages/calculadora.html" 
    }
    
}