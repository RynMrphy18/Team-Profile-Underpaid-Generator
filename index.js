const inquirer = require("inquirer");


const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const fs = require("fs");

// manager function runs first and asks beginning questions
function runInquirerManager() {
    const promptArray = [{
        type: "input",
        message: "What is your name?",
        name: "name"
    }, {
        type: "input",
        message: "What is your ID?",
        name: "id"
    }, {
        type: "input",
        message: "What is your email?",
        name: "email"
    }, {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber"
    }, {
        type: "list",
        message: "What is your position?",
        choices: ["Manager", "Engineer", "Intern", "Finish team"],
        name: "title"
    }];

    return inquirer
    .prompt(promptArray);
}

// manager runs once since there will be one manager, then runs engineer/intern as many as 4 times
function runInquirer() {
    const promptArray = [{
        type: "input",
        message: "What is your name?",
        name: "name"
    }, {
        type: "input",
        message: "What is your ID?",
        name: "id"
    }, {
        type: "input",
        message: "What is your email?",
        name: "email"
    }, {
        type: "list",
        message: "What is your title",
        choices: ["Engineer", "Intern", "Finish team"],
        name: "title"
    }];

    return inquirer
        .prompt(promptArray);
}
// if user selects engineer as title 
    function runInquirerEngineer() {
        const promptArray = [{
            type: "input",
            message: "What is your github?",
            name: "github"
        }];

        return inquirer
        .prompt(promptArray);
    }
// if user selects intern as title
    function runInquirerIntern() {
        const promptArray = [{
            type: "input",
            message: "What school do you go to?",
            name: "school"
        }];

        return inquirer
        .prompt(promptArray);
    }

    runInquirerManager()
    .then (async function run() {
        let employeeArray = [];
        // 4 times seems enough for testing purposes
        const maxTimes = 4;
        for (i = 0; i < maxTimes; i++) {
            const promise = new Promise((resolve, reject) => {
                runInquirer()
                .then(function ({ name, id, email, title}) {

                    // pushes info into the array according to title selected within runInquirer()
                    if (title === "Manager") {
                        runInquirerManager().then(function ({ officeNumber }) {
                            this.employee = new Manager(name, id, email, officeNumber, title);
                            console.log(officeNumber);
                            employeeArray.push(employee);
                            resolve("done");
                        });
                    } else if (title === "Engineer") {
                        runInquirerEngineer().then(function ({ github }) {
                            this.employee = new Engineer(name, id, email, github, title);
                            console.log(github);
                            employeeArray.push(employee);
                            resolve("done");
                        });                    
                    } else if (title === "Intern") {
                        runInquirerIntern().then(function ({ school }) {
                            this.employee = new Intern(name, id, email, school, title);
                            console.log(school);
                            employeeArray.push(employee);
                            resolve("done");
                        });
                    }
                    // returns to menu if user selects Finish team 
                    else if (title === "Finish team") {
                        return;
                    }

                
                }).catch(function (err) {
                    console.log("An error has occured");
                    console.log(err);
                });
            });

            const result = await promise;
            console.log(result)
        }

        // grabs data inputted for unique titles to be inputted into html
        function showTitle(employee) {
            if (employee.title === "Manager") {
                return `office number: ${employee.officeNumber}`;
            }
            if (employee.title === "Engineer") {
                // github data grabbed and refernced to allow hyperlink
                return `<a href= 'github.com/${employee.github}/'>github: ${employee.github}</a>`;
            }
            if (employee.title === "Intern") {
                return `school: ${employee.school}`;
            }
        }
        function writeHtml() {
            let html = "";
            for (j = 0; j < maxTimes; j++) {
                // line 162 has reference for email link (entered here to not break string)
                html += `<div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
                    <div class="col card-header">
                        <h4>${employeeArray[j].name}</h4>
                    </div>
                    <div class="col card-header">
                        <h4>${employeeArray[j].title}</h4 >
                    </div >
                    <ul class="list-group list-group-flush text">
                        <li class="list-group-item">ID: ${employeeArray[j].id}</li>
                        <li class="list-group-item"><a href="mailto:${employeeArray[j].email}">Email: ${employeeArray[j].email}</a></li>
                        <li class="list-group-item"> ${showTitle(employeeArray[j])}</li>
                    </ul>
                </div > `;
            }
            return html;
        }

        // create html file
        let html = `< !DOCTYPE html >
                <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                                        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
                                        <title>Document</title>
                                        <style>
                                            .row {
                                                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                margin-top: 20px;
                margin-bottom: 20px;
            }
            .card {
                                                padding: 15px;
                border-radius: 6px;
                background-color: black;
                color: lightskyblue;
                margin: 15px;
            }
            .text {
                                                padding: 15px;
                border-radius: 6px;
                background-color: lightskyblue;
                color: black;
                margin: 15px;
            }
            .col {
                                                flex: 1;
                text-align: center;
            }
        </style>
    </head>
                                    <body>
                                        <nav class="navbar navbar-dark bg-dark justify-content-center align-items-center">
                                            <span class="navbar-brand mb-0 h1">
                                                <h1>My Team</h1>
                                            </span>
                                        </nav>
                                        <div class="row">
                                            ${writeHtml()}
                                        </div>
                                    </body>
    
    </html>
    `;

    console.log(html);
    const fs = require("fs");
    // writes html info above into index.html in main directory
    fs.writeFile('index.html', html, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });
}


    )

    // run();



    