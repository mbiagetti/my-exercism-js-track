const orbitalPeriod = {
  earth: 1,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
}

const EARTH_ORBITAL_PERIOD = 31557600

const roundToTwo = x => Number(x.toFixed(2))

export const age = (planet, seconds) => roundToTwo( seconds / EARTH_ORBITAL_PERIOD / orbitalPeriod[planet] )