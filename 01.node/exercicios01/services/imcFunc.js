const imcFunc = (imc) => {
  var indexIMC = '';

  if (imc < 18.5) {
    indexIMC = "abaixo do peso"
  } else if (imc >= 18.5 && imc <= 24.9) {
    indexIMC = "peso normal"
  } else if (imc >= 25 && imc <= 29.9) {
    indexIMC = "acima do peso"
  } else if (imc >= 30 && imc <= 34.9) {
    indexIMC = "obesidade grau 1"
  } else if (imc >= 35 && imc <= 39.9) {
    indexIMC = "obesidade grau 2"
  } else {
    indexIMC = "obesidade grau 3 e 4"
  }
  return indexIMC;
}

module.exports = imcFunc;