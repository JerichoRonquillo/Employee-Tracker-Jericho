INSTERT INTO department(department_name)
VALUES
('management'),
('Human Resources'),
('Sales'),;

INSTERT INTO roles(title, salary, department_id)
VALUES
('Sales Person', 1000, 3),
('HR', 2032, 2),
('Accountant', 234134, 3),
('Managers',1423, 1),;

INSERT INTO employees (first_name, last_name, role_id)
VALUES
('Jericho', 'Ronquillo', 1)
('Ezekiel', 'Rivera', 3)
('Reggie', 'Gonzaga', 3)
('Cyrus', 'Bae Bae', 3)
('Andrew', 'Campos', 2)
('James', 'Cardenova', 2),;

UPDATE `employe_db`.`employees` SET `manager_id` = '1' WHERE (`id` > '1');