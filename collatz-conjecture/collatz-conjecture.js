const isEven = i => i % 2 === 0

const isNegative = i => i <= 0

const collatz = (n, step) => {
  if (isNegative(n)) throw new Error('Only positive numbers are allowed')
  if (n === 1) return step
  if (isEven(n)) {
    n = n / 2
  } else {
    n = n * 3 + 1
  }

  return collatz(n, step + 1)
}

export const steps = (i) => collatz(i, 0)

