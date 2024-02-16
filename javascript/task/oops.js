let car= {
    name:"audi",
    model:2023,


}
console.log(car.name);

class person{
    
   constructor( name,place,contact){
    this.name=name
    this.place=place;
    this.contact=contact
   }
}

let a=new person("freena","pkd",3443535);
let b=new person("sisira","pkd",9876554)
console.log(a);
console.log(b);
console.log(a.name);


//prototype

class employee{
    constructor(name,place,salary){
        this.name=name;
        this.place=place;
        this.salary=salary
    }
    employeedetails(){
        console.log("name"+this.name);
        console.log("place"+this.place);
        console.log("salary"+this.salary);
    }
    showDetails(){
        console.log("my name is"+this.name,"i am from"+this.place,"and my salary is"+this.salary);
    }
}
let b1=new employee("bincy","pkd")
b1.showDetails()