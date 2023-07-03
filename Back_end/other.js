

fetch("http://localhost:3000/json2?a=1&b=4",{
    method:"POST"
}).then(cb);

function cb(result){
    result.json().then(responseBody);
}

function responseBody(jsonBody){
     console.log(jsonBody);
}

// function help(help2){
//     help2("123123");
// }

// function help2(arg){
//     console.log(arg);
// }

// help(printResponse);