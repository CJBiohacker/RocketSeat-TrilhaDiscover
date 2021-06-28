//  Declaração de variável
var nome;

// Atribuição de valor à variável
nome = "CJ";

// Imprime o tipo de dado atribuído
console.log(typeof (nome));

// Agrupamento de variáveis do mesmo tipo de declaração
let idade, isHuman;

// Atribuição de valor às variáveis (Number Integer e Boolean)
idade = 32;
isHuman = true;

// Concatenação entre mensagem e variável utilizando '+' , ',' e '${}'. Permite a impressão de várias variáveis em apenas uma linha do 'console.log'.
// Utilizando o '+', é necessário adicionar um espaço antes de fechar uma string para melhor organização do texto.
console.log("Nome: " + nome, "| Idade: " + idade, "| Humano? " + isHuman);

// Utilizando a ',' ocorre um espaçamento natural entre as strings e variáveis impressas.
console.log(`Tipo da variável 'isHuman':`, typeof (isHuman),
  `| Tipo da variável 'nome':`, typeof (nome));

// Utilizando o '${}' é a melhor forma, pois permite a organização do texto e das variáveis dentro do 'console.log' sem preocupação com espaçamento baseado em sintaxe.
console.log(`Nome: ${nome} | Idade: ${idade} |`);


