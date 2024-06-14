const person = { name: "Alice", age: 30 };
const car = { make: "Toyota", model: "Corolla" };


function getPersonProperty(obj: typeof person, key: 'name' | 'age') {
    return obj[key];
}

function getCarProperty(obj: typeof car, key: 'make' | 'model') {
    return obj[key];
}

console.log(getPersonProperty(person, "name")); // Output: Alice
console.log(getPersonProperty(person, "age")); // Output: 30

console.log(getCarProperty(car, "make")); // Output: Toyota
console.log(getCarProperty(car, "model")); // Output: Corolla
