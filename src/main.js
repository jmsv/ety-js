import Word from './word.js'

export const getWord = (word, language = 'eng') => {
  return Word(word, language)
}
