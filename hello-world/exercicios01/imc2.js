const readline = require('readline-sync');

const height = readline.questionFloat(`Qual sua altura em metros? `)
const weight = readline.questionFloat(`Qual seu peso em kilogramas? `)

const imc = weight / (height * height);

function calculaIMC(imc) {
  var indexIMC = '';

  if (imc < 18.5) {
    indexIMC = "abaixo do peso"
  };
  if (imc >= 18.5 && imc <= 24.9) {
    indexIMC = "peso normal"
  };
  if (imc >= 25 && imc <= 29.9) {
    indexIMC = "acima do peso"
  };
  if (imc >= 30 && imc <= 34.9) {
    indexIMC = "obesidade grau 1"
  }
  if (imc >= 35 && imc <= 39.9) {
    indexIMC = "obesidade grau 2"
  } else {
    indexIMC = "obesidade grau 3 e 4"
  }
  return indexIMC;
}


console.log(`${imc.toFixed(2)} e a situação é ${ calculaIMC(imc) }`);