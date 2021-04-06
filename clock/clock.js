const pad = s => String(s).padStart(2, '0')

export class Clock {

  constructor(h = 0, m = 0) {
    let totalMinutes = m + h * 60

    while (totalMinutes < 0) {
      totalMinutes += 1440
    }

    this.minutes = totalMinutes % 1440
  }

  toString() {
    return `${pad(Math.trunc(this.minutes/60))}:${pad(this.minutes%60)}`
  }

  plus(m) {
    return new Clock(0, this.minutes + m)
  }

  minus(m) {
    return new Clock(0, this.minutes - m)
  }

  equals(clock) {
    return clock.minutes === this.minutes
  }
}
