export class GradeSchool {

  constructor() {
    this.list = {}
  }

  roster() {
    return JSON.parse(JSON.stringify(this.list)) // return a deep copy
  }

  add(name, grade) {
    if (this.list[grade]) {
      this.list[grade].push(name)
      this.list[grade].sort()
    } else {
      this.list[grade] = [name]
    }
  }

  grade(grade) {
    return Array.from((this.list[grade] || []))
  }
}
