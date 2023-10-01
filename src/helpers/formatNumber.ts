export const formatNumber = (input: string): string => {
    const number = parseFloat(input);
    const formattedNumber = number.toFixed(2);
    const formatter = new Intl.NumberFormat('en-US');
    return formatter.format(parseFloat(formattedNumber));
}