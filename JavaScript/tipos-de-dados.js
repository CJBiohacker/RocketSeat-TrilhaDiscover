/* Tipos de Dados no Javascript */
/*  String - São cadeia de caracteres. Respeitando a sintaxe do javascript,
temos que inseri-la entre aspas simples ou duplas, ou entre template strings ou literals(acento grave).

'' - Aspas simples
"" - Aspas duplas
`` - Templates strings ou literals (acento grave)

*/
console.log("CJ MERN Full Stack Dev"); // Aplicando aspas duplas na inserção de string
console.log('CJ Java Back End Dev');   // Aplicando aspas simples na inserção de strings
console.log(`CJ React Front End Dev`); // Aplicando acento grave na inserção de strings

console.log("CJ'MERN Dev"); // Aplicando aspas simples dentro de aspas duplas na inserção de strings
console.log('CJ"MERN Dev'); // Aplicando aspas duplas dentro de aspas simples na inserção de strings
console.log(`CJ
  "   
MERN 
' `); // Customização multilinha na inserção de strings através do acento grave.

console.log("CJ ${1+1}"); // Com aspas duplas não é possível inserir expressões no meio da string.  
console.log('CJ ${1+1}'); // Com aspas simples não é possível inserir expressões no meio da string.
console.log(`CJ ${1+1}`); // Perceba que com o uso do template literals (acento grave), é possível inserir expressões dentro da mesma string.

/*  Number - Representam números no javascript. São classificados pelos tipos:
        Inteiros (integer) - 10, 15, 33;
        Reais (float) - 10.5, 55.256, 44.8975; 
        NaN (Not-a-Number) - Qualquer caractere que não seja númerico.
        Infinitos - Infinity ou números acima de 1.8×10308.
*/

console.log(Number(31)); // Imprime no console o número inteiro 31.
console.log(Number(10.5)); // Imprime no console o número real 10,5.
console.log(Number(NaN)); // Imprime no console a informação de Not-a-number.
console.log(Number(`número`)); // Imprime no console a string número, que é um Not-a-number.
console.log(Number(Infinity)); // Imprime no console a informação de número Infinito.
console.log(Number(1.8*10**308)); // Imprime no console a informação de um número considerado como Infinito.

/* Boolean - Representa duas condições contrárias de um dado/variável.
        True - Condição de Verdadeiro (equivalente ao 1 em binário).
        False - Condição de Falso (equivalente ao 0 em binário).
*/

console.log(true);
console.log(false);

/* Undefined - Não representa qualquer definição ou valor atrbuído há um dado ou variável.
   Null - Representa um valor nulo, que não possui algum valor dentro.
  Apesar de terem conceitos parecidos, um valor nulo não é a mesma coisa que um valor indefinido.
Tudo depende do operador utilizado na comparação.
*/

console.log(undefined);
console.log(null);
console.log(null == undefined); // Comparação se 'null' é igualmente amplo à 'undefined'. (true)
console.log(undefined == null); // Comparação se 'undefined' é igualmente amplo à 'null'. (true)
console.log(null === undefined); // Comparação se 'null' é igualmente estrito à 'undefined'. (false)
console.log(undefined === null); // Comparação se 'undefined' é igualmente estrito à 'null'. (false)









