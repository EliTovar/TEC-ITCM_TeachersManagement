document.addEventListener('DOMContentLoaded', function() {
    const studentInfo = document.getElementById('student-info');

    // Obtener los parámetros de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const controlNumber = urlParams.get('controlNumber');
    const name = urlParams.get('name');
    const grade = urlParams.get('grade');

    // Mostrar la información del estudiante
    const studentDiv = document.createElement('div');
    studentDiv.classList.add('student');
    studentDiv.innerHTML = `
        <p><strong>Numero de control:</strong> ${controlNumber}</p>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Promedio:</strong> ${grade}</p>
    `;
    studentInfo.appendChild(studentDiv);
});
