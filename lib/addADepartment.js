//Calling database connection
const db = require("../config/connection");


function addADepartment (userInput) {
    //requiring indexMenu
    const indexMenu = require("../menus/index")
    //pre-written sql statement
    const sql = "INSERT INTO departments (department_name) VALUES (?)";
    //using mysql2 to query the database specified in ../config/connections.js
    db.query(sql, userInput, (err, results) => {
    if (err) {
        console.log(err);
        return;
    };
    console.log(`
Success, ${userInput} Added to Departments`)
    //Returning to the indexMenu
    indexMenu();
})
};
//exporting the addADepartment function
module.exports = addADepartment;