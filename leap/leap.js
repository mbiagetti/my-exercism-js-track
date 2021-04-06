const isDivisibleBy = j => i => i % j === 0;

const isDivisibleBy4 = isDivisibleBy(4)

const isDivisibleBy100 = isDivisibleBy(100)

const isDivisibleBy400 = isDivisibleBy(400)


export const isLeap = i => isDivisibleBy100(i) ? isDivisibleBy400(i) : isDivisibleBy4(i)

