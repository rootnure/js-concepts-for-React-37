// 1. array destructuring
const numbers = [55, 23];
// const num1 = numbers[0];
// const num2 = numbers[1];

// const [num1, num2] = [55, 23]; // destructure array directly from array

// const [num1, num2] = numbers; // destructure array from array variable

const boxify = (n1, n2) => [n1, n2];

// const [num1, num2] = boxify(55, 23); // destructure array from function return

const myObject = {
    name: 'Alllu',
    age: 44,
    numbers: [55, 23],
    isActive: false
}

const [num1, num2] = myObject.numbers; // destructure array form object's property

console.log(num1, num2);

// 2. object destructuring
// const {name, age} = {name: 'alllu', age: 17};
const {name, age} = {id: 22, name: 'allli', salary: 33000, age: 23}; // serial doesn't matter

const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'Lenovo Laptop',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 77,
        address: 'khalpara, kowmillah',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}

const {machine, ide} = employee;
// const {address, weight} = employee.specification; // cannot destructure multilayer at once
const {address, weight} = employee?.specification; // use optional chaining
const {brand} = employee?.specification?.watch;