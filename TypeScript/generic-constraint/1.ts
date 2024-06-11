function getProperty<T, K>(obj: T, key: K): T[K] {
    return obj[key];
}

const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name")); // Output: Alice
console.log(getProperty(person, "age")); // Output: 30

const car = { make: "Toyota", model: "Corolla" };
console.log(getProperty(car, "make")); // Output: Toyota
console.log(getProperty(car, "model")); // Output: Corolla