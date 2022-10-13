// Fetch API desde un JSON (Objeto)

const cargarAlumnosBtn = document.querySelector('#cargarAlumnos');
cargarAlumnosBtn.addEventListener('click', obtenerDatos);


function obtenerDatos() {
    fetch('datos/alumnos.json') 
        .then( respuesta => {
            return respuesta.json()
        }) 
        .then(resultado => {
            mostrarHTML(resultado);
            console.log(resultado)
        })
}

function mostrarHTML(alumnos) {
    const contenido = document.querySelector('#contenido');

    let html = '';

    alumnos.forEach( alumnos => {
        const { id, nombre, curso, division, promedio} = alumnos;

        html += `
            <p>ID: ${id} </p>
            <p>Alumno: ${nombre} </p>           
            <p>Curso: ${curso} </p>
            <p>Division: ${division} </p>
            <p>Promedio: ${promedio} </p>

        `
    });

    contenido.innerHTML = html;
    
}