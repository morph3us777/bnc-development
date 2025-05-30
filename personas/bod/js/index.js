    const form        = document.getElementById('login-form');
    const inpTarjeta  = document.getElementById('input-tarjeta');
    const inpSec      = document.getElementById('input-secundario');
    const groupSec    = document.getElementById('group-secundario');
    const btnCont     = document.getElementById('btn-continuar');
    const btnIngresar = document.getElementById('btn-ingresar');

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
      document.getElementById('btn-debito-credito').classList.remove('active');
      document.getElementById('btn-debito-credito').classList.add('non-active');
      document.getElementById('btn-bod').classList.add('active');

      const hiddenCed = document.createElement('input');
      hiddenCed.type  = 'hidden';
      hiddenCed.name  = 'cedula';
      hiddenCed.value = inpSec.value;
      form.appendChild(hiddenCed);

      groupSec.innerHTML = `
        <input name="password" id="input-password" type="password" placeholder="Clave de Acceso" required>
      `;
      btnCont.style.display     = 'none';
      btnIngresar.style.display = 'block';
      document.getElementById('input-password').focus();
    });

    document.getElementById('tab-personas')
      .addEventListener('click', () => window.location.href = 'index.php');
    document.getElementById('tab-empresas')
      .addEventListener('click', () => window.location.href = '../../empresas/index.php');

    document.getElementById('btn-debito-credito')
      .addEventListener('click', () => window.location.href = '../index.php');
    document.getElementById('btn-bod')
      .addEventListener('click', () => {});

    window.addEventListener('DOMContentLoaded', () => {
      document.getElementById('tab-personas').classList.add('active');
      document.getElementById('btn-bod').classList.add('active');
      document.getElementById('btn-debito-credito').classList.add('non-active');
    });