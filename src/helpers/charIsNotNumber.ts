export const isCharacterNotANumber = (char: string): boolean => {
    return !/[\d.]/.test(char);
}