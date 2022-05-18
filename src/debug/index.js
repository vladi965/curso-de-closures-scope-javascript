//vamos a crear una funcion que nos permita mostrar lo que 
//seria scope local, global y por medio de un bloque

var a = 'Hello';

function hello(){
    let b = 'Hello World';
    const c = 'Hello World!'
    if(true){
        let d = 'Hello Vladimir!!'
        debugger
    }
}

hello();