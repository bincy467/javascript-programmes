let n=4;
let str="";

for(i=0; i<=n;i++){
   
    for(j=1;j<n-1;j++){
        
        str+=" ";
    }
    for(k=0;k<i;k++){
        str+="* ";
       
    }
    str+="\n";
}

console.log(str);


