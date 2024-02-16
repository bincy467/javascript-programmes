const prompt = require('prompt-sync')();
let a=parseInt(prompt("Enter a number"));
b=5;


switch(3){
    case 1:"+";
    console.log(a+b);
    break;
    case 2:"-";
    console.log(a-b);
    break;
    case 3:"*";
    console.log(a*b);
    break;
    case 4:"/";
    console.log(a/b);
    break;
    default:
        console.log("invalid");
}