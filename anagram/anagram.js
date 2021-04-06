export const findAnagrams = (word, candidates) => {

  return candidates.reduce(
    ((acc, elem) => {
      if (word.toLowerCase() === elem.toLowerCase()) {
        return acc
      }
      let arr = word.toLowerCase().split('')

      const src = elem.toLowerCase()
      for (const a in src) {
        const c = arr.indexOf(src[a])
        if (c === -1) {
          return acc
        }
        arr.splice(c, 1)
      }

      if (arr.length === 0) {
        acc.push(elem)
      }

      return acc
    })
    , []
  )
}
