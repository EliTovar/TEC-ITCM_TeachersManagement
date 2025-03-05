<?php
$servername = "10.9.1.63"; // Cambia esto si tu servidor no está en localhost
$username = "20070508"; // Reemplaza con tu nombre de usuario de MySQL
$password = "ipgfr"; // Reemplaza con tu contraseña de MySQL
$dbname = "L20070508";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
