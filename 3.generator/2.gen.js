let blueBird =require('bluebird');
let fs = require('fs');
let read = blueBird.promisify(fs.readFile);
function* readMethod() {
  let data1 = yield read('1.txt','utf8');
  let data2 = yield read(data1,'utf8');
  return data2;
}
// function co(it) {
//   return new Promise((resolve, reject)=>{
//     // 异步调用的问题 
//     function next(data){
//       let { value, done } = it.next(data);
//       if(!done){
//         value.then(data => {
//           next(data)
//         }, reject)
//       }else{
//         resolve(value);
//       }
//     }
//     next();
//   })
// }
let co = require('co');
co(readMethod()).then(data=>{
  console.log(data);
})


// it.next().value.then(data => {
//   it.next(data).value.then(data => {
//     let { done, value } = it.next(data);
//     resolve(value);
//   })
// })

// 获取1.txt内容 2.txt 2.txt放的内容是最终的结果
