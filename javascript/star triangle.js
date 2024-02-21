let n =5;
let star='';
for(i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
    star+="*";
    }
    star +='\n';
}
console.log(star);



let m=5;
for(let i=1;i<=m;i++){
    let str =" * ";
    let space ='';
    console.log(str.repeat((m-i))+space.repeat(i));
}




