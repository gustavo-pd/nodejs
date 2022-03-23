const calcImc = (weight, height) => {
  return weight / (height * height).toFixed(2);
}

module.exports = calcImc;
