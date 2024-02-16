const prompt = require('prompt-sync')();
let a=parseInt(prompt("Enter a number"));
let fact=1;
for(let i=1;i<=a ;i++){
    fact=fact*i;

}
console.log("fact="+fact);