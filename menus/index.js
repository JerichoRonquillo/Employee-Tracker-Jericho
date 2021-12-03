//this will be the index menu
//inquirer
const inquirer = require("inquirer");
//addDepartmentMenu
const addDepartmentMenu = require("./addDepartmentMenu");
//addEmployeeMenu
const addEmployeeMenu = require("./addEmployeeMenu");
//AddRoleMenu
const addRoleMenu = require("./addRoleMenu");
//viewAllDepartments
const viewAllDepartments = require("../lib/viewAllDepartments");
//viewAllRoles
const viewAllRoles = require("../lib/viewAllRoles");
//viewAllEmployees
const viewAllEmployees = require("../lib/viewAllEmployees");
//updateRoleMenu
const updateRoleMenu = require("./updateRoleMenu");

const questions = [
    {
        type: "list",
        name: "indexChoice",
        message: "What would you like to do?",
        choices: ["View All Departments", "View All Roles", "View All Employees", "Add A Department", "Add A Role", "Add An Employee", "Update An Employee Role"]
    }
];

function indexMenu () {
    inquirer.prompt(questions).then((data) => {
        switch (data.indexChoice) {
            case "View All Departments":
                viewAllDepartments();
                break;
            case "View All Roles":
                viewAllRoles();
                break;
            case "View All Employees":
                viewAllEmployees();
                break;
            case "Add A Department":
                addDepartmentMenu();
                break;
            case "Add A Role":
                addRoleMenu();
                break;
            case "Add An Employee":
                addEmployeeMenu();
                break;
            case "Update An Employee Role":
                updateRoleMenu();
                break;
        
            default:
                console.log("error")
                break;
        }
    })
}
//exporting the indexMenu function
module.exports = indexMenu
