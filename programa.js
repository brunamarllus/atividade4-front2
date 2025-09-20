// Array com 5 nomes
let nomesiniciais = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"];
console.log("Nomes:", nomesiniciais)

let nomesfinais = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"]
console.log("Terceiro nome:", nomesiniciais[2]);

nomesfinais.push("Fernanda"); // adiciona nome no final
nomesfinais.unshift("Zé");    // adiciona nome no início

console.log("Array após adições:", nomesfinais);

// Removendo o último nome
nomesfinais.pop();

console.log("Array atualizado:", nomesfinais);

// Criando um novo array dobrando os valores 
let numeros = [2, 4, 6, 8];
let dobrados = numeros.map(num => num * 2);

console.log("Array dobrado com map():", dobrados);

// Criando um novo array apenas com números maiores que 5 
let valores = [1, 3, 5, 7, 9];
let maioresQue5 = valores.filter(num => num > 5);

console.log("Números maiores que 5:", maioresQue5);
