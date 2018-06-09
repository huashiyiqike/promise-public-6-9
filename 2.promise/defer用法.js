let fs = require('fs');
// Q库
let Promise = require('./Promise.js');
function read(path, encoding) {
  let dfd = Promise.defer();
  fs.readFile(path, encoding, function (err, data) {
    if (err) return dfd.reject(err);
    dfd.resolve(data);
  });
  return dfd.promise;
}

read('1.txt','utf8').then(data => {
  console.log(data);
})