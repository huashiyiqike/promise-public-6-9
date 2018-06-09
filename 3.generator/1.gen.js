// 生成器返回的是迭代器

// 迭代器：迭代器必须返回一个对象对象里有一个next方法，没调用一次next方法
// 就可以返回一个对象 done是否迭代完成 value迭代的结果
// let arr = { 0: 1, 1: 2, length: 2 ,[Symbol.iterator]:function () {
//   let len = this.length;
//   let index = 0;
//   let that = this;
//   return {
//     next(){
//       return { done: index === len, value: that[index++]}
//     }
//   }
// }};
//  generator 必须要有*  配合yeild ,碰到yield 就停止，再次调用next就继续走
// 当遇到return时就迭代完成了
// 第一个next传递参数是没有效果的
// 第二次next传递的参数 是第一次yield的返回值
function * thing() {
  let a = yield 1;
  console.log(a);
  let b = yield 2;
  console.log(b);
  return b;
}
let it = thing();
console.log(it.next());
console.log(it.next('2000'));
console.log(it.next('4000'));

// generator + co


// let arr = {
//   0: 1, 1: 2, length: 2, [Symbol.iterator]: function *() {
//     let index = 0;
//     function next(index) {
//       yield this[index]
//     }
//     next(index);
//   }
// };
// for (let item of arr) {
//   console.log(item)
// }
