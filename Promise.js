class Promise {
  constructor(executor) {
    this.status = 'pending';
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];
    let resolve = (value) => {
      if (this.status === 'pending') {
        this.status = 'resolved';
        this.value = value;
        this.onResolvedCallbacks.forEach(fn => fn());
      }
    }
    let reject = (reason) => {
      if (this.status === 'pending') {
        this.status = 'rejected';
        this.reason = reason;
        this.onRejectedCallbacks.forEach(fn => fn());
      }
    }
    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e); // 如果出现异常就走错误处理
    }
  }
  then(onFufilled, onRejected) {
    let promise2;
    promise2 = new Promise((resolve, reject) => {
      if (this.status === 'resolved') {
        let x = onFufilled(this.value);
        resolvePromise(promise2, x, resolve, reject);
      }
      if (this.status === 'rejected') {
        let x = onRejected(this.reason);
        resolvePromise(promise2, x, resolve, reject);
      }
      if (this.status === 'pending') {
        this.onResolvedCallbacks.push(() => {
          let x = onFufilled(this.value);
          resolvePromise(promise2, x, resolve, reject);
        });
        this.onRejectedCallbacks.push(() => {
          let x = onRejected(this.reason);
          resolvePromise(promise2, x, resolve, reject);
        })
      }
    });
    return promise2;
  }
}
// 实现多套promise共用的情况
function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new TypeError('循环引用'));
  }
  // {then:{}}
  let called;
  if (x != null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      let then = x.then; // 如果是对象 我就试着取一下then方法
      if (typeof then === 'function') { // 就是promise了
        then.call(x, y => {
          // 成功和失败只能调用一个
          if (called) return;
          called = true;
          // resolve的结果依旧是promise 那就继续解析
          resolvePromise(promise2,y,resolve,reject);
        }, r => {
          if (called) return;
          called = true;
          reject(r);// 失败了就失败了
        })
      } else {
        resolve(x); // 直接成功即可
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e); // 取then出错了那就不要在继续执行了
    }
  } else {
    resolve(x);
  }
}
module.exports = Promise;

