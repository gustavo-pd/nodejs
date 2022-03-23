const readline = require('readline-sync');

let fichaData = {
  weight: 0,
  height: 0,
  name: '',
};

const input = () => {
  fichaData.name = readline.question(`Qual seu nome?`)
  fichaData.height = readline.questionFloat(`Qual sua altura em metros? `)
  fichaData.weight = readline.questionFloat(`Qual seu peso em kilogramas? `)
  const imc = weight / (height * height);
}

module.exports = {
  data,
  input,
};
