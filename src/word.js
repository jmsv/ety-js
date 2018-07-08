import Language from './language'
import { etyms } from './data'

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
    this._id = `${this.word}:${this.language.iso}`
  }

  origins (recursive = false) {
    let search = 'direct'
    if (recursive) {
      search = 'recursive'
    }
    if (!(this.language.iso in etyms) | !(this.word in etyms[this.language.iso])) {
      return []
    }

    let roots = []

    etyms[this.language.iso][this.word].forEach(root => {
      Object.entries(root).forEach(element => {
        roots.push(new Word(element[0], element[1]))
      })
    })

    let tracked = roots.slice()

    if (recursive) {
      for (var root in tracked) {
        for (var child in root.origins()) {
          if (!(child in tracked) & child !== this) {
            tracked.push(child)
          }
        }
      }
    }

    this._origins[search] = tracked
    return this._origins[search]
  }
}
