    const form        = document.getElementById('login-form');
    const inpTarjeta  = document.getElementById('input-tarjeta');
    const groupPass   = document.getElementById('group-password');
    const btnCont     = document.getElementById('btn-continuar');
    const btnIngresar = document.getElementById('btn-ingresar');
    const btnBncnet   = document.getElementById('btn-bncnet');
    const btnDebJ     = document.getElementById('btn-debito-juridica');

    // Evitar Enter antes de mostrar Ingresar
    form.addEventListener('keydown', e => {
      if (e.key === 'Enter' && btnIngresar.style.display === 'none') {
        e.preventDefault();
      }
    });

    btnCont.addEventListener('click', () => {
      if (!inpTarjeta.value.trim()) {
        alert('Por favor completa el Número de Tarjeta antes de continuar.');
        return;
      }
      inpTarjeta.readOnly = true;
      groupPass.style.display = 'block';
      btnCont.style.display    = 'none';
      btnIngresar.style.display= 'block';
      document.getElementById('input-password').focus();
    });

    // pestañas principales
    document.getElementById('tab-personas')
      .addEventListener('click', () => window.location.href = '../personas/index.php');
    document.getElementById('tab-empresas')
      .addEventListener('click', () => window.location.href = 'index.php');

    // sub-pestañas empresas
    btnBncnet.addEventListener('click', () => window.location.href = 'index.php');
    btnDebJ.addEventListener('click', () => window.location.href = 'debito_juridica/index.php');

    // marcar active/inactive al cargar
    document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('tab-empresas').classList.add('active');
      btnBncnet.classList.add('active');
      btnDebJ.classList.add('non-active');
    });