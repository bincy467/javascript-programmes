const prompt = require('prompt-sync')();
a=parseInt(prompt("Enter a number"))
for(let i=1; i<=10;i++){

    let result=i*a;
    console.log(`${a}*${i}=${result}`);
}