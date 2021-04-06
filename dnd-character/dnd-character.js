export const abilityModifier = value => {
  if (value < 3) throw Error("Ability scores must be at least 3")
  if (value > 18) throw Error("Ability scores can be at most 18")

  return Math.floor((value - 10) / 2)
}

export class Character {
  constructor() {
    this.strength = Character.rollAbility()
    this.dexterity = Character.rollAbility()
    this.constitution = Character.rollAbility()
    this.intelligence = Character.rollAbility()
    this.wisdom = Character.rollAbility()
    this.charisma = Character.rollAbility()
  }

  static rollAbility() {
    return Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1)
      .sort()
      .slice(1, 4)
      .reduce((a, b) => a + b, 0)  }

  get hitpoints() {
    return 10 + abilityModifier(this.constitution)
  }
}
