const containsLetter = message => /[a-zA-Z]/.test(message)

const isYelling = message => containsLetter(message) && message === message.toUpperCase()

const isQuestion = message => message.endsWith("?")

const isYellingAQuestion = message => isYelling(message) && isQuestion(message)

const isSilence = message => message.length === 0

const cleanup = message => message.replace(/\s|\r|\t|\n/g, '')

export const hey = (message) => {
  message = cleanup(message)
  if (isYellingAQuestion(message)) return "Calm down, I know what I'm doing!"
  if (isYelling(message)) return "Whoa, chill out!"
  if (isQuestion(message)) return "Sure."
  if (isSilence(message)) return "Fine. Be that way!"

  return "Whatever."
}