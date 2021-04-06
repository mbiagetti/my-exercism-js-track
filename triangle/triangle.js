export class Triangle {

  constructor(a, b, c) {
    this.a = a
    this.b = b
    this.c = c
  }

  matchingSides() {
    if (this.a === this.b && this.a === this.c) return 3

    if (this.a === this.b || this.a === this.c || this.b === this.c) return 2

    return 0
  }

  allSidesGreaterZero() {
    return this.a > 0 && this.b > 0 && this.c > 0
  }

  isInequality() {
    return (this.a + this.b) > this.c &&
      (this.b + this.c) > this.a &&
      (this.a + this.c) > this.b
  }

  isEquilateral() {
    return this.isValidTriangle() && this.matchingSides() === 3
  }

  isIsosceles() {
    return this.isValidTriangle() && this.matchingSides() >= 2
  }

  isScalene() {
    return this.isValidTriangle() && this.matchingSides() === 0
  }

  isValidTriangle() {
    return this.isInequality() && this.allSidesGreaterZero()
  }
}
