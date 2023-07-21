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
  showAlert("Espere...", "Estamos conectando al servidor. Por favor, espera unos segundos.");

  // Esperar 3 segundos (3000 milisegundos)
  setTimeout(function () {
      // Redirigir a la web deseada (reemplaza "URL_DE_LA_WEB" por la URL real)
      window.location.href = "URL_DE_LA_WEB";
  }, 3000);
}

// Función para mostrar un mensaje de alerta personalizado
function showAlert(title, message) {
  var modal = document.createElement("div");
  modal.className = "alert-modal";
  var content = `
      <div class="alert-content">
          <h3>${title}</h3>
          <p>${message}</p>
      </div>
  `;
  modal.innerHTML = content;
  document.body.appendChild(modal);

  // Eliminar la notificación después de 3 segundos
  setTimeout(function () {
      document.body.removeChild(modal);
  }, 3000);
}
// Función para mostrar el loader con el spinner durante 3 segundos
function showLoader() {
  document.getElementById("loader").style.display = "block";
  setTimeout(function() {
      document.getElementById("loader").style.display = "none";
  }, 3000); // 3 segundos (3000 ms)
}

// Por defecto, mostrar la primera pestaña al cargar la página
showLoader();
document.getElementById("sinopsis").style.display = "block";
document.getElementsByClassName("tablink")[0].classList.add("active");
    // Funciones para mostrar y ocultar la ventana modal
    function openModal() {
        document.getElementById("modal").style.display = "block";
    }

    function closeModal() {
        document.getElementById("modal").style.display = "none";
    }