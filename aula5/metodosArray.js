// método push() - adiciona um ou mais elementos ao final do array
let cores = ["Roxo", "Laranja", "Azul"]

cores.push("outracor");
console.log(cores);

cores.push("Cinza", "Dourado", "Prateado");
console.log(cores);

// método pop() - Elimina o último elemento de um array
let cores = ["Roxo", "Laranja", "Azul"]

let ultimaCor = cores.pop(); // remove o elemento da última posição do array e armazena na variável criada.
cores.pop() // apenas remove o último elemento do array

console.log(cores)
console.log(ultimaCor)

// método shift() - Elimina o primeiro elemento de um array
let cores = ["Roxo", "Laranja", "Azul"]

let primeiraCor = cores.shift(); // remove o primeiro elemento do array, armazenando-o em uma variável.
cores.shift(); // apenas remove o primeiro elemento de um array.

console.log(cores)
console.log(primeiraCor);

// método unshift() - Adiciona um ou mais elementos ao início do array
let cores = ["Roxo", "Laranja", "Azul"]

cores.unshift("Violeta");
cores.unshift("Cinza", "Dourado")

console.log(cores)

// método join() - Junta os elementos de um array usando um separador que especificarmos, caso não seja especificado ele utiliza vírgulas por padrão.
let cores = ["Roxo", "Laranja", "Azul"]

let separadosPorVirgula = cores.join(); // converte os elementos em uma string separando-os por vírgula.
let separadosPorTraco = cores.join(" - ") // converte os elementos em uma string separando-os pelo separador informado como parâmetro.

console.log(separadosPorVirgula);
console.log(separadosPorTraco);

// método indexOf() - retorna o primeiro índice de um valor especificado.
let cores = ["Roxo", "Laranja", "Azul", "Verde", "Preto", "Dourado"]

console.log(cores.indexOf("Preto"))
console.log(cores.indexOf(23)) // retorna -1 por não ter encontrado o valor especificado.

// método lastIndexOf() - similar ao indexOf() mas começa pelo último elemento.
let cores = ["Roxo", "Laranja", "Azul", "Verde", "Preto", "Dourado"]
console.log(cores.lastIndexOf("Verde"))
console.log(cores.indexOf(23)) // retorna -1 por não ter encontrado o valor especificado.

let numeros = ["Roxo", 15, "Azul", 25, 30, "Verde"]
console.log(numeros.lastIndexOf("Azul"))

// método includes() - Similar ao indexOf(), mas retorna um boolen.
let cores = ["Roxo", "Laranja", "Azul", "Verde", "Preto", "Dourado"]
console.log(cores.includes("Azul")) // verdadeiro
console.log(cores.includes("Amarelo")) //falso


