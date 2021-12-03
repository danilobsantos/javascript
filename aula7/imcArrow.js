// calculo de imc utilizando uma função comum
function calcularIMC(altura, peso){
    let imc;
    imc = (peso / (altura * altura));
    console.log(imc);
}
calcularIMC(1.70, 75);
calcularIMC(1.92, 83);

//calculo de imc utilizando arrow function
let resultado;
let IMC = (altura, peso) => {    
    resultado = (peso / (altura * altura))
    console.log(resultado)
}
IMC(1.70, 75)