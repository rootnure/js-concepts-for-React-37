const people = {
    name: 'Lal Holud Sabuj mia',
    profession: 'Traffic Surgeon',
    age: 39,
    address: 'Shahabag',
    25: 'some data',
    'full-address': 'Central Shahabag, Dhaka, Bangladesh'
};

// dot notation
const prof1 = people.profession;

// bracket notation
const prof2 = people['profession'];

const pName = 'profession';
const prof3 = people[pName];

console.log({prof1, prof2, prof3});


// advantage of bracket notation
const case25 = people[25];
const fullAddress = people['full-address'];

console.log({case25, fullAddress});