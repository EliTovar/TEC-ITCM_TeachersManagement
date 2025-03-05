<?php
session_start();
include 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM Docentes WHERE ID_Docente='$username' AND contraseña='$password'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        // Usuario autenticado correctamente
        $_SESSION['username'] = $username;
        header("Location: crear_contenido_grupo.php"); // Redirigir al dashboard o página principal
    } else {
        // Credenciales incorrectas
        echo "Nombre de usuario o contraseña incorrectos.";
    }
}

$conn->close();
?>
