//-----------------------------file system using NodeJS----------------------------------------

const fs = require('fs');

//-------------- file creation -------------------

// 1. sync
fs.writeFileSync('./new1.txt','This is the new File (Sync).');

// 2. Async
// fs.writeFile('./new1.txt','This is the new file (Async).',(err)=>{
//     if(err) throw err;
//     console.log('file created');
// });


//------------- file read -------------------------

// 1. sync --> It returns a result
// const r = fs.readFileSync('./new1.txt','utf-8');
// console.log(r);

// 2. Async --> It does not return a result
// fs.readFile('./new1.txt','utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log("Data : ",data);
// })


//-------------- file update ----------------------

// 1. sync
// fs.appendFileSync('./new1.txt', 'File Updated Synchronously.');

// 2. Async
// fs.appendFile('./new1.txt', 'File Updated Asynchronously.',(err)=>{
//     if(err) throw err;
//     console.log('File Updated');
// });

//---------------- file delete ---------------------

// 1. sync
// fs.unlinkSync("new1.txt");