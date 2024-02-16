// function block of code to do particular task


// function declaration, 
// function expression/anonymous,
// arrow function 
// callback function


// syntax

// function funcname(){
//     stmt
// }
// funcname()





// function hello(){   //declare
//     console.log('hi');
// }
// hello() //function call

// passing parameters to function
function sum(a,b){  //parameters
    return a+b;
}
let res=sum(5,6);   //arguments
console.log(res);

// function expression/anonymous function

let add=function(x,y){
   return x-y
}
let result=add(5,6);
console.log(result);



// arrow function-es6 function , =>

let sub=(p,q)=>{
    return p-q
}
console.log(sub(8,7));

let mul=(r,s)=>r*s
console.log(mul(5,6));

