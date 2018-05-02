//operadores
/* no volver a usar for, se va a usar los operadores definidos en esta clase
* iterar arreglos de cosas
* */

let arregloNumero = [1,2,3,4,5];

//let arregloUsuariosV2:Array<UsuarioArreglo>=[

let arregloUsuarios: UsuarioArreglo[] = [
    {nombre:'Edison',edad:27},
    {nombre:'Fernando',edad:10},
    {nombre:'Andres',edad:68},
    {nombre:'Diana',edad:32},
    {nombre:'Maria',edad:18}];

/* sintaxis de tipos de funciones */
//funciones anonimas//
//fat arrow function

let sumaDosNumeros = (numeroUno:number,numeroDos:number):number =>{return numeroUno+numeroDos};

console.log(sumaDosNumeros(2,8));
//se omiten parentesis, cuando se recibe solo Un parametro y no se necesite tiparlo
let potenciaNumeros = numero => {return numero*numero};
console.log(potenciaNumeros(8));

//las llaves no son necesarias cuando no se requiere devolver algo
let potenciaNumeroV2 = numero => numero*numero;

let sumaDosNumerosV2 = (numeroUno:number,numeroDos:number):number => numeroUno+numeroDos;
let sumaTotal = 0;
let resultadoForEach =
    arregloNumero.forEach(
    (valorActual, indiceActual, arreglo)=>{
        sumaTotal = sumaTotal + valorActual;
        console.log(valorActual);
        console.log(indiceActual);
        console.log(arreglo);
}
);

console.log(resultadoForEach);
console.log(sumaTotal);

let resultadoSumaReduce = arregloNumero.reduce(
    (valorAcumuladoActual,valorAcrualArreglo)=>{
        console.log('valor Actual Acumulado ',valorAcumuladoActual);
        console.log('valor actual arreglo ', valorAcrualArreglo);
        return valorAcumuladoActual - valorAcrualArreglo;

    },20

);


let resultadoEdadUsuario = arregloUsuarios.reduce(
    (acumuladoEdad:number , usuario:UsuarioArreglo)=>acumuladoEdad + usuario.edad,0
);

//transformar o mutar arreglos .map

let nuevoArregloUsuarios = arregloUsuarios
    .map(//devuelve el arreglo mutado
    (usuario:UsuarioArreglo)=>{
        usuario.beca=false;
        return usuario;
    }
)
    .map(
        (usuario:UsuarioArreglo)=>{
            usuario.deuda=calcularDeuda(usuario.edad);
            return usuario;
        }

    )

console.log('nuevo Arreglo de Usuarios',nuevoArregloUsuarios)

function calcularDeuda (edadUsuario:number){
    const totalEdad = arregloUsuarios
        .reduce((total,usuario:UsuarioArreglo)=>total+usuario.edad,0);
    return totalEdad*(edadUsuario/100);
}


interface UsuarioArreglo{
    nombre:string;
    edad:number;
    beca?:boolean;
    deuda?:number;
}


