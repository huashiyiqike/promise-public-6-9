// 就是一个语法糖
let blueBird = require('bluebird');
let fs = require('fs');
let read = blueBird.promisify(fs.readFile);
async function readMethod() {
  let data1 = await read('1.txt', 'utf8');
  let data2 = await read(data1, 'utf8');
  return data2;
}
readMethod().then(data=>{
  console.log(data);
});