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

    pResultado.textContent = `Seu IMC é ${imcFormatado}`;
}