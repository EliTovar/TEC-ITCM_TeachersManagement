<?php
include 'db_connection.php';

$sql = "SELECT * FROM Actividades";
$result = $conn->query($sql);

$actividades = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $actividades[] = $row;
    }
}
echo json_encode($actividades);

$conn->close();
?>
