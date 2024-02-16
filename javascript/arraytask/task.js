// find a programme to large and small number of an array//
function maxAndMin(){
  
    let arr=[3,5,6,7,8];

    let max=Math.max(...arr);
    
    let min= Math.min(...arr);


console.log("large number is", +max);
console.log("small number is", +min);
}
maxAndMin()



// Function to reverse string 
function reversedString(str) { 
	const strRev = [...str].reverse().join(""); 
	console.log(strRev); 
} 


reversedString("HTML"); 
reversedString("JavaScript"); 
reversedString("Bootstrap"); 


