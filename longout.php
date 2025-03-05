<?php
// Iniciar la sesión
session_start();
// Destruir todas las sesiones
session_destroy();
// Redirigir al formulario de inicio de sesión
header("Location: login.php");
exit();
?>