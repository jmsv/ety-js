import { langs } from './data'

export default class Language {
  constructor (iso = 'eng') {
    this.iso = iso

    if (!langs[iso]) {
      throw Error(`Language with iso code '${iso}' unknown`)
    }
    this.name = langs[iso]
  }
}
