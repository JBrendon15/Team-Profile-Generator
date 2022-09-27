// imported Employee class to use as a superclass
const Employee = require('./Employee');
// creating a class Intern that is a subclass of Employee
class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    // @override
    getRole(){
        return 'Intern';
    }
}
module.exports = Intern;