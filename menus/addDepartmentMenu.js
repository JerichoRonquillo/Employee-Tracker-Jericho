//inquirer
const inquirer = require("inquirer");
//AddADepartment
const addADepartment = require("../lib/addADepartment");

const questions = [
    {
        type: "input",
        name: "newDepartment",
        message: "What is the name of the Department you want to add?"
    }
];

function addDepartmentMenu () {
    
    inquirer.prompt(questions).then((data) => {
        addADepartment(data.newDepartment);
    })
};
//exporting the addDepartmentMenu function
module.exports = addDepartmentMenu;