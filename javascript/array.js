
// // forEach()-iterate over an arary+

 let a=[1,2,3,4,5];
 a.forEach((i)=>{
    console.log(i);
 })


// //destructure array
 
// let num=[1,2,3,4,5];
// console.log(num);
// let [b,c,d]=num;
// console.log(c);

// // convert array ointo string-toString()

// let aa=[1,2,3,45];
// let bb=aa.toString();
// console.log(bb);
// console.log(typeof(bb));

// // convert strig to array

// let ll="hello" ;
// let gg=ll.split();
// console.log(gg);
// console.log(typeof(gg));

// // join
 let rr=[1,2,3,4];

let dd=rr.join("h");

// // concta

//  let ee=[1,2,3,4];
//  let ff=[2,3,4,5];
//  console.log(ee.concat(ff));
console.log(ee.join(ff));

// // sort 
// let t=[3,6,8,2,9,0];
// console.log(t.sort());

// 

let com=[5,6,2,1,9,6];
console.log(com);
let cc=(a,b)=>{
    return a-b;
}


com.sort(cc);
console.log(com);

// reverse
let aa=[1,2,5,1,3,4]

console.log(aa.reverse());

// map

let bb=[1,2,3,4];
let mapped=bb.map(num=>num*num);
console.log(mapped);

// filter-even numbers

let fil=[12,2,3,44,56];
let ff=fil.filter(n=>n%2==0);
console.log(ff);

// call back function
function greet(name,callback){
    console.log("hello"+name);
    callback();
}
function saygoodbye(){
    console.log("goodbye");
}
greet("freena",saygoodbye);

// reduce-

// arry.reduce(function(){
    
// })

// sum of array

let arrr=[1,2,3,4];
let sum=arrr.reduce(function(acc,current){
    return acc+current
})


console.log(sum);

// find()- oru cllback functionlude condition chech chaiyunnu and then aa condition satisfy chaiyunn first element ennia print chaiyum 

let fi=[1,2,3,4,6,9,6,]
let i=fi.find(num=>num%2==0);
console.log(i);

// isArrayof - to check whether the variable is array or not
let ee =Array.isArray(fi);
console.log(ee);

// indexof-

let inn=[1,2,3,4,55,6,7];
console.log(inn.indexOf(55));







