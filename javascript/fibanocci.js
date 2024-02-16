const prompt = require('prompt-sync')();
let n=parseInt(prompt("Enter a number"));
let a=0;
let b=1;
let c;
console.log(a);
console.log(b);
for(let i=2; i<n; i++){
    c=a+b;
    console.log(c);
    a=b;
    b=c;
}
