
const GIGASECOND = 10 ** 9

const MILLIS =  10 ** 3

const toMillis = seconds => seconds * MILLIS

export const gigasecond = inputDate => new Date(inputDate.getTime() + toMillis(GIGASECOND))

