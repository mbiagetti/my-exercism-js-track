export class Squares {
  constructor(n) {
    const base = Array.from({length: n}, (_, i) => i + 1)

    this.sumOfSqrt = base.reduce((acc, x) => acc + x * x)
    this.sqrtofSum = base.reduce((acc, x) => acc + x) ** 2
  }

  get sumOfSquares() {
    return this.sumOfSqrt
  }

  get squareOfSum() {
    return this.sqrtofSum
  }

  get difference() {
    return this.sqrtofSum - this.sumOfSqrt
  }
}
