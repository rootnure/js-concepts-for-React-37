// truthy --> 'almas', 5, true, {}, []
// falsy --> '', 0, false, null, undefined


let myVar = 5;
// check truthy
if(myVar) {
    // console.log('myVar is a truthy value');
}
else {
    // console.log('myVar is a falsy value');
}


let money = 70;
// check falsy
if(!money){
    // console.log('money is a falsy value');
}
else {
    // console.log('money is a truthy value');
}


// shortcut (ternary operator)
const myMoney = 80;
let food;
if(money > 100) {
    food = 'biryani';
}
else {
    food = 'cha-biscut';
}

let food1 = money > 100 ? 'biryani' : 'cha-biscut';

// console.log({food, food1})

let drink = (money > 80 || money + myMoney > 120) ? 'coke' : 'water';
// console.log(drink);


// shortcut: number to string conversion
const number = 55;
const numStr = 55 + '';
console.log({number, numStr});

// shortcut: string to number conversion
const result = '3.88';
const resultNumber = +result;       // using +
const resultNumber2 = result - 0;   // using -
const resultNumber3 = result / 1;   // using /
const resultNumber4 = result * 1;   // using *

// console.log({result, resultNumber, resultNumber2, resultNumber3, resultNumber4});


// shortcut: call this or that function on condition using ternary operator
const isActive = true;
const showUser = () => console.log('Display User');
const hideUser = () => console.log('Hide User');

// isActive ? showUser() : hideUser();

// shortcut: call a function on condition
// use && when condition is TRUE and something need to be executed
isActive && showUser(); // showUser() will execute when isActive === true
// use || when condition is FALSE and something need to be executed
isActive || hideUser(); // hideUser() will execute when isActive === false


// shortcut: change a value (toggle value): true to false; false to true
let condition = true;
condition = !condition;
console.log(condition);