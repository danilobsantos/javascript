// variável de escopo local
function ola(){
    let bemVindo = "Olá mundo!!!";
    return bemVindo;
}
console.log(bemVindo) // erro is not defined

// variável de escopo global
var olaMundo = "Olá Mundo, estou aprendendo JavaScript";
function hello(){
    return olaMundo;
}
console.log(olaMundo);

function conc(){
    return olaMundo;
}
console.log(olaMundo + " e logo vou desenvolver meu software");