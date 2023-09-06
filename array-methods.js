const products = [
    {name: 'galaxyj 9', price: 19000, brand: 'samsung', color: 'silver' },
    {name: 'iphone', price: 51000, brand: 'apple', color: 'gray' },
    {name: 'phone', price: 15000, brand: 'HTC', color: 'black' },
    {name: 'yoga 3', price: 39000, brand: 'lenovo', color: 'blue' },
    {name: 'watch', price: 3000, brand: 'casio', color: 'silver' },
    {name: 'watch', price: 7500, brand: 'apple', color: 'silver' },
    {name: 'sunglass', price: 1500, brand: 'loop', color: 'silver' },
];


// 1. map() --> returns an array
const brands = products.map(product => product.brand);
// console.log(brands);
const prices = products.map(product => product.price);
// console.log(prices);

// 2. forEach() --> No return
products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));
products.forEach(product => {
    // multi line work here
});

// 3. filter() --> return array of elements that match the conditions
const cheap = products.filter(product => product.price <= 10000);
console.log(cheap);

// 4. find() --> return condition matched first element
const special = products.find(product => product.price < 7000 );
console.log(special);
