const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve();
    },4000);
});
promise.then(()=>{
    console.log("success");
});
