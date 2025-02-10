const fs=require('fs');
//CB means call back
function dataWriteCB()
{
fs.writeFile("data.pdf","Hello writing pdf file data",(err)=>{
if(err)
{
    console.log("Error while writing in file"+err);
}
console.log("Data written successfully");
});

console.log("Resources closed");
}
function dataReadCB()
{
fs.readFile("Data.pdf",{encoding:'utf-8'},(err,data)=>{
    if(err)
    {
        console.log("Error while reading the file"+err);
    }
    console.log(data);
})
}
const obj={
    dataWriteCB:dataWriteCB,
    dataReadCB:dataReadCB
}
module.exports=obj;