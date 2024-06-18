function parseInput(input: string): number;
function parseInput(input: number): string;
function parseInput(input: string | number): number | string {
    if (typeof input === 'string') {
        return parseFloat(input);
    }
    return input.toString();
}

const parsedNumber = parseInput('123.45');
const parsedString = parseInput(123.45);