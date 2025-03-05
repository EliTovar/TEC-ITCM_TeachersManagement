<?php
include 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $ID_Actividad = $_POST['id_actividad'];
    $titulo = $_POST['titulo'];
    $descripcion = $_POST['descripcion'];
    $valor = $_POST['valor'];
    $ID_Evaluacion = $_POST['id_evaluacion'];

    $sql = "UPDATE Actividades SET titulo='$titulo', descripcion='$descripcion', valor='$valor', ID_Evaluacion='$ID_Evaluacion' WHERE ID_Actividades='$ID_Actividad'";

    if ($conn->query($sql) === TRUE) {
        echo "Actividad modificada exitosamente";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
