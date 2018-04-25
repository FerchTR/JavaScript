//lengaje de typeScript hace transpilar, tranforma un lenguaje de programacion a otro. hey que decir a typeScript a que version transpilar
//console.log('hola mundo')
//var hola;   //nunca mas usar var, se va a usar let.
//import get = Reflect.get;
//import set = Reflect.set;
var hola = 'hola';
var hola1;
var numString;
var adios = 'adios'; //constantes que no se pueden cambiar
/*tipos de variables
    string
    number
    boolean
    date


 */
var fechaNacimiento = new Date();
hola = 'hello';
//adios = 'ciao'
//hola=1; //ducktiping
hola1 = 1312312.123;
hola1 = 'hola a riss';
numString = 3123123;
numString = 'sdasda';
var usuario = /** @class */ (function () {
    function usuario(nombre, casado, edad) {
        this.nombre = nombre;
        this.casado = casado;
        this.edad = edad;
    }
    return usuario;
}());
var edison = new usuario('edison', false, 27);
console.log(edison);
var usuarioDos = /** @class */ (function () {
    function usuarioDos(nombre, _casado, _edad) {
        this.nombre = nombre;
        this._casado = _casado;
        this._edad = _edad;
    }
    usuarioDos.prototype.imprimirUsuario = function (saludo) {
        return "";
    };
    return usuarioDos;
}());
var luis = {
    nombre: 'luis',
    edad: 21
};
var fernando = new usuarioDos('fernando', false, 27);
console.log(fernando);
//get casado(){
//    return this._casado;
//}
//set casado(casado:boolean){
//this._casado=casado;
//}
