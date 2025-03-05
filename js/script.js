// SECCION CRUD BOTONES INDEXGRUPOS
document.getElementById("crearGrupo").addEventListener("click", function() {
    var nombreGrupo = prompt("Ingrese el nombre del nuevo grupo:");
    if (nombreGrupo) {
        // Crear un nuevo elemento de botón con el nombre del grupo ingresado
        var nuevoGrupo = document.createElement("button");
        nuevoGrupo.className = "btnGrupos";
        nuevoGrupo.textContent = nombreGrupo;
        
        // Agregar el nuevo grupo al contenedor de grupos
        var contenedorGrupos = document.querySelector(".contenedorGrupos");
        contenedorGrupos.appendChild(nuevoGrupo);
    }
});

document.getElementById("modificarGrupo").addEventListener("click", function() {
    var nombreGrupo = prompt("Ingrese el nombre del grupo que desea modificar:");
    if (nombreGrupo) {
        var nuevoNombreGrupo = prompt("Ingrese el nuevo nombre del grupo:");
        if (nuevoNombreGrupo) {
            // Obtener el botón del grupo con el nombre especificado
            var botonGrupo = document.querySelector('.btnGrupos:contains("' + nombreGrupo + '")');
            if (botonGrupo) {
                // Cambiar el texto del botón al nuevo nombre del grupo
                botonGrupo.textContent = nuevoNombreGrupo;
            } else {
                alert("El grupo especificado no se encontró.");
            }
        }
    }
});

document.getElementById("eliminarGrupo").addEventListener("click", function() {
    var nombreGrupo = prompt("Ingrese el nombre del grupo que desea eliminar:");
    if (nombreGrupo) {
        // Obtener el botón del grupo con el nombre especificado
        var botonGrupo = document.querySelector('.btnGrupos:contains("' + nombreGrupo + '")');
        if (botonGrupo) {
            // Eliminar el botón del grupo
            botonGrupo.remove();
        } else {
            alert("El grupo especificado no se encontró.");
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal");
    var span = document.getElementsByClassName("close")[0];
    var form = document.getElementById("grupoForm");
  
    document.getElementById("crearGrupoBtn").onclick = function() {
      form.action = "crear_grupo.php";
      document.getElementById("formType").value = "crear";
      modal.style.display = "block";
    };
  
    document.getElementById("modificarGrupoBtn").onclick = function() {
      form.action = "modificar_grupo.php";
      document.getElementById("formType").value = "modificar";
      modal.style.display = "block";
    };
  
    document.getElementById("eliminarGrupoBtn").onclick = function() {
      form.action = "eliminar_grupo.php";
      document.getElementById("formType").value = "eliminar";
      modal.style.display = "block";
      document.getElementById("materia").style.display = "none";
      document.getElementById("ID_Docente").style.display = "none";
    };
  
    span.onclick = function() {
      modal.style.display = "none";
      document.getElementById("materia").style.display = "block";
      document.getElementById("ID_Docente").style.display = "block";
    };
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById("materia").style.display = "block";
        document.getElementById("ID_Docente").style.display = "block";
      }
    };
  });
  


// SECCION IR A GRUPOS CON PHP
document.addEventListener("DOMContentLoaded", function() {
    // Obtener el contenedor de grupos
    var contenedorGrupos = document.querySelector(".contenedorGrupos");
    
    // Agregar un event listener a los botones de grupo
    contenedorGrupos.addEventListener("click", function(event) {
        var botonGrupo = event.target;
        if (botonGrupo.classList.contains("btnGrupos")) {
            // Obtener el número de grupo desde el atributo data
            var numeroGrupo = botonGrupo.getAttribute("data-grupo");
            
            // Realizar una solicitud AJAX para cargar el contenido del grupo
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "cargar_contenido_grupo.php?grupo=" + numeroGrupo, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        // Mostrar el contenido del grupo en el área designada
                        document.getElementById("contenidoGrupo").innerHTML = xhr.responseText;
                    } else {
                        console.error("Error al cargar el contenido del grupo.");
                    }
                }
            };
            xhr.send();
        }
    });
});


// SECCION IR A GRUPOS

document.addEventListener("DOMContentLoaded", function() {
    // Obtener el contenedor de grupos
    var contenedorGrupos = document.querySelector(".contenedorGrupos");
  
    // Agregar un evento de clic al contenedor de grupos
    contenedorGrupos.addEventListener("click", function(event) {
      // Verificar si se hizo clic en un botón de grupo
      if (event.target.classList.contains("btnGrupos")) {
        // Obtener el identificador del grupo desde el atributo data-grupo
        var grupo = event.target.getAttribute("data-grupo");
        // Redirigir a la página de contenido del grupo con el identificador del grupo como parámetro
        window.location.href = "contenidoGrupos.html?grupo=" + grupo;
      }
    });
  });
  


//SECCION CERRAR SESIÓN 

// Función para cerrar sesión
function cerrarSesion() {
    // Mostrar una alerta de confirmación
    var confirmarCerrarSesion = confirm("¿Estás seguro de que deseas cerrar sesión?");
    
    // Si el usuario confirma, redirigir a la página de inicio de sesión
    if (confirmarCerrarSesion) {
      window.location.href = "inicioSesion.html"; // Cambia "iniciar_sesion.html" al nombre de tu página de inicio de sesión
    } else {
      // Si el usuario cancela, no hacer nada
    }
  }
  