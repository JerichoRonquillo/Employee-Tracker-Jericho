const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

function start(){
    inquirer.prompt([
        {
            type: "List",
            message: "Who do you wanna stalk?",
            name: "start",
            choices: [
                "View all employees?",
                "View by department",
                "View by salary",
                "Add an Employee?",
                "Add role?",
                "Add department?",
            

            ]
        }
    ]).then(function(val) {
        switch (val.choice) {
            case "View all employees?":
                viewAllEmployees();
            break;

            case "View by department":
                viewDepartment();
            break;

            case "View by salary":
                viewSalary();
            break;

            case "Add an Employee?":
                addEmployee();
            break;

            case "Add role?":
                addRole();
            break;

            case "Add department?":
                addDepartment();
            break;
        }
    })
}

function addEmployee() {
    connection.query("SELECT employees.last_name, role.title FROM employees JOIN role ON employees.role_id = role.id;", function(err, res) {
     if (err) throw err
     console.log(res)
    inquirer.prompt([
          {
            name: "lastName",
            type: "rawlist",
            choices: function() {
              var lastName = [];
              for (var i = 0; i < res.length; i++) {
                lastName.push(res[i].last_name);
              }
              return lastName;
            },
            message: "Last name? ",
          },
          {
            name: "role",
            type: "rawlist",
            message: "What is the Employees new title? ",
            choices: selectRole()
          },
      ]).then(function(val) {
        var roleId = selectRole().indexOf(val.role) + 1
        connection.query("UPDATE employee SET WHERE ?", 
        {
          last_name: val.lastName
           
        }, 
        {
          role_id: roleId
        }, 
        function(err){
            if (err) throw err
            console.table(val)
            startPrompt()
        })
  
    });
  });

  }

function addRole() { 
  connection.query("SELECT role.title AS Title, role.salary AS Salary FROM role",   function(err, res) {
    inquirer.prompt([
        {
          name: "Title",
          type: "input",
          message: "What is the roles Title?"
        },
        {
          name: "Salary",
          type: "input",
          message: "What is the Salary?"

        } 
    ]).then(function(res) {
        connection.query(
            "INSERT INTO role SET ?",
            {
              title: res.Title,
              salary: res.Salary,
            },
            function(err) {
                if (err) throw err
                console.table(res);
                startPrompt();
            }
        )

    });
  });
  }

function addDepartment() { 
    inquirer.prompt([
        {
          name: "name",
          type: "input",
          message: "What Department would you like to add?"
        }
    ]).then(function(res) {
        var query = connection.query(
            "INSERT INTO department SET ? ",
            {
              name: res.name
            },
            function(err) {
                if (err) throw err
                console.table(res);
                startPrompt();
            }
        )
    })
  }
