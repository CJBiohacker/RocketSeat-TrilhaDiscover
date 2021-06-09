/* Var, Let e Const */
/*  Var - O valor declarado à variável é global, ou seja, aplica-se ao código inteiro. A última modificação/declaração será contada como a atual.
    Let - O valor declarado à variável é local, ou seja, aplica-se somente no bloco em que faz parte.
    Const - O valor declarao à uma constante é global e imutável. Qualquer tentativa de modificà-la
acarretará em erro na hora de execução do código. */

var nome = "Carlos"
console.log(nome);  {
    nome = "Carlos Junior"
}
console.log(nome);

let idade = "31"
console.log(idade); {
    idade = "32"
    console.log(idade);
}
console.log(idade);

const altura = 1.68
console.log(altura);
// altura = 1.70
// console.log(altura);

/* Tipos Dinâmicos */
/*  O JavaScript é uma linguagem de tipagem Fraca e Dinâmica.
    Fraca - As variáveis não precisam ter o seu tipo declarado. Após a atribuição de um valor, a linguagem
consegue especificar qual é o tipo.
    Dinâmica - O tipo da variável pode ser modificado em qualquer momento do código, ou seja, não é estático.
Conforme se atribui o valor, naturalmente o tipo é identificado. (característica de tipagem fraca)
*/

// var cor:String = "Vermelho"; // Ocorre um erro de Sintaxe ao definir a variável como String

var cor = "Vermelho"
console.log("Valor:" + cor + "  Tipo:" + typeof cor);

var cor = "Verde"
console.log("Valor:" + cor + "  Tipo:" + typeof cor);

var cor = true
console.log("Valor:" + cor + "  Tipo:" + typeof cor);

var cor = 10.25
console.log("Valor:" + cor + "  Tipo:" + typeof cor);

var cor = 1.8*10**308
console.log("Valor:" + cor + "  Tipo:" + typeof cor);



