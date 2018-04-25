console.log('############################################');
console.log('##        MINISTERIO DEL AMBIENTE         ##');
console.log('############################################');

var numMeses= 20;
var i=0;
var numOsos=8;

for (i=1;i<= numMeses;i++){

    console.log('Van a existir  '+ numOsos +' osos de anteojos después del mes  '+ i)
    numOsos= numOsos*4;
    if (numOsos>10000){
        numOsos= numOsos/2;
        console.log('Removiendo  '+numOsos+' osos ')

    }

}