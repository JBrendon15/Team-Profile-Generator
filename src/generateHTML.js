const fs = require('fs');

function generateCards(fullTeam){
    return fullTeam.map(member => {
        if(member.getRole() === 'Manager'){
           return `
           <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${member.name}</h5>
                    <p class="card-text">${member.getRole()}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${member.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${member.email}" class="card-link">${member.email}</a></li>
                    <li class="list-group-item">Office number: ${member.officeNumber}</li>
                </ul>
            </div>` 
        }
        else if (member.getRole() === 'Engineer'){
            return `
           <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${member.name}</h5>
                    <p class="card-text">${member.getRole()}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${member.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${member.email}" class="card-link">${member.email}</a></li>
                    <li class="list-group-item">Github: <a href="github.com/${member.github}" class="card-link">${member.github}</a></li>  
                </ul>
            </div>`
        }
        else if(member.getRole() === 'Intern'){
            return `
           <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${member.name}</h5>
                    <p class="card-text">${member.getRole()}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${member.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${member.email}" class="card-link">${member.email}</a></li>
                    <li class="list-group-item">School: ${member.school}</li>
                </ul>
            </div>`
        }
    }).join('\n')
}

function generateHtml(fullTeam){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
        <title>Document</title>
    </head>
    <body>
        ${generateCards(fullTeam)}      
    </body>
    </html>`
}
module.exports = generateHtml;