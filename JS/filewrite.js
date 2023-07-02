const fs=require('fs');

let data='Mai kuch bi likh donga file banake';
fs.writeFile('bandifile.txt',data,'utf-8',callBack);
function callBack(err){
    if(err)console.log('error aya');
    else{
        console.log("file banadi");
    }
}