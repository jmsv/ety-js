import Word from './word.js'
import Language from './language.js'

export { Word, Language }

const getSourceWord = (word, wordLang) => {
  if (word instanceof Word) {
    return word
  }
  return new Word(word, wordLang, true)
}

export const origins = (word, wordLang = 'eng', recursive = false) => {
  let sourceWord = getSourceWord(word, wordLang)
  return sourceWord.origins(recursive)
}
