// npm install bluebird

let bluebird = require('bluebird');
let fs = require('fs');
function promisifyAll(obj) {
  Object.keys(obj).forEach(item=>{
    if (typeof obj[item] === 'function'){
      // 把每一个函数 都promise化一下 ，每个方法都会多一个promise的方法
      obj[item + 'Async'] = promisify(obj[item]);
    }
  });
}
promisifyAll(fs);
function promisify(readFile) {
  return function (...args) {
    return new Promise((resolve,reject)=>{
      readFile(...args,function (err,data) {
        if(err) reject(err);
        resolve(data);
      })
    });
  }
}
// let read = promisify(fs.readFile); // 就会返回一个promise方法
fs.readFileAsync('1.txt','utf8').then(data=>{
  console.log(data);
})