const allergiesMask = {
  "eggs":               0b1,
  "peanuts":           0b10,
  "shellfish":        0b100,
  "strawberries":    0b1000,
  "tomatoes":       0b10000,
  "chocolate":     0b100000,
  "pollen":       0b1000000,
  "cats":        0b10000000,
}

const allergies = Object.keys(allergiesMask)

export class Allergies {

  constructor(score) {
    this._score = score
  }

  list() {
    return allergies.filter(e => this.allergicTo(e))
  }

  allergicTo(allergy) {
    return Boolean(this._score & allergiesMask[allergy])
  }
}
