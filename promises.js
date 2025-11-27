// let p = new Promise((resolve,reject)=>{
//     let a = 1+1
//     if(a==2){
//         resolve("success")
//     }
//     else{
//         reject("failed")
//     }
// })//promise logic


// //what to do with the promise, meaning the actual execution 
// p.then((msg)=>{
//     console.log("This is in the then "+msg)
// }).catch((msg)=>{
//     console.log("This is in the catch "+msg) 
// })

// let watching = true
// function watchingYt(){
//     return new Promise((resolve,reject)=>{
//           if(watching==true)
//             resolve("yea nigga watchin tha shi")
//         else
//             reject("nahh nigga tripping")
//     })
// }

// watchingYt().then((msg)=>{
//     console.log(msg)
// }).catch((msg)=>{
//     console.log(msg)
// })

const doit = new Promise((resolve,reject)=>{
    resolve('did it')
})

const doit1 = new Promise((resolve,reject)=>{
    resolve('did it second time')
})

Promise.all([
    doit,doit1
]).then((msg)=>{
    console.log(msg);
    
})
//this is all that i learned from today ahh i seee
rm -f .git/index.lock
