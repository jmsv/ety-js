import Word from './word.js'

export const getWord = (word, language = 'eng') => {
  return new Word(word, language)
}
