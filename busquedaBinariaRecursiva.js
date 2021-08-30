var lista= new Array(-10, -3, 6,15,25,50);
var valorBuscado;
var primerIndice=0;
var ultimoIndice= lista.length -1;
var indiceMedio;

function busquedaBinariaRecursiva(valorBuscado, lista, primerIndice, ultimoIndice){
    if(primerIndice<=ultimoIndice){

        indiceMedio=Math.trunc((primerIndice+ultimoIndice)/2);

        if(lista[indiceMedio] == valorBuscado){
            return( indiceMedio);
        } else if(lista[indiceMedio] > valorBuscado){ //Descarto segunda Mitad
            ultimoIndice = indiceMedio -1;
            return(busquedaBinariaRecursiva(valorBuscado, lista, primerIndice, ultimoIndice));
        } else {// descarto Primera Mitad
            primerIndice = indiceMedio +1
            return(busquedaBinariaRecursiva(valorBuscado, lista, primerIndice, ultimoIndice));
        }
        
    }  return -1
}

valorBuscado=-3;

var indice= busquedaBinariaRecursiva(valorBuscado, lista, primerIndice, ultimoIndice);

if(indice!= -1){
    console.log("El valor Buscado es: "+ valorBuscado + " y se encuentra en el Indice: "+ indice);
}else{
    console.log("El valor Buscado no se encontro");
}