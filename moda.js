const lista1 = [
1,
2,
3,
4,
3,
4,
3,
1,
4,
5,
1,
1,
1
];


function calcularModa(lista){

const lista1Count = {};

lista.map(
    function(elemento){
        if(lista1Count[elemento]){
            lista1Count[elemento] +=1;
        }else{
        lista1Count[elemento] = 1;
        }
    }
);

const lista1Array = Object.entries(lista1Count).sort(
 function(valorAcumulado, nuevoValor){
     return valorAcumulado[1] - nuevoValor[1];
 }
);

const moda = lista1Array[lista1Array.length-1];
return moda;
}
