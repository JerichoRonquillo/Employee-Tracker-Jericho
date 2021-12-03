//Calling database connection
const db = require("../config/connection");


function addAnEmployee (employee_first_name, employee_last_name, employee_role_id, employee_department_id, employee_manager) {
    //requiring indexMenu
    const indexMenu = require("../menus/index")
    //pre-written sql statement
    const sql = "INSERT INTO employees (employee_first_name, employee_last_name, employee_role_id, employee_department_id, employee_manager) VALUES (?, ?, ?, ?, ?)";
    //using mysql2 to query the database specified in ../config/connections.js
    db.query(sql, [employee_first_name, employee_last_name, employee_role_id, employee_department_id, employee_manager], (err, results) => {
    if (err) {
        console.log(err);
        return;
    };
    console.log(`
Success, ${employee_first_name} ${employee_last_name} Added to roles`)
    //Returning to the indexMenu
    indexMenu();
})
};
//exporting the addAnEmployee function
module.exports = addAnEmployee;