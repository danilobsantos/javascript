/* Em um parque de diversões nos pedem um programa para verificar se os passageiros da montanha-russa podem entrar no brinquedo.

Crie uma função podeEntrar() que receba dois parâmetros: 
altura da pessoa;
se está acompanhada.

Deve retornar uma mensagem se a pessoa pode entrar ou não na montanha-russa, baseado nas seguintes condições:
A pessoa deve medir mais de 1.40m e menos de 2 metros.
Se a pessoa medir menos de 1.40m, deverá ir acompanhada.
Se a pessoa medir menos de 1.20m, não poderá subir, nem acompanhada. */

// vamos utilizar function & if ou swich, reflitam!!!


function podeEntrar(altura, acompanhada = "não"){
    if(altura >= 1.40 && altura < 2.00){
        console.log("Acesso autorizado, Voce pode subir na montanha russa!!");
        return true;
    } else if(altura >= 1.20 && altura < 1.40 && acompanhada== "sim"){
        console.log("Acesso autorizado com acompanhante!!");
        return true;
    } else {
        console.log("Acesso negado!!");
        return false;
    }
}

podeEntrar(1.30, "não");
podeEntrar(1.80 );
podeEntrar(1.30, "sim");
podeEntrar(2.20, "não")
