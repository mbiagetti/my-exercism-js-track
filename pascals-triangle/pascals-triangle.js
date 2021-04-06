
export const rows = (rowsNumber) => buildRows([], rowsNumber)

const buildRows = (acc, rowsNumber) => {
  if (rowsNumber === 0) return acc
  const rowIndex = rowsNumber - 1
  acc.unshift(buildRow(rowIndex))

  return buildRows(acc, rowIndex)
}

const buildRow = n => {
  let out = []
  for (let i = 0; i <= n; i++) {
    out[i] = binomialCoefficient(n, i)
  }

  return out
}

// binomial coefficient formula
const binomialCoefficient = (n, k) => {
  let coefficient = 1;
  for (let x = n - k + 1; x <= n; x++) coefficient *= x;
  for (let x = 1; x <= k; x++) coefficient /= x;
  return coefficient;
}