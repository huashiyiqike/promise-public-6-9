// 1).函数返回函数 柯里化 偏函数...

// 判断内容的类型
// Object.prototype.toString.call('aaa') = '[object Null]'

// 判断类型 有四种 constructor typeof instanceof Object.prototype.toString
// function isType(content,Type) {
//   let str = Object.prototype.toString.call(content).replace(/\[object\s|\]/g,'');
//   return Type === str;
// }
// let result = isType('hello','Srting');
function isType(type) {
  return function (content) {
    let str = Object.prototype.toString.call(content).replace(/\[object\s|\]/g, '');
    return type === str;
  }
}
let util = {};
let type = ['String','Object','Null','Function'];
type.forEach((item)=>{
  util['is'+item] = isType(item);
})
console.log(util.isString('hello'));


// 2).回调函数(不一定是异步的)
// 预置参数 lodash after
function after(times,callback) {
  return function () {
    if(--times === 0){
      callback()
    }
  }
}
let eat = after(2,function () {
  console.log('吃完了')
});
eat();
eat();