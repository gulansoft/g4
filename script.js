        // Función para cambiar de pestaña
        function openTab(evt, tabName) {
            var i, tabcontent, tablinks;

            // Ocultar todos los contenidos de pestañas
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }

            // Desactivar la clase "active" de todos los botones de pestaña
            tablinks = document.getElementsByClassName("tablink");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].classList.remove("active");
            }

            // Mostrar la pestaña actual y marcar el botón como activo
            document.getElementById(tabName).style.display = "block";
            evt.currentTarget.classList.add("active");
        }

        // Por defecto, mostrar la primera pestaña al cargar la página
        document.getElementById("sinopsis").style.display = "block";
        document.getElementsByClassName("tablink")[0].classList.add("active");
  // Funciones para mostrar y ocultar la ventana modal
  function openModal() {
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Función para mostrar la notificación y redirigir a la web
function transmitir() {
    // Mostrar notificación
    alert("Estamos conectando al servidor. Por favor, espera unos segundos.");

    // Esperar 3 segundos (3000 milisegundos)
    setTimeout(function () {
        // Redirigir a la web deseada (reemplaza "URL_DE_LA_WEB" por la URL real)
        window.location.href = "URL_DE_LA_WEB";
    }, 3000);
}
    // Funciones para mostrar y ocultar la ventana modal
    function openModal() {
        document.getElementById("modal").style.display = "block";
    }

    function closeModal() {
        document.getElementById("modal").style.display = "none";
    }