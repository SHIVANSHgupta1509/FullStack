

function printTime(){
    console.log(new Date().getHours()+":"+ new Date().getMinutes()+":" + new Date().getSeconds());
}
setInterval(printTime,1000);