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

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/styles.css" type="text/css">
    <title>Login</title>
</head>
<body>
    <img src="logo_tecnm.png" alt="logo_tecnm">
    <form class="contain" method="post">
        <label for="username">Usuario</label>
        <input type="text" id="username" name="username">

        <label for="password">Contraseña</label>
        <input type="password" id="password" name="password">

        <input type="submit" value="Ingresar">
    </form>
</body>
</html>
