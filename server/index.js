const fs = require('fs')
const path = require('path')
const template = fs.readFileSync(path.resolve(__dirname, '../src/index.html'))
console.log(template.toString())
