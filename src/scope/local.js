// Vamos a crear una funcion 
const helloWorld = () => {
    const hello = 'Hello world';
    console.log(hello);
};

helloWorld();
console.log(hello);

// Global
// Ambito Lexico
var scope = 'I am global';

const funcionScope = () =>{
    var scope = "I am just a local scope";
    const func = () =>{
        return scope;
    }
    console.log(func());
};

funcionScope();
console.log(scope);

// El Ambito lexico ->que mi funcion tiene acceso a esta 
// variable y es la asignacion sobre la cual va a estar trabajando






