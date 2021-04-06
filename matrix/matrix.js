const transpose = a =>
  Object.keys(a[0])
    .map(c => a.map(r => r[c]))

export class Matrix {
  constructor(input) {
    this._rows = input.split('\n').map(r => r.split(' ').map(Number))
  }

  get rows() {
    return this._rows
  }

  get columns() {
    return transpose(this._rows)
  }
}
