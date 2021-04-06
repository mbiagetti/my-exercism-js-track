export const classify = n => {
  if (n <= 0) throw new Error("Classification is only possible for natural numbers.");
  let tot = 0
  for (let i = 1; i < n-1; i++) {
    if (n % i === 0) {
      tot += i
    }

  }

  const diff = n - tot

  if (diff === 0) {
    return "perfect"
  }
  if (diff > 0) {
    return "deficient"
  }

  return "abundant"
}
