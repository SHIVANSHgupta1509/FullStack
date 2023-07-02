
let counter=0;

function print(){
  console.clear();
  counter++;
  console.log(counter);
}
setInterval(print,1000);

let counter2=1;

function sum(counter2){
    for(let i=0;i<1000;i++)counter2++;
    return counter2;
}

console.log(sum(counter2));