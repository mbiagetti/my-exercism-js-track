
const rnaTranscription = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
}

const transcript = nucleotide => rnaTranscription[nucleotide]

export const toRna = (dna) => Array.from(dna).map(transcript).join('')