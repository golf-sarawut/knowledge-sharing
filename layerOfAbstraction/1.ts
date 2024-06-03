function isEven(number: number): boolean {
    return number % 2 === 0;
}

function getParity(number: number): string {
    return isEven(number) ? "even" : "odd";
}