const openBracket = [
  '{', '[', '(',
]

const closedBracket = [
  '}', ']', ')',
]

const pair = {
  '[': ']',
  '{': '}',
  '(': ')',
}

const isOpenBracket = x => openBracket.includes(x)

const isClosedBracket = x => closedBracket.includes(x)

export const isPaired = a => {
  let acc = []
  const paired = a.split('').every(
    x => {
      if (isOpenBracket(x)) {
        acc.push(x)
      }

      return !(isClosedBracket(x) && x !== pair[acc.pop()]);

    }
  )
  return paired && acc.length === 0
}
