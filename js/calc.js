function calcularImc(peso, altura) {
  let imc = peso / (altura * altura);
  return imc.toFixed(2);
}