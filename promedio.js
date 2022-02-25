const lista1 = [
    100,
    200,
    300,
    500
];


function calcularMediaAritmetica(lista){
// let sumaLista = 0;

// for(var i = 0; i<lista.length;i++){
//     sumaLista +=lista[i];
// }
// return sumaLista/lista.length;  

const sumaLista = lista.reduce(
    function (valorAcumulado = 0, valorElemento){
        return valorAcumulado + valorElemento;
    }
);

return sumaLista/lista.length;  


}

console.log(calcularMediaAritmetica(lista1));