const botaoCalcular = document.getElementById('calcular');
const inputPeso = document.getElementById('peso');
const inputAltura = document.getElementById('altura');
const pResultado = document.getElementById('imc');

botaoCalcular.addEventListener('click', calcularIMC);

function calcularIMC() {
    const peso = parseFloat(inputPeso.value);
    const altura = parseFloat(inputAltura.value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, preencha o peso e a altura com números positivos.");
        pResultado.textContent = "Seu IMC aparecerá aqui";
        return;
    }

    const imc = peso / (altura * altura);
    const imcFormatado = imc.toFixed(2);
    const classificacao = classificarIMC(imc);

    pResultado.textContent = `Seu IMC é ${imcFormatado}. ${classificacao}`;
}

function classificarIMC(valor) {
    if (valor < 18.5) {
        return "Você está com magreza.";
    } else if (valor >= 18.5 && valor < 25) {
        return "Você está com peso normal.";
    } else if (valor >= 25 && valor < 30) {
        return "Você está com sobrepeso.";
    } else if (valor >= 30 && valor < 35) {
        return "Você está com obesidade grau I.";
    } else if (valor >= 35 && valor < 40) {
        return "Você está com obesidade grau II.";
    } else {
        return "Você está com obesidade grau III (mórbida).";
    }
}
