function Promise() {
  
}
Object.defineProperty(Promise.prototype,'then',{
  get(){
    throw new Error();
  }
})
let p = new Promise();
console.log(p.then)
