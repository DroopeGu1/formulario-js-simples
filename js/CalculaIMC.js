var pacientes = document.querySelectorAll(".paciente");

for (var posicao = 0; posicao < pacientes.length; posicao++) {

    var paciente = pacientes[posicao];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    
    var tdImc = paciente.querySelector(".info-imc");
    
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    tdImc.textContent = calculaImc(peso, altura);  
    
    pesoValido = validaPeso(peso);
    alturaValida = validaAltura(altura);
    
    if(!pesoValido){
        pesoValido= false;
        tdImc.textContent = "Peso invalido";
        paciente.classList.add("paciente-invalido");
    } 
    if (!alturaValida) {
        alturaValida= false;
        tdImc.textContent = "Altura invalido";
        paciente.classList.add("paciente-invalido");
    } 
    if (pesoValido && alturaValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    } 
    
}

function validaPeso(peso){

    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso /(altura * altura);
    return imc.toFixed(2);
}


