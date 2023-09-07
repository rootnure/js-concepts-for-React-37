// 1. JSON => stringify, parse

const nayok = {
    name: 'Sailab Ali',
    age: 32,
    movies: ['No. 420', 'Gorib Khan']
}

const nayokStringify = JSON.stringify(nayok);
// console.log(nayok);
// console.log(nayokStringify);

const nayokObj = JSON.parse(nayokStringify);
// console.log(nayokObj);


// 2. fetch
/* fetch('apiUrl')
    .then(res => res.json())
    .then(data => console.log(data)); */


// 3. Object -> keys, values
const keys = Object.keys(nayok);
const values = Object.values(nayok);

console.log(keys);
console.log(values);


// 4. for loop (for-of, for-in)
const numbers = [25, 53, 45, 32, 23, 45, 34, 35];
// numbers.forEach( num => console.log(num) );
const doubled = numbers.map(num => num * 2);
// console.log(doubled);

// for of on array & array like object to loop through each element
// fon in on object to loop through each property


// add of remove from an array
const products = [
    {name: 'galaxy 9', price: 19000, brand: 'samsung', color: 'silver' },
    {name: 'iphone', price: 51000, brand: 'apple', color: 'gray' },
    {name: 'phone', price: 15000, brand: 'HTC', color: 'black' },
    {name: 'yoga 3', price: 39000, brand: 'lenovo', color: 'blue' },
    {name: 'watch', price: 3000, brand: 'casio', color: 'silver' },
    {name: 'watch', price: 7500, brand: 'apple', color: 'silver' },
    {name: 'sunglass', price: 1500, brand: 'loop', color: 'silver' },
];

const newProduct = {name: 'Webcam', price: 1500, brand: 'HP'};

// copy previous product and then add newProduct
const newProducts = [...products, newProduct];
// console.log(newProducts);

const remaining = products.filter(product => product.name !== 'phone');
console.log(remaining);


