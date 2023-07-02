
setTimeout(printFunction,1*1000);

function printFunction(){
    console.log("I print!!!");
}

let counter=0;

function sum(counter){
      for(let i=1;i<10000;i++)counter++;
      return counter;
}

console.log(sum(counter));