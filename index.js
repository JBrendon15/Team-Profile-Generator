const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./src/generateHTML');
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
const fullTeam = [];
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
init();