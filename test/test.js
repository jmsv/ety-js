var expect = require('chai').expect
var ety = require('../dist/ety.cjs')

describe('ety', function () {
  describe('getWord method', function () {
    it('gets a word', function () {
      var word = ety.getWord('potato')
      expect(word.word).to.equal('potato')
    })

    it('defaults language to eng', function () {
      var word = ety.getWord('omnibus')
      expect(word.language.iso).to.equal('eng')
    })
  })
})
