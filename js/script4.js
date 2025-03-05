// Función para cargar las actividades desde la base de datos
function cargarActividades() {
    // Aquí añadir un AJAX para obtener las actividades desde el servidor y mostrarlas en la lista
}

// Función para agregar una nueva actividad
function agregarActividad() {
    var titulo = document.getElementById("titulo").value;
    var descripcion = document.getElementById("descripcion").value;
    var valor = document.getElementById("valor").value;
    var id_evaluacion = document.getElementById("id_evaluacion").value;

    // Aquí puedes añadir un AJAX para enviar los datos al servidor PHP y agregar la actividad a la base de datos
}
document.addEventListener("DOMContentLoaded", function() {
    cargarActividades();
    cargarEvaluaciones();

    document.getElementById('lista-actividades').addEventListener('click', function(e) {
        if (e.target && e.target.matches("li")) {
            cargarActividad(e.target.dataset.id);
        }
    });
});

function cargarActividades() {
    fetch('listar_actividades.php')
        .then(response => response.json())
        .then(data => {
            const lista = document.getElementById('lista-actividades');
            lista.innerHTML = '';
            data.forEach(actividad => {
                let li = document.createElement('li');
                li.textContent = actividad.titulo;
                li.dataset.id = actividad.ID_Actividades;
                lista.appendChild(li);
            });
        });
}

function cargarEvaluaciones() {
    // Asume que tienes un script similar para listar las evaluaciones
    fetch('listar_evaluaciones.php')
        .then(response => response.json())
        .then(data => {
            const select = document.getElementById('id_evaluacion');
            select.innerHTML = '';
            data.forEach(evaluacion => {
                let option = document.createElement('option');
                option.value = evaluacion.ID_Eval;
                option.textContent = evaluacion.descripcion;
                select.appendChild(option);
            });
        });
}

function agregarActividad() {
    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;
    const valor = document.getElementById('valor').value;
    const id_evaluacion = document.getElementById('id_evaluacion').value;

    fetch('agregar_actividad.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `titulo=${titulo}&descripcion=${descripcion}&valor=${valor}&id_evaluacion=${id_evaluacion}`
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        cargarActividades();
    });
}

function cargarActividad(id) {
    fetch('listar_actividad.php?id=' + id)
        .then(response => response.json())
        .then(data => {
            document.getElementById('id_actividad').value = data.ID_Actividades;
            document.getElementById('titulo').value = data.titulo;
            document.getElementById('descripcion').value = data.descripcion;
            document.getElementById('valor').value = data.valor;
            document.getElementById('id_evaluacion').value = data.ID_Evaluacion;
        });
}

function modificarActividad() {
    const id_actividad = document.getElementById('id_actividad').value;
    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;
    const valor = document.getElementById('valor').value;
    const id_evaluacion = document.getElementById('id_evaluacion').value;

    fetch('modificar_actividad.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `id_actividad=${id_actividad}&titulo=${titulo}&descripcion=${descripcion}&valor=${valor}&id_evaluacion=${id_evaluacion}`
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        cargarActividades();
    });
}

function eliminarActividad() {
    const id_actividad = document.getElementById('id_actividad').value;

    fetch('eliminar_actividad.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `id_actividad=${id_actividad}`
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        cargarActividades();
    });
}


// Función para modificar una actividad existente
function modificarActividad() {
    var id_actividad = document.getElementById("id_actividad").value;
    var titulo = document.getElementById("titulo").value;
    var descripcion = document.getElementById("descripcion").value;
    var valor = document.getElementById("valor").value;
    var id_evaluacion = document.getElementById("id_evaluacion").value;

    // Aquí puedes añadir un AJAX para enviar los datos al servidor PHP y actualizar la actividad en la base de datos
}

// Función para eliminar una actividad
function eliminarActividad() {
    var id_actividad = document.getElementById("id_actividad").value;

    // Aquí puedes añadir un AJAX para enviar la solicitud de eliminación al servidor PHP y eliminar la actividad de la base de datos
}

// Cargar actividades al cargar la página
window.onload = function() {
    cargarActividades();
};