var hello = 'Hello';
var hello = 'Hello +';
let world = 'Hello World';



//Scope Global
/* const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}
 */
anotherFunction();

// Esto es una mala practica dentro del desarrollo de Software
const helloWorld = () => {
    globalVar = 'im global'
}

helloWorld();
console.log(globalVar);

const anotherFunction = () => {
    var localVar = globalVar = 'Im Global';
}

anotherFunction();
console.log(localVar);