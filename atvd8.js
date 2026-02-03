let resultado = 10 + 5 * 2 > 20 && !false;
console.log(resultado);

// Resposta = FALSE
// o resultado será true porque a expressão 10 + 5 * 2 é primeiro como 10 + 10, que é 20.
// Em seguida, 20 > 20 é falso.
// No entanto, !false é verdadeiro (por o ! inverte o valor), então a expressão completa resulta em false && true, que é false.   