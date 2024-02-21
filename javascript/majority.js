let arr=[1,2,3,4,4,3,3];

let length=arr.length;

for(let i=0; i<length; i++){
    
    for(let j=i+1; j<length; j++){

        if (arr[i]===arr[j]){

        console.log(arr[j]);
}
}
}
