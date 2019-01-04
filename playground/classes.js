//  ES6
class Human {
    constructor() {
        this.gender = 'male';
    }
    printGender () {
        console.log(this.gender);
    }
}
class Person extends Human {
    constructor() {
        super();
        this.name = 'max';

    }
    printName() {
        console.log(this.name);
    }
}
//  ES6

//  ES7 transpile using babel es6
class Human {
    gender = 'male';
    printGender = () => {
        console.log(this.gender);
    }
}
class Person extends Human {
    name = 'max';
    printName = () => {
        console.log(this.name);
    }
}


/**
 * properties are variables attached to a class
 * methods are functions attached to a class
 * */
let result;
result = new Person();
 console.log(result.printGender());
 