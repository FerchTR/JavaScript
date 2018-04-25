//Los primeros 4 generan 62 megawatts y los otros 15 generan 124 megawatts

console.log('############################################');
console.log('##        EMPRESA ELECTRICA QUITO         ##');
console.log('############################################');

console.log('\n'+'GENERADORES DE 62 Mw')
var i=1;
var gen=62;
var gen1=124;
var text='';
while(i<5){
    text += "Generador " + i+' encendido, aniadiendo 62Mw, para un total de '+ gen+'Mw'+'\n';
    gen=gen+62;
    i++;

}

console.log('\n'+text)

console.log('\n'+'GENERADORES DE 124 Mw'+'\n')

for (i=1;i<16;i++) {
    text += "Generador " + i + ' encendido, aniadiendo 124Mw, para un total de ' + gen1 + 'Mw' + '\n';
    gen1 = gen1 + 124;
}
console.log(text);



