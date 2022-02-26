//Helpers

function esPar(numero){
    return (numero&2 === 0);
 }

 function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, valorElemento){
            return valorAcumulado + valorElemento;
        }
    );
}


//Calculadora de medianas

function medianaSalarios(lista){
    const mitad = parseInt(lista.length /2);

    if(esPar(lista.length)){
        const personaMitad = lista[mitad-1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad,personaMitad2]);
        return mediana;
    } else{
        const personaMitad = lista[mitad-1];
        return personaMitad;
    }

}

//Calculando la mediana general

const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA-salaryB;
    }
);



const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediana del top10%



const spliceStart = (salariosColSorted.length*(100-10))/100;
const spliceCount = salariosColSorted.length-spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart,spliceCount);
const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
}
);
