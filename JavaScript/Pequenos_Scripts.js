//OBS:> Rodar NodeJS or ConsoleGoogle.
//Pequenos Scripts de treinamento.

// Vereficar se o número é Primo ou não.
function Primo(dados) {
    if(dados != 1)
        for(var i = 2; i < dados; i++)
            if(dados % i == 0) return "Este número não é Primo!";
    if(dados !== 1) return "Este número é Primo!";
}




// Lista_Nomes
var namelist = [];
namelist.push("Ana", "Marcos", "Pedro", "Joquim", "Isac", "Paulo");

function Nomes() {
    console.log("Boas Vindas!");
    for(var i = 0; i < namelist.length; i++) 
    console.log("Olá " + namelist[i] + "!")
    console.log("Fim!")
}
 
// Semáfaro
function Sinal(dados) {
    if(dados == 1) {
        return("Sinal Vermelho, Pare!");
    } else if(dados == 2) {
        return("Sinal Amarelo, Atenção!");
    } else if(dados == 3) {
        return("Sinal Verde, Siga em frente!");
    } else if (dados !== 1 && 2 || 3) {
        return("Código Inválido!");
    }
}

