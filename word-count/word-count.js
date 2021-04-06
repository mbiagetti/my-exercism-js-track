export const countWords = word => {
  const arr = word.split(' ')
  let out = {}
  console.log(arr)
  for (const x in arr) {
    console.log(x, arr[x])
    if (out[arr[x]]) {
      out[arr[x]]++
    } else {
      out[arr[x]] = 1
    }
  }
  return out
}
