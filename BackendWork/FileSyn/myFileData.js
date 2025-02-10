const fs=require('fs');
function myWriteFile()
{
    try{
        console.log("Before Writing");
fs.writeFileSync("data.txt","data is written by nodejs");
console.log("Data written successfully");
    }
    catch(err)
    {
        console.log("Error in writing the data:"+err);
    }
}
function myReadFile()
{
    try{
        console.log("Before Reading")
const rd=fs.readFileSync("data.txt",{encoding:'utf-8'});
console.log(rd);
    }
    catch(err)
    {
        console.log("Error in raeding data"+err);
    }
}
function myAppendFile()
{
    try{
        console.log("After reading")
console.log("Before append")
fs.appendFileSync("data.txt","Appended data by fs module");
console.log("After Append");
console.log(rd);
    }
    catch(err)
    {
        console.log("Error in appending data"+err);

    }
}

//to delete a file

function deleteMyFile()
{
    try{
        fs.unlinkSync("data.txt");
console.log("file deleted");
    }
    catch(err)
    {
        console.log("Error in deleting data"+err);

    }
}
const obj={
    write:myWriteFile,
    read:myReadFile,
    append:myAppendFile,
    Delete:deleteMyFile,


}
module.exports=obj;


