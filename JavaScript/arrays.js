// Criação e Manipulação de Arrays no JavaScript
// A criação de um Vetor (Array) é muito semelhante com a do Objeto. O que de fato diferencia a sintaxe de ambas é o elemento que cerca os atributos, sendo "{}" no objeto e "[]" no vetor (array).

const bestiary = [
    'Drowner',
    'Aracha',
    'Werewolf',
    'Cockatrice',
    'Gargoyle',
    'Harpy',
    'Nekker',
    'Leshen',
    'NoonWraith',
    'Katakan'
]

console.log(`Número de Criaturas do Bestiário: ${bestiary.length}`) // Retorna o total de elementos do vetor.
console.log(`Criatura 0 = ${bestiary[0]}`); // Retorna o elemento especificado pelo índice do vetor(0-Max).

// No JavaScript é possível adicionar Objetos como elementos dentro de um Vetor (Array), inclusive junto de elementos simples (o que não é recomendado por razão de Boas Práticas). Para isso é só aplicar a sintaxe padrão de criação de objetos dentro do Vetor.

const journal = [
    {   nome:"Ken", idade:56, nasc:"EUA"    },
    {   nome:"M.Bison", idade:70, nasc:"Tailândia"  },
    {   nome:"Akuma", idade:undefined, nasc:"Japão"    },
    {   nome:"Chun-Li", idade:53, nasc:"China"    },
    {   nome:"Rainbow Mika", idade:42, nasc:"Japão"    },
    {   nome:"Cammy White", idade:47, nasc:"Reino Unido"    },
]

console.log(`Número de Lutadores: ${journal.length}`);
console.log(`Ficha Técnica Lutadora ${journal[3].nome}
Idade: ${journal[3].idade} Nacionalidade: ${journal[3].nasc}`);