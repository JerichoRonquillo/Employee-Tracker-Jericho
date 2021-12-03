const inquirer = require("inquirer");
//Calling database connection
const db = require("../config/connection");
const updateEmployeeRole = require("../lib/updateEmployeeRole");
async function updateEmployeeRoleMenu() {
  const currentRoles = [];
  const currentRoleIds = {};
  const allEmployeeData = {};
  const allEmployeeNames = [];
  //pre-written sql statements
  const sql = "SELECT * FROM roles";
  const sql2 = "SELECT * FROM employees";
  //using mysql2 to query the database specified in ../config/connections.js
  db.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    //itterating through and storing each entry in result
    for (const key in results) {
      const element = results[key];
      currentRoles.push(element.role_name);
      currentRoleIds[element.role_name] = element.id;
    }
  });
  //using mysql2 to query the database specified in ../config/connections.js
  db.query(sql2, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    //itterating through and storing each entry in result
    for (const key in results) {
      const element = results[key];
      allEmployeeData[`${element.employee_first_name} ${element.employee_last_name}`] = {};
      const elementData = {};
      //push full result
      allEmployeeData[`${element.employee_first_name} ${element.employee_last_name}`].id = element.id;
      allEmployeeData[`${element.employee_first_name} ${element.employee_last_name}`].employee_first_name = element.employee_first_name;
      allEmployeeData[`${element.employee_first_name} ${element.employee_last_name}`].employee_last_name = element.employee_last_name;
      allEmployeeData[`${element.employee_first_name} ${element.employee_last_name}`].employee_role_id = element.employee_role_id;
      allEmployeeData[`${element.employee_first_name} ${element.employee_last_name}`].employee_department_id = element.employee_department_id;
      //push first and last
      allEmployeeNames.push(
        `${element.employee_first_name} ${element.employee_last_name}`
        );
      }
    });
    
  setTimeout(() => {
  const questions = [
    {
      type: "list",
      name: "employee",
      message: "Which Employee?",
      choices: allEmployeeNames,
    },
    {
      type: "list",
      name: "newRole",
      message: "What is the new role?",
      choices: currentRoles,
    },
  ];

    inquirer.prompt(questions).then((data) => {
    //employee
    const employeeWithNewRole =[];
    for (const key in currentRoleIds) {
      const element = currentRoleIds[key];
      if (key == data.newRole) {
        employeeWithNewRole.push(element)
      }
    }
    for (const key in allEmployeeData) {
      const element = allEmployeeData[key];
      if (key == data.employee) {
        employeeWithNewRole.push(element.id)
      }
    }
  
    //updateEmployeeRole
    updateEmployeeRole(employeeWithNewRole)
  });
  
}, 100)
}
//exporting the updateEmployeeRoleMenu function
module.exports = updateEmployeeRoleMenu;
