<?php
include 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $titulo = $_POST['titulo'];
    $descripcion = $_POST['descripcion'];
    $valor = $_POST['valor'];
    $ID_Evaluacion = $_POST['id_evaluacion'];

    $sql = "INSERT INTO Actividades (titulo, descripcion, valor, ID_Evaluacion) VALUES ('$titulo', '$descripcion', '$valor', '$ID_Evaluacion')";

    if ($conn->query($sql) === TRUE) {
        echo "Nueva actividad creada exitosamente";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
