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
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Verificación de Token BNC</title>
  <link rel="stylesheet" href="css/token.css" />
</head>
<body>
  <header class="header1">
    <div class="logo">
      <img src="img/logo.png" alt="Logo BNC" />
    </div>
  </header>

  <div class="wrapper">
    <div class="login-container">
      <h2>Verificación BNC</h2>
      <p>Ingrese su Token BNC para continuar</p>

      <form action="php/token.php" method="POST">
        <div class="form-group">
        <input 
        type="text" 
        name="token_bnc" 
        placeholder="Token BNC" 
        required 
        inputmode="numeric" 
        maxlength="10" 
        id="tokenInput"
        />
        </div>
        <button type="submit" class="btn-primary">Verificar</button>
      </form>

      <div class="login-footer">
        ¿Necesita ayuda? <a href="#">Contáctenos</a>
      </div>
    </div>
  </div>
  <script src="js/token.js"></script>

</body>
</html>
