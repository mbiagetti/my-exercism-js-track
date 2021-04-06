const specialChar = [' ', '-']

const isSpecialChar = x => specialChar.includes(x)

export const isIsogram = word => {
  return word.toLowerCase().split('').every(function (x) {
    if (isSpecialChar(x) || !this.includes(x)) {
      this.push(x)
      return true
    }

    return false
  }, [])
};
