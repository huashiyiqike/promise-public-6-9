// 1) 解决回调地狱

let fs = require('fs');
function read(path, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding, function (err, data) {
      if (err) return reject(err);
      resolve(data);
    });
  })
}
// 成功的回调 或者失败的回调执行后可以返回一个promise
// 会将这个promise的执行结果传递给下一次then中
// 如果返回一个普通的值 ，会将这个普通值传递倒下一次then的成功的参数
read('./1.txt', 'utf8').then(data => {
  return read(data, 'utf8')
}).then(data => {
  return [data];
}).then(data=>{
  console.log(data);
}).then(data=>{
  console.log(data);
  throw new Error('xxx');
}).then(null,err=>{
  console.log(err);
}).then(data=>{
  console.log('成功');
}).catch(err=>{
  console.log(err)
})

