
/*  
 OBS: Rodar no NODEJS

 Status: Desenvolvimento

 [] -> Inserir msg no return quando inserir o número 1 (Tirar Undefined)
 [] -> Tratar número inserido for 0

*/

// Vereficar se o número é Primo ou não.

function Primo(dados) {
    if(dados != 1)
        for(var i = 2; i < dados; i++)
            if(dados % i == 0) return "Este número não é Primo!";
    if(dados !== 1) return "Este número é Primo!";
}