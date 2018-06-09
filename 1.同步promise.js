let Promise  = require('./Promise')
let promise = new Promise((resolve, reject) => {
  setTimeout(()=>{
    resolve('买');
  })
});
promise.then((data) => {
  console.log('data', data);
}, (err) => {
  console.log('err', err);
});
promise.then((data) => {
  console.log('data', data);
}, (err) => {
  console.log('err', err);
});
