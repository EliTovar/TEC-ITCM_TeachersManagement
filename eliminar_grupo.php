<?php
include 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $ID_Grupo = $_POST['ID_Grupo'];

    $sql = "DELETE FROM Grupos WHERE ID_Grupo='$ID_Grupo'";

    if ($conn->query($sql) === TRUE) {
        echo "Grupo eliminado exitosamente";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
