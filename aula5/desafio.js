/*
1. Crie um array que contenha nomes de produtos para compra;
2. Após isto, exiba no console os resultados das métodos relacionadas aos arrays, que são: join(), pop(), push(), shift(), unshift() e demais...
3. Descreva com duas palavras, no console o que cada método faz;
      exemplo: console.log("O método join realiza tal ação")
               console.log(RESULTADO_DO_JOIN)
*/
var lista = ["Feijão", "Sabonete", "Arroz", "Escova", "Farinha", "Macarrão"]

// join()
let listaJoin = lista.join(" - ")
console.log("O método join() junta os itens do array em uma única string podendo informar um caractere como separador de cada elemento.")
console.log(listaJoin)

console.log("-----------------------------------------------------------------------------------")
// pop()
let listaPop = lista.pop()
console.log("O método pop() remove o último elemento do array.")
console.log(lista)

console.log("-----------------------------------------------------------------------------------")
// push()
lista.push("Bife")
console.log("O método push() adiciona um novo elemento ao final da lista.")
console.log(lista)

console.log("-----------------------------------------------------------------------------------")

lista.shift()
console.log("O método shift() remove o primeiro elemento do array")
console.log(lista)

console.log("-----------------------------------------------------------------------------------")

console.log("O método unshift() adiciona um elemento no início do array")
lista.unshift("Detergente")
console.log(lista)

console.log("-----------------------------------------------------------------------------------")

console.log("O método indexOf() exibe qual a posição do elemento pesquisando no array, começando da posição 0")
console.log(lista.indexOf("Escova"))
console.log(lista.indexOf("Preto"))

console.log("-----------------------------------------------------------------------------------")

console.log("O método lastIndexOf() exibe qual a posição do elemento, mas este começa varrendo do final do array.")
console.log(lista.lastIndexOf("Farinha"))
console.log(lista.lastIndexOf("Azul"))

console.log("-----------------------------------------------------------------------------------")

console.log("O método includes() faz o mesmo que o indexOf() porém retorna apenas um boolean")
console.log(lista.includes("Sabonete"))
console.log(lista.includes("Amarelo"))