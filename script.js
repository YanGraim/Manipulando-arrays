// 1 -  A lista produtos deve conter os seguintes produtos: Computador, Telefone, Mouse, Teclado Exiba essa lista no console quando abrir o index.html.

const listaProdutos = ["Computador", "Telefone", "Mouse", "Teclado"];

console.log(listaProdutos);

// 2 - Mostre no console quantos produtos tem nessa lista.
console.log(`A quantidade de produtos na lista é de: ${listaProdutos.length}`);


// 3 - Retire o produto Mouse da lista e retorne no console a lista com os produtos restantes.
let removerMouse = listaProdutos.filter((item) => {
    return item != "Mouse";
});
console.log(removerMouse);

// 4 - Faça uma busca na sua lista por algum produto, por exemplo procure por Computador e caso exista esse produto na sua lista exiba um console falando que este produto existe e mostre tambem o nome deste produto caso não exista mostre uma mensagem avisão que o produto não foi encontrado.

let busca = listaProdutos.find(produto => produto === 'Computador');

if(busca) {
    console.log(`O produto ${busca} existe!`)
} else {
    console.log("O produto nao existe")
}


// 5 -  Remova o segundo item da sua lista.
listaProdutos.splice(1,1)
console.log(listaProdutos)






const listaNumero = [1, 3, 5, 7, 0, 9]

// Ordenando os numeros
console.log(listaNumero.sort());

// Removendo primeiro item desta lista
console.log(listaNumero.shift());

// Invertendo ordem da lista
console.log(listaNumero.reverse());

// Adicionando um novo numero na lista
listaNumero.push(8);
console.log(listaNumero);