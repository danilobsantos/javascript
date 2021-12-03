function nomeCompleto(nome, sobrenome){
    return nome + " " + sobrenome;
};
//console.log(nomeCompleto("Danilo", "Santos"))

function bomDia(nome, sobrenome, callback){
    return "Olá, " + callback(nome, sobrenome)
}

console.log(bomDia("Danilo", "Santos", nomeCompleto))

