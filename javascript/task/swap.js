let ar1 = [10, 20, 30, 40, 50]; 
console.log("Original array is:", ar1);
let temp = ar1[0]; 
ar1[0] = ar1[ar1.length - 1]; 
ar1[ar1.length - 1] = temp; 
console.log("Array after interchange:", ar1);
