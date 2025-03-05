<?php
session_start();
include 'db_connection.php';
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Alumnos</title>
    <link rel="stylesheet" href="css/styles2.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="title-bar">
        <h1>Lista de Alumnos</h1>
    </div>
    <div class="container">
        <div id="student-list">
            <?php
            // Consulta SQL para obtener datos de la tabla
            $sql = "SELECT No_Control, nombre, apellido FROM Alumnos";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                // Salida de datos de cada fila
                echo "<table><tr><th>No. Control</th><th>Nombre</th><th>Apellido</th></tr>";
                while($row = $result->fetch_assoc()) {
                    echo "<tr><td>" . $row["No_Control"]. "</td><td>" . $row["nombre"]. "</td><td>" . $row["apellido"]. "</td></tr>";
                }
                echo "</table>";
            } else {
                echo "0 results";
            }

            // Cerrar conexión
            $conn->close();
            ?>
        </div>
    </div>
    
    <script src="js/script2.js"></script>
</body>
</html>
