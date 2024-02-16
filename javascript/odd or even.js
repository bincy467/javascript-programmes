const prompt = require('prompt-sync')();
let x=parseInt(prompt("Ente a number"))
if(x%2==0){
    console.log("even");
}
else{
    console.log("odd");
}