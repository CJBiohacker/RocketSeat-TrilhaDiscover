/* Var, Let e Const */
/*  Var - O valor declarado à variável é global, ou seja, aplica-se ao código inteiro. A última atribuição/modificação será contada como a atual.
    Let - O valor declarado à variável é local, ou seja, aplica-se somente no bloco em que faz parte. Caso
for declarada de forma global, qualquer tentativa de atribuição/modificação acarretará em erro na hora de execução do código.
    Const - O valor declarao à uma constante é global e imutável. Qualquer tentativa de modificà-la
acarretará em erro na hora de execução do código. */

var nome = "Carlos";
    console.log("Nome: " + nome);  {
        nome = "Carlos Junior";
    }
console.log("Nome: " + nome);

let idade = "31";
    console.log("Idade: " + idade + " anos"); {
        idade = "32";
        console.log("Idade: " + idade + " anos");
    }
console.log("Idade: " + idade + " anos");

const altura = 1.68;
    console.log("Altura: " + altura + " m");
// altura = 1.70
// console.log(altura);

/* Tipos Dinâmicos */
/*  O JavaScript é uma linguagem de tipagem Fraca e Dinâmica.
    Fraca - As variáveis não precisam ter o seu tipo declarado. Após a atribuição de um valor, a linguagem
consegue especificar qual é o tipo.
    Dinâmica - O tipo da variável pode ser modificado em qualquer momento do código, ou seja, não é estático.
Conforme se atribui o valor, naturalmente o tipo é identificado. (característica de tipagem fraca) */

// var cor:String = "Vermelho"; // Ocorre um erro de Sintaxe ao definir a variável como String

var cor = "Vermelho";
    console.log("Valor: " + cor + "  Tipo: " + typeof cor);
    cor = "Verde";
    console.log("Valor: " + cor + "  Tipo: " + typeof cor);
    cor = true;
    console.log("Valor: " + cor + "  Tipo: " + typeof cor);
    cor = 10.25;    
    console.log("Valor: " + cor + "  Tipo: " + typeof cor);
    cor = 1.8*10**308;
    console.log("Valor: " + cor + "  Tipo: " + typeof cor);

let olhoCor = "Azul";
    console.log("Valor: " + olhoCor + "  Tipo: " + typeof olhoCor);
    olhocor = "Castanho-escuro";
    console.log("Valor: " + olhoCor + "  Tipo: " + typeof olhoCor);

const cabeloCor = "Castanho-escuro";
console.log("Valor: " + cabeloCor + "  Tipo: " + typeof cabeloCor);

/* Scope e Block Statement */
/*  Scope ou Escopo é o termo que determina a visibilidade de uma variável dentro do JavaScript. Naturalmente o escopo padrão inclui todo o código, ou seja, é global. É possível criar o block-scope, que funciona como um escopo local dentro do global, onde também serão armazenados mais itens do código. Na Sintaxe o Block-Scope é representado por "{}", e tudo que conter dentro faz parte do escopo do bloco. */
    
//  Scope var (Ocorre o comportamento "hoisting" ou "içamento")

console.log("Qual valor de x? " + x);   {
        var x = 15;
    }
console.log("O valor de x é: " + x);

//  Scope let e const

let y = 17      // Declara com a palavra-chave let a variável y com valor 17
    console.log("Qual valor de y? " + y);   
    {       
        let y = 18;
        console.log("O valor de y é: " + y);    {
            console.log("O valor de y é: " + y);
            y = 25;
            console.log("O valor de y é: " + y);
        }
        console.log("O valor de y é: " + y);
    }
console.log("O valor de y é: " + y);
    

const z = 33
    console.log("Qual valor de z? " + z);   {
        const z = 37;
        console.log("O valor de z é: " + z);
    }
console.log("O valor de z é: " + z);