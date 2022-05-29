var N = gets();
var clientes = [];
var senhas = [];

//Função para ordenar de forma decrescente o array
function reordenar(arr) {
   return MeuArray = arr.sort((a, b) => b-a)
};

//Função para contar o número de senhas que não tiveram seus lugares trocados
function SemTrocar (arr1, arr2) {
    let x = 0;
    for (i=0; i<arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
             x++;
        } else if (arr1[i] !== arr2[i]) {}
    } 
    return x
};

for (let n = 0; n < N; n++) {

    clientes[n] = gets();
   
    senhas[n] = gets().split(' ');
    
    OrdSenhas = reordenar(senhas[n].slice());

    console.log(SemTrocar(senhas[n], OrdSenhas))
    
}
