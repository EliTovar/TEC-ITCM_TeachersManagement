document.addEventListener('DOMContentLoaded', function() {
    const students = [
        { controlNumber: '12345678', name: 'Juan Pérez', grade: 85.2 },
        { controlNumber: '87654321', name: 'Ana Gómez', grade: 90.2 },
        { controlNumber: '11223344', name: 'Luis Martínez', grade: 78.4 },
        { controlNumber: '44332211', name: 'María López', grade: 92.8 }
    ];

    const studentList = document.getElementById('student-list');

    students.forEach(student => {
        const studentDiv = document.createElement('div');
        studentDiv.classList.add('student');

        const nameDiv = document.createElement('div');
        nameDiv.textContent = student.name;

        nameDiv.addEventListener('click', function() {
            redirectToStudentPage(student);
        });

        studentDiv.appendChild(nameDiv);

        studentList.appendChild(studentDiv);
    });

    function redirectToStudentPage(student) {
        const url = `student.html?controlNumber=${student.controlNumber}&name=${encodeURIComponent(student.name)}&grade=${student.grade}`;
        window.location.href = url;
    }
});
