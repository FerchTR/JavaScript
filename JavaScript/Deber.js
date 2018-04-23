//var nombre = 'edison';
//console.log(typeof nombre);

var arreglo = [1,'34','hola','edison',12,true];

function validarNumeroDeStringsEnArreglo (arreglo){
    var i;
    var count=0;
    console.log(arreglo)
    for (i=0;i<arreglo.length;i++){

        //console.log(typeof arreglo[i]);
        if(typeof arreglo[i] == 'string'){
            count ++;

        }else{
            count=count;
        }
    }

    console.log('***********************************')
    console.log('El numero de Strings es:  '+count);

}

validarNumeroDeStringsEnArreglo(arreglo);

