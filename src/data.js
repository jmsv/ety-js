import fs from 'fs'
import path from 'path'

const dataDir = path.resolve(__dirname, '../data')

console.log('loadin datas')

var etymsFile = fs.readFileSync(dataDir + '/etymologies.json')
var etyms = JSON.parse(etymsFile)

var langsFile = fs.readFileSync(dataDir + '/iso-639-3.json')
var langs = JSON.parse(langsFile)

export { etyms, langs }
