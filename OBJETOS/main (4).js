/** Objetos literales */

// Hasta ahora teníamos que crear 3 variables separadas por cada entidad
// const nombreAlumno1 = prompt("Ingrese el nombre");
// const edadAlumno1 = prompt("ingrese la edad");
// const cursoAlumno1 = prompt("Ingrese el curso");
//
// const nombreAlumno2 = prompt("Ingrese el nombre");
// const edadAlumno2 = prompt("ingrese la edad");
// const cursoAlumno2 = prompt("Ingrese el curso");
//
// const nombreAlumno3 = prompt("Ingrese el nombre");
// const edadAlumno3 = prompt("ingrese la edad");
// const cursoAlumno3 = prompt("Ingrese el curso");

// Crear objetos para cada alumno
// const alumno1 = {
//     nombre: "Pedro",
//     edad: 25,
//     curso: "JavaScript",
//     calle: "Calle Falsa 123",
//     numeroDeTelefono: "44441111",
// };
//
// const alumno2 = {
//     nombre: "Joaquin",
//     edad: 30,
//     curso: "Desarrollo Web",
//     calle: "Av. Siempreviva 742",
//     numeroDeTelefono: "44441111",
// };
//
// const alumno3 = {
//     nombre: "Martín",
//     edad: 20,
//     curso: "JavaScript",
//     calle: "Calle falsa 456",
//     numeroDeTelefono: "44441111",
// };
//
// const alumno4 = {
//     nombre: "Matias",
//     edad: 40,
//     curso: "Desarrollo Web",
//     calle: "Calle Falsa 789",
//     numeroDeTelefono: "44441111",
// };

// Acceder atributos
// console.log(alumno2.curso);
// console.log(alumno2["curso"]);
//
// console.log(alumno2.numeroDeTelefono); // Si trato de acceder a algo que no existe me devuelve "undefined"

// Cambiar valores atributos

// console.log(alumno3.edad);

// alumno3.edad++;
// alumno3.edad = 21;

// console.log(alumno3.nombre);

// console.log(alumno2);
//
// alumno2.nombre = "Matias";
//
// console.log(alumno2);

/** Función constructora */

// function Alumno (nombre, edad, curso, calle, numeroDeTelefono) {
//
//     this.nombre = nombre;
//     this.edad = edad;
//     this.curso = curso;
//     this.calle = calle;
//     this.numeroDeTelefono = numeroDeTelefono;
// }
//
// const alumno1 = new Alumno("Pedro", 25, "JavaScript", "Calle Falsa 123", "44441111");
// const alumno2 = new Alumno("Joaquin", 30, "Desarrollo Web", "Av. Siempreviva 742", "44441111");
// const alumno3 = new Alumno("Martín", 20, "JavaScript", "Calle falsa 456", "44441111");
//
// console.log(alumno1);
// console.log(alumno2);
// console.log(alumno3);

/** Métodos vs Funciones */

// Funciones normales
// function sumar (numero1, numero2) {
//     return numero1 + numero2;
// }
//
// const resultado = sumar(10, 5);
//
// console.log(resultado);

// Métodos

// function Alumno (nombre, edad, curso, calle, numeroDeTelefono) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.curso = curso;
//     this.calle = calle;
//     this.numeroDeTelefono = numeroDeTelefono;
//
//     this.mostrarMensaje = function() {
//         console.log("Hola");
//     }
//
//     this.mostrarEdad = function() {
//         console.log("Mi edad es: " + this.edad);
//     }
//
//     this.cumpleAnios = function() {
//         this.edad++;
//     }
//
//     this.calcularAnioDeNacimiento = function(anioActual) {
//         return anioActual - this.edad;
//     }
// }

// const alumno1 = new Alumno("Pedro", 25, "JavaScript", "Calle Falsa 123", "44441111");
//
// alumno1.mostrarMensaje();
// console.log(alumno1.nombre);

// Mostrar edad
// alumno1.mostrarEdad(); // 25
//
// alumno1.edad = 30;
//
// alumno1.mostrarEdad(); // 30

// Cumple anios
// alumno1.cumpleAnios();
// alumno1.mostrarEdad();

// Fecha de nacimiento
// const fechaDeNacimiento = alumno1.calcularAnioDeNacimiento(2023);
//
// console.log(fechaDeNacimiento);

// For - in
// if("codigoPostal" in alumno1) {
//     console.log("EL ALUMNO1 TIENE LA PROPIEDAD");
// } else {
//     console.log("EL ALUMNO NO TIENE LA PROPIEDAD");
// }

// for(const propiedad in alumno1) {
//     console.log(alumno1[propiedad]);
// }


/** Tipos de datos con objetos */

// let numero = 30;
//
// console.log(typeof numero);

// const nombre = "RODRIGO";
// const esVerdadero = true;

// console.log(numero.toLowerCase());
// numero = "HOLA";
// console.log(numero.toLowerCase());

/** Clases */

// class Alumno {
//
//     constructor(nombre, edad, curso, calle, numeroDeTelefono) {
//         this.nombre = nombre;
//         this.edad = edad;
//         this.curso = curso;
//         this.calle = calle;
//         this.numeroDeTelefono = numeroDeTelefono;
//     }
//
//     mostrarEdad () {
//         console.log("La edad es: " + this.edad);
//     }
//
//     cumpleAnios () {
//         this.edad++;
//     }
//
//     calcularAnioDeNacimiento (anioActual) {
//         return anioActual - this.edad;
//     }
// }
//
// const alumno1 = new Alumno("Pedro", 25, "JavaScript", "Calle Falsa 123", "44441111");
//
// alumno1.cumpleAnios();
// alumno1.mostrarEdad();
//
// const fechaDeNacimiento = alumno1.calcularAnioDeNacimiento(2023);
// console.log(fechaDeNacimiento);

/**
 * Ejemplo alumno con clase
 */

class Alumno {

    constructor(nombre, edad, curso) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }
}

class Curso {

    constructor(nombre, fechaDeFinalizacion) {
        this.nombre = nombre;
        this.fechaDeFinalizacion = fechaDeFinalizacion;
    }
}

const curso1 = new Curso("JavaScript", "20/02/2023");
const curso2 = new Curso("Desarrollo Web", "15/03/2023");

const alumno1 = new Alumno("Pedro", 25, curso1);
const alumno2 = new Alumno("Matias", 30, curso2);

console.log(alumno2.curso.fechaDeFinalizacion);
