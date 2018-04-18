console.log ('hola mundo');
var mutar;
var nombre = 'edison';
mutar = nombre;
console.log(mutar);
var edad = 27;
mutar = edad;
console.log(mutar);
var peso= 190.3;
mutar = peso;
console.log(mutar);
var casado = false;
mutar = casado;
console.log(mutar);
var fechaNacimiento = new Date();
var noExsisto=null;
var noEstoyDefinido= undefined;
var a= -1;
var b=0;
var c=1;

if (noExsisto){
    console.log('verdadero')

}else{
    console.log('falso')
if (a){
        console.log(0)
}
}

//json objetos
var usuario = {
    "nombre":"edison",
    apellido:"tamayo",
    cedula:'171450',
    edad:28,
    imprimir: function(){

        console.log(this.nombre +'  '+ this.apellido +'  '+ this.cedula)
    }
};

//console.log(usuario.nombre);


delete usuario.edad;
//console.log(usuario);
usuario.fechaNacimiento=new Date();
//console.log(usuario);
usuario.mascotas={};
usuario.mascotas.nombre = "Mia";
//console.log(usuario);

var arreglo = [1,2,3,"Edison",true,undefined,null,new Date(),{nombre:"Edison"}];
console.log(arreglo);

function sumarNumeros(numeroUno , numeroDos) {
    return numeroDos + numeroDos;
}

console.log(sumarNumeros(1,2));
console.log(sumarNumeros(1,2.333));

var potenciaDeDosDeUnNumero =function (numero){ //no es necesario poner el nombre de la funcion cuando es iguialada a una variable
    return numero*numero;

}
console.log(potenciaDeDosDeUnNumero(5));
console.log(potenciaDeDosDeUnNumero(3,2,4));
usuario.imprimir();
console.log(usuario.imprimir);