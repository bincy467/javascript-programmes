// person.mjs
export class Person {
    constructor(name, place) {
        this.name = name;
        this.place = place;
    }

    greet() {
        console.log("My name is " + this.name + " and my place is " + this.place);
    }
}
