


// // variales 

// // let 
// // const
// // var 

// // var a =6;
// // var a=10;
// // console.log(a);

// let b=5;
// {
//      b=10;
// }

// console.log(b);

// // changing values

// let message = "Hello";
// message = 'Bye';
// console.log(message);


// let a=5;
//  a=a-'hi';
// console.log(a);
// console.log(typeof(a));
// let c='5'
// console.log(typeof(c));
// console.log('5'+'2'); 
 
let a=10;
let b=6;
if(a>b){
console.log("a is gretar");
}
else{
     console.log("b is greater");
}

let obj={
     name:"ghgh",
     age:12,
     place:"ddsd",
     address:{
          street:"ddd",
          phone:23455667
     }
}
// console.log(obj);
// console.log(obj.place);
// console.log(obj.address);
// console.log(obj.address.phone);

// for in -obj

for(let values in obj){
     console.log(values,obj[values]);
}

// for ..of-array,object,string,set

let ar=["freena","vdfs","ssss"];
for(let a of ar){
     console.log(a);
}
