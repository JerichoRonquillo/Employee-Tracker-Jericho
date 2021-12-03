const { query } = require("./config/connection.js");
//connection
const db = require("./config/connection.js")
//indexMenu
const indexMenu = require("./menus/index.js")

function init () {
    indexMenu()
}

init();