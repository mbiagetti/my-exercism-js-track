export const transform = legacy => {
  let out = {}

  Object.keys(legacy).forEach(
    point => legacy[point].forEach(
      letter => out[letter.toLowerCase()] = Number(point)
    )
  )

  return out
}
