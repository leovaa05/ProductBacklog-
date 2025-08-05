const botaoCalcular = document.getElementById('calcular');
const botaoLimpar = document.getElementById('limpar');
const inputPeso = document.getElementById('peso');
const inputAltura = document.getElementById('altura');
const pResultado = document.getElementById('imc');
const pClassificacao = document.getElementById('classificacao');
const mensagemErro = document.getElementById('erro');

botaoCalcular.addEventListener('click', calcularIMC);
botaoLimpar.addEventListener('click', limparCampos);
inputPeso.addEventListener('input', validarCampos);
inputAltura.addEventListener('input', validarCampos);

function validarCampos() {
    const peso = parseFloat(inputPeso.value);
    const altura = parseFloat(inputAltura.value);

    if (!peso || peso <= 0) {
        mensagemErro.textContent = "Peso deve ser maior que zero.";
        mensagemErro.style.display = "block";
        botaoCalcular.disabled = true;
        return;
    }

    if (!altura || altura <= 0) {
        mensagemErro.textContent = "Altura deve ser maior que zero.";
        mensagemErro.style.display = "block";
        botaoCalcular.disabled = true;
        return;
    }

    mensagemErro.style.display = "none";
    botaoCalcular.disabled = false;
}

function calcularIMC() {
    const peso = parseFloat(inputPeso.value);
    const altura = parseFloat(inputAltura.value);

    if (!peso || peso <= 0) {
        mensagemErro.textContent = "Peso inválido. Digite um número maior que zero.";
        mensagemErro.style.display = "block";
        pResultado.textContent = "Seu IMC aparecerá aqui";
        pClassificacao.textContent = "";
        return;
    }

    if (!altura || altura <= 0) {
        mensagemErro.textContent = "Altura inválida. Digite um número maior que zero.";
        mensagemErro.style.display = "block";
        pResultado.textContent = "Seu IMC aparecerá aqui";
        pClassificacao.textContent = "";
        return;
    }

    const imc = peso / (altura * altura);
    const imcFormatado = imc.toFixed(2);
    const classificacao = classificarIMC(imc);

    mensagemErro.style.display = "none";
    pResultado.textContent = `Seu IMC é ${imcFormatado}.`;
    pClassificacao.textContent = classificacao;
}

function classificarIMC(valor) {
    if (valor < 18.5) {
        return "Você está com magreza.";
    } else if (valor < 25) {
        return "Você está com peso normal.";
    } else if (valor < 30) {
        return "Você está com sobrepeso.";
    } else if (valor < 35) {
        return "Você está com obesidade grau I.";
    } else if (valor < 40) {
        return "Você está com obesidade grau II.";
    } else {
        return "Você está com obesidade grau III (mórbida).";
    }
}

function limparCampos() {
    inputPeso.value = "";
    inputAltura.value = "";
    pResultado.textContent = "Seu IMC aparecerá aqui";
    pClassificacao.textContent = "";
    mensagemErro.style.display = "none";
    botaoCalcular.disabled = true;
}