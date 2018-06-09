class Promise {
  constructor(executor) {
    // 默认的状态
    this.status = 'pending';
    // 原因
    this.value = undefined;
    this.reason = undefined;
    // 成功存放的数组 
    this.onResolvedCallbacks = [];
    // 失败存放的数组
    this.onRejectedCallbacks = [];
    // 默认让执行器执行
    let resolve = (value) => {
      if(this.status === 'pending'){
        this.status = 'resolved'; // 成功了
        this.value = value;
      }
    }
    let reject = (reason) => {
      if (this.status === 'pending') {
        this.status = 'rejected'; // 失败了
        this.reason = reason;
      }
    }
    executor(resolve,reject);
  }
  then(onFufilled,onRejected){
    if(this.status === 'resolved'){
      onFufilled(this.value);
    }
    if (this.status === 'rejected') {
      onRejected(this.reason);
    }
  }
}
module.exports = Promise;