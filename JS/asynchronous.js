const fs=require('fs');
function sum(a){

    var sum=0;
    for(var i=0;i<=a;i++){
        sum+=i;
    }
    console.log(sum);
}
sum(10);sum(100);
const readFiles=fs.readFile("help.txt",'utf-8',isFileRead);
console.log("Hey, Am i before or after???!!");
function isFileRead(err,fileContent){
        if(err)console.log('error');
        else{
           sum(fileContent);
        }
}
sum(100);sum(100);sum(5);