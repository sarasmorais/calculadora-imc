function pulaLinha() {
    return "<br><br>";
}

function mostra(frase) {
    return frase + pulaLinha();
}

function calculaImc(altura, peso) {
    return peso / (altura * altura);
}

const nome = prompt("Informe o seu nome");
const alturaInformada = parseFloat(prompt(nome + ", informe sua altura em metros (ex: 1.68):"));
const pesoInformado = parseFloat(prompt(nome + ", informe seu peso em kg:"));

const imc = calculaImc(alturaInformada, pesoInformado);

let resultado = mostra(`${nome}, o seu IMC é ${imc.toFixed(2)}`);

if (imc < 18.5) {
    resultado += mostra("Você está abaixo do recomendado.");
} else if (imc > 35) {
    resultado += mostra("Você está acima do recomendado.");
} else {
    resultado += mostra("Seu IMC está excelente!");
}

document.getElementById("resultado").innerHTML = resultado;
