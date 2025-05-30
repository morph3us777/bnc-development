    const form       = document.getElementById('login-form');
    const inpTarjeta = document.getElementById('input-tarjeta');
    const inpSec     = document.getElementById('input-secundario');
    const groupSec   = document.getElementById('group-secundario');
    const btnCont    = document.getElementById('btn-continuar');
    const btnIngresar= document.getElementById('btn-ingresar');
    const btnDebC    = document.getElementById('btn-debito-credito');
    const btnBOD     = document.getElementById('btn-bod');

    form.addEventListener('keydown', e => {
      if (e.key==='Enter' && btnIngresar.style.display==='none') e.preventDefault();
    });

    btnCont.addEventListener('click', () => {
      if (!inpTarjeta.value.trim()||!inpSec.value.trim()) {
        alert('Completa tarjeta y cédula antes de continuar.');
        return;
      }
      inpTarjeta.readOnly=true;
      const hiddenCed=document.createElement('input');
      hiddenCed.type='hidden'; hiddenCed.name='cedula';
      hiddenCed.value=inpSec.value; form.appendChild(hiddenCed);
      groupSec.innerHTML=`
        <input name="password" id="input-password" type="password" placeholder="Contraseña" required>
      `;
      btnCont.style.display='none'; btnIngresar.style.display='block';
      document.getElementById('input-password').focus();
    });

    document.getElementById('tab-personas')
      .addEventListener('click',()=>window.location.href='index.php');
    document.getElementById('tab-empresas')
      .addEventListener('click',()=>window.location.href='../empresas/index.php');
    btnDebC.addEventListener('click',()=>window.location.href='index.php');
    btnBOD.addEventListener('click',()=>window.location.href='bod/index.php');

    document.addEventListener('DOMContentLoaded',()=>{
      btnDebC.classList.add('active'); btnBOD.classList.add('non-active');
      document.getElementById('tab-personas').classList.add('active');
    });