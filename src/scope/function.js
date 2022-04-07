const fiuts = () => {
    var fruit = 'apple';
    console.log(fruit);
};

fruit();
console.log(fruit);

// Scope Local dentro de una Funcion
const anotherFunction = () => {
    var x = 1;
    var x = 2;
    let y = 1;
   /*  let y = 2; */
    console.log(x);
    console.log(y);
}

anotherFunction();