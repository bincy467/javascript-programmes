const prompt = require('prompt-sync')();
let age =parseInt(prompt("Ente a age"))
if(age<=10 && age<=20){
    console.log("age of person b/w 10 and 20");
}
else{
    console.log("age of a person greater than 20");
}