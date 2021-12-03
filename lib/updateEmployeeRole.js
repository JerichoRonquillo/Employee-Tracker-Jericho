//Calling database connection
const db = require("../config/connection");
function updateEmployeeRole (params) {
    //requiring indexMenu
    const indexMenu = require("../menus/index");
    //pre-written sql statement
    const sql = `UPDATE employees SET employee_role_id = ? WHERE id = ?`;
    //using mysql2 to query the database specified in ../config/connections.js
    db.query(sql, params, (err, results) => {
        console.log("Role updated!");
        //Returning to the indexMenu
        indexMenu();
    })
};
//exporting the updateEmployeeRole function
module.exports = updateEmployeeRole;