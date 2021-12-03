//função declarada normalmente
function somar(numero1, numero2){
    console.log(numero1 + numero2)
}
somar(10, 33)


// arrow function
let somar = (numero1, numero2) => console.log(numero1 + numero2);
somar(5, 3)

//arrow function passando apenas um parâmetro
let somar2 = a => console.log(a + 55);
somar2(3)