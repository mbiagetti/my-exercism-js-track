const throwErrIfNotValid = (a, b) => {
  if (a.length === 0 && b.length > 0) throw new Error('left strand must not be empty')
  if (b.length === 0 && a.length > 0) throw new Error('right strand must not be empty')
  if (a.length !== b.length) throw new Error('left and right strands must be of equal length')
}

export const compute = (a, b) => {
  throwErrIfNotValid(a, b)
  let distance = 0

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) distance++
  }

  return distance
}
