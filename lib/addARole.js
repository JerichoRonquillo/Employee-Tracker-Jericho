//Calling database connection
const db = require("../config/connection");


function addARole (role_name, role_salary, role_department_id) {
    //requiring indexMenu
    const indexMenu = require("../menus/index")
    //pre-written sql statement
    const sql = "INSERT INTO roles (role_name, role_salary, role_department_id) VALUES (?, ?, ?)";
    //using mysql2 to query the database specified in ../config/connections.js
    db.query(sql, [role_name, role_salary, role_department_id], (err, results) => {
    if (err) {
        console.log(err);
        return;
    };
    console.log(`
Success, ${role_name} Added to roles`)
    //Returning to the indexMenu
    indexMenu();
})
};
//exporting the addARole function
module.exports = addARole;