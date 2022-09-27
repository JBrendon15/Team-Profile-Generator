// imported Employee class to use as a superclass
const Employee = require('./Employee');
// creating a class Manager that is a subclass of Employee
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
        return this.officeNumber
    }
    // @override
    getRole(){
        return 'Manager';
    }
}
module.exports = Manager;