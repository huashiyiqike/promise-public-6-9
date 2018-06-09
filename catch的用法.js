let Promise = require('./Promise')
let promise = new Promise((resove,reject)=>{
  reject('错误');
})
// 当前catch里只接受错误
promise.then(null).catch(err=>{
  console.log('2',err);
});

Promise.resolve('123').then(data=>{
  console.log(data);
})
// 实现promise finaly是如何实现的