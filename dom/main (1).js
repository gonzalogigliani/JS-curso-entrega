/*** Get elements by ID */

// const div = document.getElementById("div");
//
// console.log(div.innerHTML);
//
// const parrafo = document.getElementById("parrafo1");
//
// console.log(parrafo.innerHTML);

/** Get elements by class name */

// const parrafos = document.getElementsByClassName("parrafo");
//
// console.log(parrafos[0].innerHTML);

/** Get elements by tag name */

// const parrafos = document.getElementsByTagName("p");
//
//
// for(const parrafo of parrafos) {
//     console.log(parrafo.innerHTML);
// }

// for(let i = 0; i < parrafos.length; i++) {
//     console.log(parrafos[i]);
// }

/** Modificar nodos */

// const parrafos = document.getElementsByClassName("parrafo");
//
// for(const parrafo of parrafos) {
//
//     // Inner text
//     // parrafo.innerText = parrafo.innerText + " EDITADO";
//
//     // Inner html
//     // parrafo.innerHTML = "<strong>HOLA</strong>";
// }

// const parrafos = document.getElementsByTagName("p");
//
// for(const parrafo of parrafos) {
//
//     // Class name
//     parrafo.className += " parrafo-verde";
// }

/** Agregar y quitar nodos */

// const div = document.getElementById("div");
//
// const parrafo4 = document.createElement("p");
// parrafo4.innerText = "Párrafo 4";
// parrafo4.className = "parrafo-rojo";

// div.append(parrafo4);

// div.remove();
// parrafo4.remove();

/** Obtener valor de input */

// const input = document.getElementById("input1");

// input.value = "HOLA CÓMO ESTÁS";

// const select = document.getElementById("select1");
//
// select.value = 2;

/** Backsticks */

// const nombre = "Rodrigo";
// const frase = "Cómo estás";

// Forma tradicional
// const textoFinal = "Hola " + nombre + "! " + frase + "" +
//     "" +
//     "" +
//     "HOLA";

// Forma backsticks
// const textoFinal = `Hola ${nombre}! ${frase}
//
//
// HOLA
// `;
//
// console.log(textoFinal);

/** Query Selector */

// const parrafo = document.querySelector("div#div p.parrafo");
//
// console.log(parrafo);

// const parrafos = document.querySelectorAll("div#div p.parrafo");
//
// console.log(parrafos);


/**
 * EJEMPLO DE DOM
 */

// Clases
class Alumno {

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

}

// Función

function renderizarAlumnos () {

    // Limpiar mi UL
    ulListaAlumnos.innerHTML = "";

    // Recorro los alumnos
    for(const alumno of alumnos) {

        // Crear LI
        const li = document.createElement("li");

        // Crear P para el nombre
        const pNombre = document.createElement("p");
        pNombre.innerHTML = `<strong>Nombre:</strong> ${alumno.nombre}`;

        // Crear P para la edad
        const pEdad = document.createElement("p");
        pEdad.innerHTML = `<strong>Edad: </strong> ${alumno.edad}`;

        // Agrego los P's al LI
        li.append(pNombre);
        li.append(pEdad);

        // Agrego el LI al UL
        ulListaAlumnos.append(li);
    }

}

function agregarAlumno (nombre, edad) {

    // Creamos el objeto alumno y lo agregamos al array
    const alumno = new Alumno(nombre, edad);
    alumnos.push(alumno);

    // Renderizar alumnos
    renderizarAlumnos();
}

// Inicio del programa

const ulListaAlumnos = document.getElementById("lista-alumnos");
const alumnos = [];
let nombre = prompt("Ingrese el nombre del alumno (Ingrese Salir para finalizar el programa)");
let edad = 0;

while(nombre !== "Salir") {

    edad = parseInt(prompt("Ingrese la edad del alumno"));

    // Agrego el alumno
    agregarAlumno(nombre, edad);

    // Vuelvo al pedir el nombre para verificar si el usuario quiere salir
    nombre = prompt("Ingrese el nombre del alumno (Ingrese Salir para finalizar el programa)");

}
