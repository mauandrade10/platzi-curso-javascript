// const lista1 = [
//     100,
//     200,
//     300,
//     50000000,
//     1,
//     5,
//     1
// ];

function calcularMediana(lista){

    lista.sort(function(a,b){
        return a-b
    });

     if((lista.length% 2)==0){
         const n1 = lista.length/2-1;
         const n2 = (lista.length/2);

         return (lista[n1]+lista[n2])/2;

    }
    else{
        const mitadLista = Math.round(lista.length/2);
        return lista[mitadLista-1];
    }
}

// console.log(calcularMediana(lista1));