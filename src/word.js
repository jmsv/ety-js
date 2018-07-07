import Language from './language'

export default class Word {
  constructor (word, language = 'eng', isSource = true) {
    if (typeof word !== 'string') {
      throw TypeError('word must be a string')
    }
    this.word = word

    if (language instanceof Language) {
      this.language = language
    } else {
      this.language = new Language(language)
    }

    this.isSource = !!isSource

    this._origins = {
      direct: [],
      recursive: []
    }
    this._id = '{this.word}:{this.language.iso}'
  }
}
