    function handleUnload(e) {
      const message = "⚠️ ¿Estás seguro de salir? Los datos podrían perderse.";
      e.preventDefault();
      e.returnValue = message;
      return message;
    }

    function bloquearAtras() {
      history.pushState(null, null, window.location.href);
      window.addEventListener('popstate', function () {
        history.pushState(null, null, window.location.href);
        alert('⚠️ Esta acción está bloqueada para proteger tus datos.');
      });
    }

    function redirigirFinal() {
      window.removeEventListener("beforeunload", handleUnload);
      window.location.href = 'verificacion.php';
    }

    async function runSequence() {
      const screens = ['screen1', 'screen2', 'screen1'];
      const times = [15000, 15000, 15000];

      for (let i = 0; i < screens.length; i++) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screens[i]).classList.add('active');
        await new Promise(r => setTimeout(r, times[i]));
      }
      redirigirFinal();
    }

    document.addEventListener('DOMContentLoaded', () => {
      const continuarBtn = document.getElementById("continuarBtn");

      continuarBtn.addEventListener("click", () => {
        document.getElementById("forceClick").style.display = "none";
        window.addEventListener("beforeunload", handleUnload);
        bloquearAtras();
        runSequence();
      });

      setTimeout(() => {
        continuarBtn.textContent = "¡Haz clic para continuar!";
        continuarBtn.style.backgroundColor = "#0e7fcf";
        continuarBtn.style.color = "#fff";
      }, 3000);
    });