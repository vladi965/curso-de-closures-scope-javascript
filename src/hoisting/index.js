a = 2;
var a;

console.log(a);
//El hoisting eleva las declaraciones

console.log(a);
var a = 2;

//Javasrript solo utiliza el hoisting en declaraciones
// y no en las inicializaciones.

//Aqui vamos a generar nuestra función
nameOfDog('Tottus');

function nameOfDog(name){
    console.log(name);
}

