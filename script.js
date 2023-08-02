//código para contar letras e palavras

const minhaFrase = "JavaScript é incrível!";
console.log(minhaFrase);

const numeroDeLetras = minhaFrase.length;
console.log(numeroDeLetras);

const numeroDePalavras = minhaFrase.split(" ");
console.log(numeroDePalavras);

console.log(" ");

// Criar um array com cinco nomes. Usar um loop for para imprimir cada nome no console.

const nomes = ["Ana", "João", "Carlos", "Maria", "Beatriz"];
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

console.log(" ");

// Crie uma função que aceita uma string representando um horário no formato de 24 horas (por exemplo, "14:30"). 
//A função deve retornar uma string que converta o horário para o formato de 12 horas (por exemplo, "2:30 PM"). 
//Use o objeto Math para auxiliar nesta conversão. 
//Certifique-se de que sua função lida corretamente com horários na meia-noite e no meio-dia.

function converterHorario(horario24) {
    const [hora, minuto] = horario24.split(":");
    let hora12 = hora % 12 || 12;
    const periodo = hora < 12 ? "AM" : "PM";
    return `${hora12}:${minuto} ${periodo}`;
}

console.log(converterHorario("14:30")); // "2:30 PM"
console.log(converterHorario("00:00")); // "12:00 AM"
console.log(converterHorario("12:00")); // "12:00 PM"

console.log(" ");

//Como tratar um arquivo JSON de Objeto para string e vice-versa:

const objeto = { nome: "João", idade: 30 }; //construindo um objeto array
const jsonString = JSON.stringify(objeto); //transformando o objeto array em arquivo JSON
console.log(objeto); // imprimindo o conteúdo de objeto
console.log(jsonString); // imprimindo o conteúdo JSON
console.log(typeof objeto); // verificando o tipo da constante objeto
console.log(typeof jsonString); // verificando o tipo do arquivo JSON (string)

console.log(" ");

const json = '{"nome": "João", "idade": 30}'; // imprimindo o conteúdo string do arquivo JSON recebido
const objeto2 = JSON.parse(json); // convertendo o arquivo JSON de string para objeto array
console.log(json); // imprimindo o conteúdo do string JSON
console.log(objeto2); // imprimindo o conteúdo do objeto array convertida da string JSON
console.log(typeof json); // verificando o tipo de constante string do JSON
console.log(typeof objeto2); // verificando o tipo de constante do objeto array

console.log(" ");

// Exercício de Manipulação de Array

// Crie uma lista de compras que é inicialmente vazia.
// Adicione 5 itens à lista usando push().
// Agora, remova o primeiro item da lista usando shift().
// Imprima a lista final no console.

const listaDeCompras = [];
listaDeCompras.push("Leite", "Ovos", "Pão", "Manteiga", "Queijo");
listaDeCompras.shift();
console.log(listaDeCompras); // ['Ovos', 'Pão', 'Manteiga', 'Queijo']

// Exercício de Manipulação de Array - find()

// Você tem um array de números: [3, 7, 14, 21, 29, 36, 42].
// Use a função find() para encontrar o primeiro número que é divisível por 7
// e maior que 10.

const numeros = [3, 7, 14, 21, 29, 36, 42];
const resultado = numeros.find((num) => num > 10 && num % 7 === 0);
console.log(resultado); // 14


// Exercício de Manipulação de Array - filter()

// Dado o array de números: [5, 10, 15, 20, 25, 30, 35, 40].
// Use a função filter() para criar um novo array que contenha apenas os números
// que são maiores que 20.

const numeros2 = [5, 10, 15, 20, 25, 30, 35, 40];
const filtrados = numeros2.filter((num) => num > 20);
console.log(filtrados); // [25, 30, 35, 40]

// Exercício de Manipulação de String - split(), trim()

// Dada a string: " Bom dia, mundo! ".
// Remova os espaços em branco no início e no final da string e,
// em seguida, divida a string em palavras.

const frase = "     Bom dia, mundo!     ";
const palavras = frase.trim().split(" ");
console.log(palavras); // ["Bom", "dia,", "mundo!"]

// Exercício de Manipulação de String - startsWith(), endsWith()

// Dada a string: "O rato roeu a roupa do rei de Roma".
// Verifique se a string começa com a palavra "O" e termina com a palavra "Roma".

const frase2 = "O rato roeu a roupa do rei de Roma";
const comecaComO = frase2.startsWith("O");
const terminaComRoma = frase2.endsWith("Roma");
console.log(`Começa com 'O'? ${comecaComO}`); // true
console.log(`Termina com 'Roma'? ${terminaComRoma}`); // true
