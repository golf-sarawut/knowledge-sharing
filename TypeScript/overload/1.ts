function toggleParseInput(input: string | number): number | string {
    if (typeof input === 'string') {
        return parseFloat(input);
    }
    return input.toString();
}

// type of parsedNumber must be number and not string | number
const parsedNumber: number = toggleParseInput('123.45');
// type parsedString must be string and not string | number
const parsedString: string = toggleParseInput(parsedNumber);