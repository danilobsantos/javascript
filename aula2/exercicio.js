//1) Criar a função calcularIMC que receba a altura e o peso em quilogramas e calcule o IMC do usuário (peso / altura^2).
// Em seguida, execute a função testando diferentes valores.

function calcularIMC(altura, peso){
    let imc;
    imc = (peso / (altura * altura));
    console.log(imc);
}
calcularIMC(1.70, 75);
calcularIMC(1.92, 83);