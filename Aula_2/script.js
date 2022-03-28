/*
    VARIÁVEIS E CONSTANTES
    VAR   --> Declara uma variável, opcionalmente, inicializando-a com um valor.
    LET   --> Declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor.
    CONST --> Declara uma constante de escopo de bloco, apenas de LEITURA.
*/

// ESCOPO GLOBAL
let age = 18

if(age !== 16){
    //ESCOPO LOCAL
    let age = 10
    // CHAMA DO ESCOPO LOCAL
    console.log(age) // --> 10
}
// CHAMA DO ESCOPO GLOBAL
console.log(age) // --> 18

/////////////////////////////////////////

// ESCOPO GLOBAL
let num = 18

if(num !== 16){
    num = 10
}
console.log(num) // --> 10

/////////////////////////////////////////

/* 
    OPERADORES - JavaScript    
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/
// FOR
for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,0,0,0.5)';
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
//FOR IN
const object = {
    name: "Micael",
    age: 18,
    isOlder: true
}
for(const key in object){
    const element = object[key];
    console.log('Key: ',key)
    console.log('Element: ',element)
}
//FOR OF
const arr = [1,2,3,4,5]
for (const number of arr) {
    console.log(number)
}