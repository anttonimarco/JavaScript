// My_Scripts 
//==================================================================================
// >>> Imprimindo nomes:
//==================================================================================
console.log('\n')

console.log('>>> Lista Names <<<')
function nomes() {
    var namelist = [];
    namelist.push('Ana', 'Marco', 'Pedro', 'Nina', 'Bruna')
    for(var i = 0; i < namelist.length; i++)
    console.log("Olá " + namelist[i] + " !");
    console.log('Dentro da Array(Lista) temos ' + (namelist.length) + ' Nomes.');  
}

nomes();

//==================================================================================
console.log('\n')
//==================================================================================
/*
//  >>> Número primo
console.log('>>> Número Primo <<<')

function Primo() {
    var numero = window.prompt('Digite um número: ');
    for(var i = 2; i < numero; i++);
    if(numero % i == 0) {
        window.alert('Não é Primo');
    } else if (numero !== 1) {
        window.alert('É Primo!');
    }
}           // Bugado!

Primo();
*/
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

// >>> Semáfaro
console.log(' >>> Semáfaro <<< ')
function Sinal(x) {
    if (x == 1) {
        console.log('Sinal Vermelho, Pare!');
    } else if (x == 2) {
        console.log('Sinal Amarelo, Atenção!');
    } else if (x == 3) {
        console.log('Sinal Verde, Siga em frente!');
    } else if (x === 1 && 2 || 3) {
        console.log('Código Inválido!')
    }
}
Sinal(0);
setTimeout(99)
Sinal(1);
Sinal(2);
Sinal(3);
Sinal(4);

console.log('\n')

console.log('Hello World!')
