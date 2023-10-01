export const formatNumber = (input: string | undefined): string => {
    if (input === undefined) return '0.00'
    const number = parseFloat(input);
    const formattedNumber = number.toFixed(2);
    const formatter = new Intl.NumberFormat('en-US');
    return formatter.format(parseFloat(formattedNumber));
}