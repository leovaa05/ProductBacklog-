const botaoCalcular = document.getElementById('calcular');
const botaoLimpar = document.getElementById('limpar');
const inputPeso = document.getElementById('peso');
const inputAltura = document.getElementById('altura');
const pResultado = document.getElementById('imc');
const pClassificacao = document.getElementById('classificacao');
const mensagemErro = document.getElementById('erro');
const resultadoDiv = document.querySelector('.resultado');

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
        resultadoDiv.className = "resultado";
        return;
    }

    if (!altura || altura <= 0) {
        mensagemErro.textContent = "Altura inválida. Digite um número maior que zero.";
        mensagemErro.style.display = "block";
        pResultado.textContent = "Seu IMC aparecerá aqui";
        pClassificacao.textContent = "";
        resultadoDiv.className = "resultado";
        return;
    }

    const imc = peso / (altura * altura);
    const imcFormatado = imc.toFixed(2);
    const classificacao = classificarIMC(imc);
    const classe = classeIMC(imc);

    mensagemErro.style.display = "none";
    pResultado.textContent = `Seu IMC é ${imcFormatado}.`;
    pClassificacao.textContent = classificacao;
    resultadoDiv.className = "resultado " + classe;
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

function classeIMC(valor) {
    if (valor < 18.5) {
        return "magreza";
    } else if (valor < 25) {
        return "normal";
    } else if (valor < 30) {
        return "sobrepeso";
    } else if (valor < 35) {
        return "obesidade1";
    } else if (valor < 40) {
        return "obesidade2";
    } else {
        return "obesidade3";
    }
}

function limparCampos() {
    inputPeso.value = "";
    inputAltura.value = "";
    pResultado.textContent = "Seu IMC aparecerá aqui";
    pClassificacao.textContent = "";
    mensagemErro.style.display = "none";
    botaoCalcular.disabled = true;
    resultadoDiv.className = "resultado";
}

const btnCalcularTMB = document.getElementById('calcular-tmb');
const inputPesoTMB = document.getElementById('peso-tmb');
const inputAlturaTMB = document.getElementById('altura-tmb');
const inputIdadeTMB = document.getElementById('idade-tmb');
const selectSexoTMB = document.getElementById('sexo-tmb');
const resultadoTMB = document.getElementById('resultado-tmb');

btnCalcularTMB.addEventListener('click', () => {
  resultadoTMB.textContent = 'Seu resultado aparecerá aqui';
});

function validarCamposTMB() {
  const peso = parseFloat(inputPesoTMB.value);
  const altura = parseFloat(inputAlturaTMB.value);
  const idade = parseInt(inputIdadeTMB.value);
  const sexo = selectSexoTMB.value;

  let mensagemErro = '';

  if (!peso || peso <= 0) {
    mensagemErro = 'Peso deve ser maior que zero.';
  } else if (!altura || altura <= 0) {
    mensagemErro = 'Altura deve ser maior que zero.';
  } else if (!idade || idade <= 0) {
    mensagemErro = 'Idade deve ser maior que zero.';
  } else if (!sexo) {
    mensagemErro = 'Selecione o sexo.';
  }

  if (mensagemErro) {
    resultadoTMB.textContent = mensagemErro;
    btnCalcularTMB.disabled = true;
  } else {
    resultadoTMB.textContent = 'Seu resultado aparecerá aqui';
    btnCalcularTMB.disabled = false;
  }
}

inputPesoTMB.addEventListener('input', validarCamposTMB);
inputAlturaTMB.addEventListener('input', validarCamposTMB);
inputIdadeTMB.addEventListener('input', validarCamposTMB);
selectSexoTMB.addEventListener('change', validarCamposTMB);

validarCamposTMB();
