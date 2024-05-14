
const estudiantes = [
    { id: 1, apellidos: 'López', nombres: 'Juan', direccion: 'Calle 123', telefono: '123456789' },
    { id: 2, apellidos: 'Martínez', nombres: 'María', direccion: 'Avenida 456', telefono: '987654321' },
    { id: 3, apellidos: 'González', nombres: 'Carlos', direccion: 'Plaza Mayor', telefono: '555555555' },
    { id: 4, apellidos: 'Rodríguez', nombres: 'Laura', direccion: 'Avenida Central', telefono: '999999999' },
    { id: 5, apellidos: 'Pérez', nombres: 'Ana', direccion: 'Calle Principal', telefono: '777777777' },
    { id: 6, apellidos: 'Hernández', nombres: 'Pedro', direccion: 'Ruta 66', telefono: '888888888' },
    { id: 7, apellidos: 'Díaz', nombres: 'Sofía', direccion: 'Avenida del Sol', telefono: '666666666' },
    { id: 8, apellidos: 'Martín', nombres: 'Miguel', direccion: 'Callejón Oscuro', telefono: '222222222' },
    { id: 9, apellidos: 'Ruiz', nombres: 'Elena', direccion: 'Paseo de la Luna', telefono: '333333333' },
    { id: 10, apellidos: 'Fernández', nombres: 'Luis', direccion: 'Calle del Arte', telefono: '444444444' },
];


let indiceEstudianteActual = 0;
const tbody = document.getElementById('tbodyEstudiantes');

function mostrarEstudiante() {
    if (indiceEstudianteActual < estudiantes.length) {
        const estudiante = estudiantes[indiceEstudianteActual];
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${estudiante.id}</td>
            <td>${estudiante.apellidos}</td>
            <td>${estudiante.nombres}</td>
            <td>${estudiante.direccion}</td>
            <td>${estudiante.telefono}</td>
            <td><button onclick="eliminarEstudiante(this)">Eliminar</button></td> <!-- Botón de eliminar -->
        `;
        tbody.appendChild(tr);
        indiceEstudianteActual++;
    } else {
        alert('No hay más estudiantes para mostrar.');
    }
}

function eliminarEstudiante(boton) {
    const fila = boton.parentNode.parentNode;
    tbody.removeChild(fila);}