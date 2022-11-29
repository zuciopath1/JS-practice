function myAsyncFunction(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve('resolve world')
        }, 1000);
        // resolve('resolve world');
        // reject('reject world');
    });
}

myAsyncFunction().then((response =>{
    console.log('response',response);
})).catch((err) =>{
    console.log('catch',err)
})