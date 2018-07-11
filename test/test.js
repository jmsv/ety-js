var expect = require('chai').expect
var ety = require('../dist/ety.cjs')

describe('ety', function () {
  describe('Word origins method', function () {
    it('finds batata origin for potato', function () {
      let batataFound = false

      ety.origins('potato').forEach(function (origin) {
        if (origin.word === 'batata') {
          batataFound = true
        }
      })

      expect(batataFound).to.equal(true)
    })
  })

  describe('Language class', function () {
    it('resolves language name from iso code', function () {
      let langEng = new ety.Language('eng')
      expect(langEng.name).to.equal('English')

      let langLat = new ety.Language('lat')
      expect(langLat.name).to.equal('Latin')
    })
  })
})
