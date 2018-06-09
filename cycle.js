
let promise = new Promise((resolve,reject)=>{
  resolve();
})
// 自己等自己 因为既没有调用resolve 也没有调用reject，那就卡住了
let p2 = promise.then(data=>{
  return p2;
})
p2.then(null,err=>{
  console.log('err',err);
})