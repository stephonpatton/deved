const sayHello = (name) => {
    console.log("Hey");
    console.log(`Hey ${name}`);
}

sayHello("Stephon");

const user = {
    name: 'Stephon',
    lastName: 'Patton',
    age: 25
};

console.log(user);
//Deconstruct
const {name, lastName, age} = user;
console.log(name,lastName, age);

const numbers = [1,2,3,4,5];
const [one, two] = numbers;
console.log(one,two);

const users = [
    { name: "Stephon", age: 25},
    { name: "Khalil", age: 24},
    { name: "Led Zepp", age: 21}
]

//Map and Filter
const modifiedUser = users.map((user) => user.age);
const filteredUser = users.filter((user) => user.age === 21);

console.log(modifiedUser);
console.log(filteredUser);