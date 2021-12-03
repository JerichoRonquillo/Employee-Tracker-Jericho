//Calling database connection
const db = require("../config/connection");
//console.table
const cTable = require('console.table');
function viewAllDepartments () {
    //requiring indexMenu
    const indexMenu = require("../menus/index");
    //pre-written sql statement
    const sql = "SELECT * FROM departments";
    //using mysql2 to query the database specified in ../config/connections.js
    db.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            return;
        };
        console.table(results)
        //Returning to the indexMenu
        indexMenu();
    })
};
//exporting the viewAllDepartments function
module.exports = viewAllDepartments;