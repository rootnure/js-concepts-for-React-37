const numbers = [22, 34, 11, 56, 99];
const nayok = {
    name: 'Sailab Ali',
    age: 32,
    movies: ['No. 420', 'Gorib Khan']
}

// 1. template string
const about = `Nayok name is ${nayok.name} age of ${nayok.age} has number ${numbers[2]} also liked movies ${nayok.movies[0]}`;
console.log(about);

// 2. arrow function
const getSeven = () => 7;
const addTen = num => num + 10;
const isEven = x => x % 2 === 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    num1 += 5;
    num2 += 6;
    const result = num1 * num2;
    return result;
}

// 3. spread operator
const newNumbers = [...numbers];
// create a new array from an older array and add an element
const currentNumbers = [...numbers, 55];

numbers.push(65);
numbers.push(65);
numbers.push(65);

// console.log(newNumbers);
// console.log(numbers);


console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);