<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "crud";


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// $sql = "CREATE DATABASE IF NOT EXISTS $dbname";
// if ($conn->query($sql) === FALSE) {
//     die("Error creating database: " . $conn->error);
// }

// $conn->select_db($dbname);

// $sql = "CREATE TABLE IF NOT EXISTS employees (
//     id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
//     firstname VARCHAR(30) NOT NULL,
//     lastname VARCHAR(30) NOT NULL,
//     email VARCHAR(50),
//     salary INT(10)
// )";
// if ($conn->query($sql) === FALSE) {
//     die("Error creating table: " . $conn->error);
// }
