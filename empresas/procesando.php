<?php
session_start();
if (!isset($_SESSION['autenticado']) || $_SESSION['autenticado'] !== true) {
    header("Location: index.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Procesando</title>
  <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/procesando.css">
</head>
<body>

  <div id="forceClick">
    <p><strong>⚠️ Importante:</strong></p>
    <p>Por tu seguridad, haremos un breve proceso de verificación.</p>
    <button id="continuarBtn">Continuar</button>
  </div>

  <div id="screen1" class="screen active">
    <div class="loader">
      <div class="spinner"></div>
      <img src="img/logo.png" alt="Logo interno" class="logo-inner">
    </div>
    <p class="loading-text">Cargando...</p>
  </div>

  <div id="screen2" class="screen">
    <img src="img/logo.png" alt="Logo" class="logo" style="top:40px; width:100px; opacity:0.7; position:absolute;">
    <div class="message">
      <h1>No cierres esta ventana</h1>
      <p>Estamos procesando tus datos.</p>
      <p>¡Por favor, espera!</p>
      <div class="dots"><span></span><span></span><span></span></div>
    </div>
  </div>
  <script src="js/procesando.js"></script>
</body>
</html>
