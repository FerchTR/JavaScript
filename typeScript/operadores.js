//operadores
/* no volver a usar for, se va a usar los operadores definidos en esta clase
* iterar arreglos de cosas
* */
var arregloNumero = [1, 2, 3, 4, 5];
//let arregloUsuariosV2:Array<UsuarioArreglo>=[
var arregloUsuarios = [
    { nombre: 'Edison', edad: 27 },
    { nombre: 'Fernando', edad: 10 },
    { nombre: 'Andres', edad: 68 },
    { nombre: 'Diana', edad: 32 },
    { nombre: 'Maria', edad: 18 }
];
/* sintaxis de tipos de funciones */
//funciones anonimas//
//fat arrow function
var sumaDosNumeros = function (numeroUno, numeroDos) { return numeroUno + numeroDos; };
console.log(sumaDosNumeros(2, 8));
//se omiten parentesis, cuando se recibe solo Un parametro y no se necesite tiparlo
var potenciaNumeros = function (numero) { return numero * numero; };
console.log(potenciaNumeros(8));
//las llaves no son necesarias cuando no se requiere devolver algo
var potenciaNumeroV2 = function (numero) { return numero * numero; };
var sumaDosNumerosV2 = function (numeroUno, numeroDos) { return numeroUno + numeroDos; };
var sumaTotal = 0;
var resultadoForEach = arregloNumero.forEach(function (valorActual, indiceActual, arreglo) {
    sumaTotal = sumaTotal + valorActual;
    console.log(valorActual);
    console.log(indiceActual);
    console.log(arreglo);
});
console.log(resultadoForEach);
console.log(sumaTotal);
var resultadoSumaReduce = arregloNumero.reduce(function (valorAcumuladoActual, valorAcrualArreglo) {
    console.log('valor Actual Acumulado ', valorAcumuladoActual);
    console.log('valor actual arreglo ', valorAcrualArreglo);
    return valorAcumuladoActual - valorAcrualArreglo;
}, 20);
var resultadoEdadUsuario = arregloUsuarios.reduce(function (acumuladoEdad, usuario) {
    return acumuladoEdad + usuario.edad;
}, 0);
//transformar o mutar arreglos .map
var nuevoArregloUsuarios = arregloUsuarios.map(//devuelve el arreglo mutado
function (usuario) {
    usuario.deuda = 0;
    return usuario;
});
console.log('nuevo Arreglo de Usuarios', nuevoArregloUsuarios);
