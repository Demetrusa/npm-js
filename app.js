var dataUriToBuffer = require('data-uri-to-buffer');

// plain-text data is supported
var uri = 'data:,Hello%2C%20World!';
var decoded = dataUriToBuffer(uri);
console.log(decoded.toString());
// 'Hello, World!'