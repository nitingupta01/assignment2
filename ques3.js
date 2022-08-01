const promise = Promise.resolve("Success");
promise.then((val)=>{
    setTimeout(console.log(val),4000)
});