let x = 5;
let y = 10;
let z = (x++ * --y) / 2 + (y % 3);
console.log(z);
// Resposta
// O valor de Z será de 22.5
// Por que a conta é resolvida dessa forma:
// Primeiro, o valor de x (5) é usado na multiplicação, e depois incrementado para 6.
// O valor de y (10) é decrementado para 9 antes da multiplicação.
// Então, a multiplicação é feita: 5 * 9 = 45.
// Em seguida, 45 é dividido por 2, resultando em 22.5.
// Então no final, o valor de y (que agora é 9) é usado para calcular o módulo: 9 % 3 = 0.
// Somando tudo: 22.5 + 0 = 22.5.