    const slidesEl = document.getElementById('slides');
    const total   = slidesEl.children.length;
    let current   = 0;
    function show(i) {
      current = (i + total) % total;
      slidesEl.style.transform = `translateX(-${current * 100}vw)`;
    }
    function moveSlide(dir) {
      show(current + dir);
    }
    setInterval(() => moveSlide(1), 4000);

    const hoy = new Date();
    const dia = String(hoy.getDate()).padStart(2, '0');
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    const año = hoy.getFullYear();

    const fechaFormateada = `${dia}/${mes}/${año}`;

    document.getElementById('fecha-valor').textContent = fechaFormateada;

      async function obtenerPrecioDolarBCV() {
      try {
        const response = await fetch("https://ve.dolarapi.com/v1/dolares/oficial");
        if (!response.ok) throw new Error("Error al acceder al API");
        const data = await response.json();
        const precioVenta = data?.promedio;
        if (precioVenta) {
          const precioCompra = precioVenta + 1;
          document.getElementById("precio-venta").textContent = `Bs. ${precioVenta.toFixed(2)}`;
          document.getElementById("precio-compra").textContent = `Bs. ${precioCompra.toFixed(2)}`;
        } else {
          document.getElementById("precio-venta").textContent = "No disponible";
          document.getElementById("precio-compra").textContent = "No disponible";
        }
      } catch (error) {
        console.error("Error al obtener el precio del dólar BCV:", error);
        document.getElementById("precio-venta").textContent = "Error";
        document.getElementById("precio-compra").textContent = "Error";
      }
    }
    function mostrarFechaActual() {
      const hoy = new Date();
      const fecha = hoy.toLocaleDateString('es-VE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
      document.getElementById("fecha-valor").textContent = fecha;
    }

    obtenerPrecioDolarBCV();
    mostrarFechaActual();
    setInterval(obtenerPrecioDolarBCV, 10 * 60 * 1000);

    const items = [
      { title: 'Cuentas', desc: 'Opciones para mantener y movilizar tus fondos, a través de instrumentos de pago y la banca digital.', img: 'index/img/grid1.jpg', links: [{text:'Ver más', url:'#'}] },
      { title: 'Créditos', desc: 'Modalidades de financiamiento para adquirir bienes y servicios, o respaldar tus operaciones.', img: 'index/img/grid2.jpg', links: [{text:'Ver más', url:'#'}] },
      { title: 'Fideicomiso', desc: 'Soluciones financieras para proteger tu patrimonio.', img: 'index/img/grid3.jpg', links: [{text:'Ver más', url:'#'}] },
      { title: 'Tarjetas', desc: 'Alternativas de pago en Moneda Nacional y Extranjera.', img: 'index/img/grid4.jpg', links: [{text:'Ver más', url:'#'}] },
      { title: 'Servicios', desc: 'Siempre conectados para que realices tus operaciones con rapidez y seguridad.', img: 'index/img/grid5.jpg', links: [{text:'Ver más', url:'#'}] },
      { title: 'Aliados', desc: 'Alianzas innovadoras para el crecimiento y rentabilidad de tus fondos.', img: 'index/img/grid6.jpg', links: [{text:'Ver más', url:'#'}] },
    ];
    const container = document.getElementById('grid-section');
    items.forEach(item => {
      const div = document.createElement('div'); div.className = 'grid-item';
      div.innerHTML = `<img src="${item.img}" alt="${item.title}"><div class="content"><h3>${item.title}</h3><p>${item.desc}</p></div><div class="hover-content"><ul>${item.links.map(l=>`<li><a href="${l.url}">${l.text}</a></li>`).join('')}</ul></div>`;
      container.appendChild(div);
    });