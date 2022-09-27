// imported Employee class to use as a superclass
const Employee = require('./Employee');
// creating a class Engineer that is a subclass of Employee
class Engineer extends Employee {
    constructor(name, id, email, github){
       super(name, id, email)
       this.github = github; 
    }
    getGithub(){
        return this.github
    }
    // @override
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;