// 我们可以引用一个模块 操作文件
let fs = require('fs');
// 1) 异步方法如果出错了不能捕获try/catch错误
// 2) 获取的结果不能通过return返回
// 3) 回调函数可能会产生 (回调地狱)
// 相当于两个异步请求 有关系 关系是第二个请求 是依赖于第一个的
// 问题1：
// fs.readFile('./1.txt', 'utf8', function (err, a) { // error-first
//   fs.readFile('./2.txt', 'utf8', function (err, b) { // error-first
//     console.log(a, b)
//   });
// });
// 问题2:
// 两个异步请求 同时拿到两个异步请求的结果 
// after,发布订阅
// function after(times,callback) {
//   let arr = [];
//   return function (data) { // args = [1,2,3]
//     arr.push(data);
//     if(--times === 0){
//       callback(arr);
//     }
//   }
// }
// let out = after(2,function (data) { // []
//   console.log(data);
// });
// 发布(这件事发生时 我要依次执行) 订阅(我预先想到的事)
let events = {
  cbs:[],
  results:[],
  on(cb){
    this.cbs.push(cb);
  },
  emit(data){
    this.results.push(data);
    this.cbs.forEach(fn => fn(this.results))
  }
}
events.on(function (data) { // 订阅的过程
  if(data.length === 2){
    console.log(data);
  }
})
events.on(function () { // 订阅的过程
  console.log('很棒');
})
fs.readFile('./1.txt', 'utf8', function (err, a) {
   events.emit(a);
});
fs.readFile('./2.txt', 'utf8', function (err, b) {
  events.emit(b);
});

// promise (可以解决回调问题) 不需要回调
// axios fetch 基于promise