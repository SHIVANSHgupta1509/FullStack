
const cart=["A2 Ghee","Castor Oil","Rustic Art Sandalwood Facewash"];

const promise=createOrder(cart,"12345");

promise.then(proceedToPay(orderID));



function createOrder(cart,orderID){

    const promise=new Promise(function(resolve,reject){

        if(!validate(cart)){
            const err=new Error("Cart is invalid");
            reject(err);
        }
        if(orderID!="12345"){
            const err=new Error("Wrong OrderID");
            reject(err);
        }
        if(orderID){
            setTimeout(function(){
                resolve(orderID);
            },1000)
        }
        
    })
    return promise;
}

function validate(cart){
    if(cart.length==3)return true;
    return false;
}

function proceedToPay(orderID){
    return new Promise(function(resolve,reject){
        resolve({mesage:`Payement success for orderID $(orderID)`})
    })

    
}