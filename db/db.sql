CREATE DATABASE IF NOT EXISTS company;

USE company;

CREATE TABLE emplyees (
	id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(11) DEFAULT NULL,
    PRIMARY KEY(id)
);

DESCRIBE employee;

INSERT INTO employees values;
	(1, 'David Reyes', 5000),
    (2, 'John Constantine', 4000),
    (3, 'Ana de Armas', 3000);
    
SELECT * FROM employees;    