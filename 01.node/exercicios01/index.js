const imcFunc = require('./services/imcFunc');
const imc = require('./services/imc');
const person = require('./controllers/ficha');

const main = () => {
  person.input();
  const indice = imc(person.fichaData.weight, person.fichaData.height);
  const situacao = imcFunc(indice);

  return console.log(`Olá ${person.fichaData.name} seu imc é igual a ${indice} e a situação é ${situacao}`);
};

main();