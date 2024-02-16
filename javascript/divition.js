const prompt = require('prompt-sync')();
let x=parseInt(prompt("Ente a number:"))
if(x%2==0){
    console.log("Divisible by 2");
}
else if (x%3==0){
    console.log("divisible by 3");
}