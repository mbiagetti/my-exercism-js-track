const dictionary = {
  'AUG':  'Methionine',
  'UUU': 'Phenylalanine',
  'UUC': 'Phenylalanine',
  'UUA':  'Leucine',
  'UUG':  'Leucine',
  'UCU': 'Serine',
  'UCC':  'Serine',
  'UCA':  'Serine',
  'UCG':  'Serine',
  'UAU':  'Tyrosine',
  'UAC':  'Tyrosine',
  'UGU':  'Cysteine',
  'UGC':  'Cysteine',
  'UGG':  'Tryptophan',
}

const stopCondition = [
  'UAA',
  'UAG',
  'UGA',
]

const isStopCond = elem => stopCondition.includes(elem)

const getProtein = codon => {
  const protein = dictionary[codon]
  if (!protein) throw Error('Invalid codon')

  return protein
}

const parseCodons = input => (
  input === undefined ? [] : input.match(/.{1,3}/g)
)

export const translate = input => {
  let out = []

    for (const codon of parseCodons(input)) {
      if (isStopCond(codon)) break

      out.push(getProtein(codon))
    }

  return out
}
