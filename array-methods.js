// métodos de array

//const numeros = [10, 20, 30, 40]

//pop
//remove o último elemento

// numeros.pop()
//console.log(numero)

//push
//adiciona elementos no fim do array

//numeros.push(50, 60, 70);
//console.log(numeros);

//const numeros = [-5, 0, 5, 10, 20, 30, 40];
//const numerosAcimaDeCinco = []

//for(const numero of numeros){
//    if(numero >= 5){
//numerosAcimaDeCinco.push(numero);
//    };
//};

//console.log(numerosAcimaDeCinco);

//shift

const numeros = [10, 15, 20, 25, 35, 30, 35, 40];
/*
const dobrados = numeros.map((valor) => {
    return valor *2;
});

console.log(dobrados);*/

const [a, b, c, ...resto] = numeros

console.log(resto)