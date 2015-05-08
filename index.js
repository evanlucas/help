var path = require('path')
  , fs = require('fs')

module.exports = function(file) {
  file = file || path.resolve('usage.txt')

  return function(code) {
    var rs = fs.createReadStream(file)
    rs.pipe(process.stdout)
    rs.on('close', function() {
      if (code) process.exit(code)
    })
  }
}
