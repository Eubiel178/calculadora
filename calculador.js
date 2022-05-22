function inserir(num) {
    window.event.preventDefault()

    let numero = window.document.querySelector("#resultado").innerHTML
    
    window.document.querySelector("#resultado").innerHTML= "" + numero + num
}

function limpar() {
    window.document.querySelector("#resultado").innerText = ""
}

function apagar() {
    let resultadoScreen = window.document.querySelector("#resultado").innerText

    window.document.querySelector("#resultado").innerText = resultadoScreen.substring(0,resultadoScreen.length -1)
}

function calcular() {
    let resultado = window.document.querySelector("#resultado").innerText

    if (resultado) {
        document.querySelector("#resultado").innerText = eval(resultado)
    }
}
