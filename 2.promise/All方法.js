let fs = require('fs');
function read(path, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding, function (err, data) {
      if (err) return reject(err);
      resolve(data);
    });
  })
}
function all(promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    let index =0;
    let processData = (key, y) => {
      index++
      result[key] = y;
      if (promises.length === index){
        resolve(result);
      }
    }
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(y => {
        processData(i, y);
      }, reject);
    }
  })
}
function race(promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(resolve, reject);
    }
  })
}
race([read('1.txt', 'utf8'), read('2.txt', 'utf8')]).then(data => {
  console.log(data);
}, err => {
  console.log(err);
})