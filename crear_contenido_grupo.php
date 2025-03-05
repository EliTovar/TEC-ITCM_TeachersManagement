<?php
// Simulación de datos de contenido para grupos
$grupos = [
    1 => [
        "titulo" => "Grupo 1",
        "contenido" => "Este es el contenido del Grupo 1.",
    ],
    2 => [
        "titulo" => "Grupo 2",
        "contenido" => "Este es el contenido del Grupo 2.",
    ],
    3 => [
        "titulo" => "Grupo 3",
        "contenido" => "Este es el contenido del Grupo 3.",
    ],
    4 => [
        "titulo" => "Grupo 4",
        "contenido" => "Este es el contenido del Grupo 4.",
    ],
    5 => [
        "titulo" => "Grupo 5",
        "contenido" => "Este es el contenido del Grupo 5.",
    ],
    6 => [
        "titulo" => "Grupo 6",
        "contenido" => "Este es el contenido del Grupo 6.",
    ],
];

// Obtener el número de grupo desde la solicitud
$grupo = $_GET['grupo'];

// Comprobar si el grupo existe en los datos simulados
if (array_key_exists($grupo, $grupos)) {
    // Si el grupo existe, devolver su contenido en formato JSON
    header('Content-Type: application/json');
    echo json_encode($grupos[$grupo]);
} else {
    // Si el grupo no existe, devolver un mensaje de error
    http_response_code(404);
    echo json_encode(["error" => "Grupo no encontrado"]);
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grupos</title>
  <link href="css/styles.css" type="text/css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet">

</head>
<body>

<div class="barraSuperior"></div>
  
  
<div class="menuLateral">
    <div class="opcionMenu" onclick="window.location.href='miCuenta.html'">Mi cuenta</div>
    <div class="opcionMenu" onclick="window.location.href='calendario.html'">Calendario</div>
    <div class="opcionMenu">Ayuda</div>
    <div class="opcionMenu" onclick="cerrarSesion()">Cerrar Sesión</div>
</div>


<div class="container">
  <h1 class="titulo">Mis Grupos</h1>
  <div class="acciones">
    <div class="btnCRUD" id="crearGrupo">Crear Grupo</div>
    <div class="btnCRUD" id="modificarGrupo">Modificar Grupo</div>
    <div class="btnCRUD" id="eliminarGrupo">Eliminar Grupo</div>
  </div>
  <div class="contenedorGrupos">
    <button class="btnGrupos" data-grupo="1">Grupo 1</button>
    <button class="btnGrupos" data-grupo="2">Grupo 2</button>
    <button class="btnGrupos" data-grupo="3">Grupo 3</button>
    <button class="btnGrupos" data-grupo="4">Grupo 4</button>
    <button class="btnGrupos" data-grupo="5">Grupo 5</button>
    <button class="btnGrupos" data-grupo="6">Grupo 6</button>
  </div>
  
</div>

<script src="js/script.js"></script>

</body>
</html>
