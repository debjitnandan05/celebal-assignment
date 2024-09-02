//---------- Callback Function ------------
const getResult = ()=>{
setTimeout(()=>{
    console.log('Async Task is completed');
},3000)
}
getResult();

//--------- Promises ---------------
// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('Async Task is completed');
//         resolve();
//     },3000)
// })

// promise1.then(()=>{
//     console.log("Promise Resolve");
// })
// .catch((err)=>{
//     console.log("Error : ",err);
// })

//----------- Async/Await -----------

// const getResult = async ()=>{
//     const result = await setTimeout(()=>{
//         console.log('Async Task is completed');
//     },3000)
// }
// getResult();
// console.log('Hello world');
