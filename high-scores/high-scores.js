const compareNumbers = (a, b) => b - a

export class HighScores {
  constructor(data) {
    this.data = data
  }

  get scores() {
    return this.data
  }

  get latest() {
    return this.data[this.data.length - 1]
  }

  get personalBest() {
    return this.data.sort(compareNumbers)[0]

  }

  get personalTopThree() {
    return this.data.sort(compareNumbers).slice(0, 3)
  }
}
