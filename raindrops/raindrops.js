const isDivisibleBy = j => i => i % j === 0;

const isDivisibleBy3 = isDivisibleBy(3)
const isDivisibleBy5 = isDivisibleBy(5)
const isDivisibleBy7 = isDivisibleBy(7)

const detector = {
  Pling: isDivisibleBy3,
  Plang: isDivisibleBy5,
  Plong: isDivisibleBy7,
}

const isEmpty = arr => Array.isArray(arr) && arr.length === 0

export const convert = i => {
  let out = []
  Object.entries(detector).forEach(
    ([word, func]) => func(i) ? out.push(word) : ''
  )

  if (isEmpty(out)) {
    out.push(i)
  }

  return out.join('')
}
