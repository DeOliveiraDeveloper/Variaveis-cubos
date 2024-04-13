let nome;

console.log(nome);

// Não vai dar erro pq à variável existe, só não foi definido nenhum valor à ela.

nome = "Caio";

console.log(nome)

// Agora sim!

let teste

{   
    const teste2 = "Bora ver";
    teste = teste2
}
// Resumindo, ele apontou para a variavel teste, o valor da variavel teste2 mesmo ela estando dentro do escopo.
console.log(teste)