// creating a class Employee with a constructor and needed methods
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // methods to capture the values of user input
    getName() {
        return this.name
    } 
    getId() {
        return this.id
    } 
    getEmail() {
        return this.email
    } 
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;