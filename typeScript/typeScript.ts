//lengaje de typeScript hace transpilar, tranforma un lenguaje de programacion a otro. hey que decir a typeScript a que version transpilar


//console.log('hola mundo')
//var hola;   //nunca mas usar var, se va a usar let.
//import get = Reflect.get;
//import set = Reflect.set;

let hola='hola';
let hola1:any;
let numString: number | string | boolean;
const adios='adios';     //constantes que no se pueden cambiar

/*tipos de variables
    string
    number
    boolean
    date


 */

let fechaNacimiento:Date = new Date();

hola='hello';

//adios = 'ciao'
//hola=1; //ducktiping

hola1=1312312.123;
hola1='hola a riss';

numString=3123123;
numString='sdasda';





class usuario{
    public nombre:string; //mod por defecto es public y no es necesario escribir
    private casado:boolean;
    protected edad:number;

    constructor(nombre:string,casado:boolean,edad:number) {
        this.nombre=nombre;
        this.casado = casado;
        this.edad = edad;

    }
}

let edison:usuario=new usuario('edison',false,27);

console.log(edison);

class usuarioDos{
    constructor(public nombre:string , private _casado:boolean , protected _edad:number){

    }
    imprimirUsuario(saludo:string):string{

        return ``
    }
}

let fernando= new usuarioDos('fernando',false,27);
console.log(fernando);


//get casado(){

//    return this._casado;
//}
//set casado(casado:boolean){
//this._casado=casado;

//}


