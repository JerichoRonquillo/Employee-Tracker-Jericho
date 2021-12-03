//Calling database connection
const db = require("../config/connection");
//console.table
const cTable = require('console.table');

function viewAllEmployees () {
    //requiring indexMenu
    const indexMenu = require("../menus/index");
    //pre-written sql statement
    const sql = "SELECT employees.id, employee_first_name, employee_last_name, role_name, role_salary, department_name, employee_manager FROM employees, roles, departments WHERE employees.employee_role_id = roles.id AND employees.employee_department_id = departments.id";
    //using mysql2 to query the database specified in ../config/connections.js
    db.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            return;
        };
        console.table(results);
        //Returning to the indexMenu
        indexMenu();
    })
};
//exporting the viewAllEmployees function
module.exports = viewAllEmployees;