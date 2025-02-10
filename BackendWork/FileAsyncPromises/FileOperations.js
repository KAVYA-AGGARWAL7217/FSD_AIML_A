const fs=require('fs').promises;
// const promise=fs.writeFile("data.txt","Hello,Writing data through FS promises module",{encoding:'Utf-8'});
// promise.then(()=>{
//     console.log("Data written successfully");
// }).catch(err=>{
//     console.log("Error is"+err)
// }).finally(msg=>{
//     console.log("Finally done");
// })
const ReadPromise=fs.readFile("data.txt",{encoding:'utf-8'});


ReadPromise.then((data)=>{
    // console.log(data);
    console.log("Data readed successfully",data);
}).catch(err=>{
    console.log("error is"+err);
}).finally(msg=>{
    console.log("Finally Readed");
})
