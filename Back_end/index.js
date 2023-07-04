const express = require('express')
const bodyParser=require('body-parser');
const app = express()
const port = 3000

 app.use(bodyParser.json());
// function middleware (req,res,next){
//      if(req.headers.a>=1 && req.headers.b>=2){
//       next();
//      }
//      else{
//       res.status(404).send("Error found please input valid numbers.");
//      }
// }

// app.use(middleware);

app.get('/', (req, res) => {
  
  let a=req.query.a;
  let b=req.query.b;
  a=parseInt(a,10);
  b=parseInt(b,10);
  let sum=0;
  for(let i=a;i<=b;i++)sum=sum+i;
  let ans="the sum is "+sum;
  res.send(ans);
})

app.post('/',(req,res)=>{
  
  console.log(req.headers);
  let a=req.headers.a;
  let b=req.headers.b;
  a=parseInt(a,10);
  b=parseInt(b,10);
  let sum=0;
  for(let i=a;i<=b;i++)sum=sum+i;
  let ans="the sum is "+sum;
  res.send(ans);


})

app.post('/info',(req,res)=>{
  console.log(req.body);
  res.send("Hey");
})

app.post('/json',(req,res)=>{
  var a=req.body.a;
  var b=req.body.b;
  a=parseInt(a,10);
  b=parseInt(b,10);
  let sumIs=calSum(a,b);
  let mulIs=calMul(a,b);
  let ansObj={
    "sum":sumIs,
    "mul":mulIs
  }

  res.send(ansObj);
})
app.post('/json2',(req,res)=>{
  var a=req.query.a;
  var b=req.query.b;
  a=parseInt(a,10);
  b=parseInt(b,10);
  let sumIs=calSum(a,b);
  let mulIs=calMul(a,b);
  let ansObj={
    "sum":sumIs,
    "mul":mulIs
  }

  res.send(ansObj);
})

app.get('/html',(req,res)=>{
      // res.send(`<html>
      // <head><title>I am here</title></head>
      // <body><b>Hey!!</b></body> 
      // </html>`)
      res.sendFile(__dirname + "/index.html");
})

function calSum(a,b){
  let sum=0;
  for(let i=a;i<=b;i++)sum+=i;
  return sum;
}
function calMul(a,b){
  let mul=1;
  for(let i=a;i<=b;i++)mul*=i;
  return mul;
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})











