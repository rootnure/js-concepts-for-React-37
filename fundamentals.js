// 1. How to declare a variable using let and const
const fatherName = 'Arnold';
let age = 23;
age = 25;

// 2. conditions
// 6 basic condition: >, <, ===, !==, <=, >=
// multiple conditions: &&, ||

if( fatherName === 'arnold' || age === 25) {

}
else if (fatherName === 'Arnold') {

}
else {

}

// 3. array declare
// index, set value by index, indexOf
// length, push(), pop(), shift(), unshift(), slice(), splice()
const numbers = [22, 34, 11, 56, 99];
numbers[0] = 74;

// 4. for loop
for(let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

// 5. function
function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}

const output = multiply(23, 10);
console.log(output);

// 6. Object
// 3 ways to access property by name
const nayok = {
    name: 'Sailab Ali',
    age: 32,
    movies: ['No. 420', 'Gorib Khan']
}
const myVariable = age;
console.log(nayok.age); // directly by property
console.log(nayok['age']); // access via property name string
console.log(nayok[myVariable]); // access via property name in a variable