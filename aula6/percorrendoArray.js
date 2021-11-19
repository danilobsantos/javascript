// Percorrendo um array utilizando for
let pontos = [12, 34, 56, 32, 5, 8, 76, 4, 1, 90]

for (let index = 0; index < pontos.length; index++){
    console.log(pontos[index]);
}

// percorrendo um array e alterando seus elementos

let precoCusto = [1200, 340, 560, 390, 500, 80, 1000, 9000]
const lucro = 1.5;
for(let i = 0; i < precoCusto.length; i++){
    console.log(precoCusto[i] * lucro)
}