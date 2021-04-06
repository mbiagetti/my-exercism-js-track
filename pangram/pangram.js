
const ALPHABET = [...'abcdefghijklmnopqrstuvwxyz'];

export const isPangram = input => ALPHABET.every(c => input.toLowerCase().includes(c))
