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