var latest = require('path').join(__dirname, '2013.txt');
module.exports = require('fs').readFileSync(latest).toString();
