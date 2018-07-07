import Word from './word.js'

export { Word }

export const getWord = (word, language = 'eng') => {
  return new Word(word, language)
}
