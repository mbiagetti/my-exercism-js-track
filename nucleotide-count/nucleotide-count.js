
let data = {
  'A': 0,
  'C': 0,
  'G': 0,
  'T': 0,
}

const validValue = Object.keys(data)

const isValid = c => validValue.includes(c)

const init = () => ({...data})

export class NucleotideCounts {
  static parse(dna) {
    let out = init()
    const dnaArray = [...dna]

    if (!dnaArray.every(isValid)) throw new Error('Invalid nucleotide in strand')
    dnaArray.forEach(c => out[c]++)

    return Object.keys(data).map(k => out[k]).join(' ')
  }
}
