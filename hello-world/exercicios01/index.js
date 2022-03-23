const imcFunc = require('./services/imcFunc');

const main = () => {
  return console.log(`${imc.toFixed(2)} e a situação é ${ imcFunc(imc) }`);
};

IMC();