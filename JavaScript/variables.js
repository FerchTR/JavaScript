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
    //imprimir:()
};

console.log(usuario.nombre);


delete usuario.edad;
console.log(usuario);
usuario.fechaNacimiento=new Date();
console.log(usuario);
usuario.mascotas={};
usuario.mascotas.nombre = "Mia";
console.log(usuario);