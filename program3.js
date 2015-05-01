var fs = require('fs')
var str = fs.readFileSync(process.argv[2]).toString()
var str_arr = str.split('\n')
console.log(str_arr.length-1)
