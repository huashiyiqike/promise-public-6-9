let Promise = require('./Promise');
let promise = new Promise((resolve,reject)=>{
  reject('hello');
});
// 成功不写的时候 默认就是value => value
// 失败不写默认返回 err=>{throw err}
promise.then().then(data=>{
  console.log(data);
},err=>{
  console.log('err',err);
})

