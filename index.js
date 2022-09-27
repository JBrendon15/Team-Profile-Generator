// imports all the neccessary packages
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./src/generateHTML');
// array for prompts to get user input on manager role
const managerQuestions =[
    {
        type: 'input',
        message: `What is the team manager's name?`,
        name: 'managerName'
    },
    {
        type: 'input',
        message: `What is the team manager's id?`,
        name: 'managerId'
    },
    {
        type: 'input',
        message: `What is the team manager's email?`,
        name: 'managerEmail'
    },
    {
        type: 'input',
        message: `What is the team manager's office number?`,
        name: 'managerOffice'
    },
    {
        type: 'list',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', `I don't want to add any more team members.`],
        name: 'addMember'
    }
];
// array for prompts to get user input on engineer role
const engineerQuestions = [
    {
        type: 'input',
        message: `What is your engineer's name?`,
        name: 'engineerName'
    },
    {
        type: 'input',
        message: `What is your engineer's id?`,
        name: 'engineerId'
    },
    {
        type: 'input',
        message: `What is your engineer's email?`,
        name: 'engineerEmail'
    },
    {
        type: 'input',
        message: `What is your engineer's Github username?`,
        name: 'engineerGit'
    },
    {
        type: 'list',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', `I don't want to add any more team members.`],
        name: 'addMember'
    }
];
// array for prompts to get user input on intern role
const internQuestions = [
    {
        type: 'input',
        message: `What is your intern's name?`,
        name: 'internName'
    },
    {
        type: 'input',
        message: `What is your intern's id?`,
        name: 'internId'
    },
    {
        type: 'input',
        message: `What is your intern's email?`,
        name: 'internEmail'
    },
    {
        type: 'input',
        message: `What is your intern's school?`,
        name: 'internSchool'
    },
    {
        type: 'list',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', `I don't want to add any more team members.`],
        name: 'addMember'
    }
];
// array to store all team members that user created
const fullTeam = [];
// function that runs when application is started, captures values and saves them to specific keys, if else conditions to determine if prompts need to be run for different roles or generate HTML file when all roles are complete
function init (){
    inquirer
        .prompt(managerQuestions)
        .then(({managerName, managerId, managerEmail, managerOffice, addMember}) => {
            fullTeam.push(new Manager(managerName, managerId, managerEmail, managerOffice))
            if(addMember === 'Engineer'){
                getEngineer();
            }
            else if(addMember === 'Intern'){
                getIntern();
            }
        else{
            fs.writeFile('./dist/team.html', generateHtml(fullTeam), (err) =>
                err ? console.error(err) : console.log('Team was successfully saved.'))
        }
        })
};
// function that runs when user inputs that they want to add an engineer to the team
function getEngineer(){
    inquirer
    .prompt(engineerQuestions)
    .then(({engineerName, engineerId, engineerEmail, engineerGit, addMember}) =>
    {fullTeam.push(new Engineer(engineerName, engineerId, engineerEmail,engineerGit))
    if(addMember === 'Engineer'){
        getEngineer();
    }
    else if(addMember === 'Intern'){
        getIntern();
    }
    else{
        fs.writeFile('./dist/team.html', generateHtml(fullTeam), (err) =>
            err ? console.error(err) : console.log('Team was successfully saved.'))
    }
    })
}
// function that runs when user inputs that they want to add an intern to the team
function getIntern(){
    inquirer
    .prompt(internQuestions)
    .then(({internName, internId, internEmail, internSchool, addMember}) =>
    {fullTeam.push(new Intern(internName, internId, internEmail, internSchool))
    if(addMember === 'Engineer'){
        getEngineer();
    }
    else if(addMember === 'Intern'){
        getIntern();
    }
    else{
        fs.writeFile('./dist/team.html', generateHtml(fullTeam), (err) =>
            err ? console.error(err) : console.log('Team was successfully saved.'))
    }
    })
}
// function call to start the application
init();