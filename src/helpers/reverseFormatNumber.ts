export const reverseFormatNumber = (input: string): number => {
    const unformattedNumber = parseFloat(input.replace(/,/g, ''));
    return unformattedNumber;
}