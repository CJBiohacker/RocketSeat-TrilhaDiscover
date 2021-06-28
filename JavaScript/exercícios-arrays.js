// EXERCÍCIO ARRAYS  
// 1. Declare uma variável chamada weight.

let weight;

// 2. Descubra o tipo da variável.

console.log(`Tipo de dado da variável 'weight': ${typeof weight}`);

/* 3. Declare uma variável e atribua valores para cada um dos dados:
name: String
age: Number(integer)
stars: Number(float)
isSubscribed: Boolean */

let nome = "CJ"
let age = 31
let stars = 4.75
let isSubscribed = true
weight = 68

/* 4. A variável student abaixo é de que tipo ?
    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.
    4.2 Mostre no console a seguinte mensagem:
        <name> de idade <age> pesa <weight> kg.
        Atenção, substitua <name> <age> e <weight> pelos valores de cada
        propriedade do objeto. */

// let student = {};
// console.log(`Tipo de dado da variável 'weight': ${typeof student}`);

let student = {
  nome,
  age,
  stars,
  isSubscribed
};

console.log(`${nome} de idade ${age} pesa ${weight} kg.`);

/* 5. Declare uma variável do tipo Array, de nome students e atribua a ela
nenhum valor, ou seja, somente o Array vazio. */

let students = []

/* 6. Reatribua o valor para a variável acima, colocando dentro dela o objeto student
da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no
Array.) */

students = [student]

/* 7. Coloque no console o valor da posição zero do Array acima. */

console.log(`Elemento da posição 0 = ${students}`)
console.log(students) // Imprime o Vetor (Array) inteiro
console.log(students[0])  //Imprime o elemento da posição 0 do Vetor(Array)

/* 8. Crie um novo student e coloque na posição 1 do Array students */

let studentNew = {
  nome: "Carlos Junior",
  age: 32,
  stars: 5.0,
  isSubscribed: false
}

students.push(studentNew) // Adiciona na última posição o elemento (um objeto neste caso) studentNew

// OU students[1] = studentNew  // Adiciona na posição exata do nº 1, o elemento (um objeto neste caso) studentNew

console.log(students[1])  //Imprime o elemento da posição 1 do Vetor(Array)

/* 9. Sem rodar o código reponda qual é a resposta do código abaixo e por que? Após a sua reposta,
rode o código e veja se você acertou.

console.log(a)
var a = 1

RESPOSTA: O comando console.log(a) irá imprimir na tela do console o valor 'undefined', pois não foi atribuído
nenhum valor à variável 'a' antes do console. A propriedade de 'hoisting' ou 'içamento' do JavaScript faz
a leitura do código inteiro até achar a variável 'a' após o console e 'puxa' pro início do código para que não dê erro
dê execução. A mesma coisa não poderia ser feita com os tipos const ou let.
*/




