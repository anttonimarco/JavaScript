// My_Scripts 
//==================================================================================
// >>> Imprimindo nomes:
//==================================================================================
console.log('\n')

function nomes() {
    var namelist = [];
    namelist.push('Ana', 'Marco', 'Pedro', 'Nina', 'Bruna')
    for(var i = 0; i < namelist.length; i++)
    console.log("Olá " + namelist[i] + " !");
}
nomes();

//==================================================================================
console.log('\n')
//==================================================================================

//  >>> Número primo

function Primo(dados) {
    if(dados != 1) {
        for(var i = 2; i < dados; i++);
        if(dados % i == 0) {
            console.log('Este número é Primo!');
        } else if (dados !== 1) 
            console.log('Este número não é Primo!');
    }
}    
Primo(3);

//==================================================================================  
console.log('\n')
//==================================================================================

//  >>> Interagindo com o usuário
window.alert('Hello Stranger!')

name = window.prompt('Olá, Qual seu nome? ');
window.alert('Seja Bem-Vindo ' + name + "!");

idade = window.prompt('Qual sua idade? ');
if(idade <= 17) {
    window.alert('Menor de Idade!');
} else if (idade => 18) {
    window.alert('Maior de Idade!');
}
console.log('Nome:' + name,'Idade:' +  idade);

//==================================================================================
console.log('\n')
//==================================================================================

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
