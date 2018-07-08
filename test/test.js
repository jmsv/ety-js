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
})
