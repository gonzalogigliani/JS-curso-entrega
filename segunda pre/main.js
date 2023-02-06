//----------------------Clases---------------------

class Alumno {
    constructor(nombre, materia, nota1, nota2, nota3, estado ) {
        this.nombre = nombre;
        this.materia = materia;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.estado = estado;
    }

    ingresoNota1 (nota){
        this.nota1 = nota
    }
    ingresoNota2 (nota){
        this.nota2 = nota
    }
    ingresoNota3 (nota){
        this.nota3 = nota
    }
    estadoAlumno (estado){
        this.estado = estado
    }
}

//-------------Funciones--------------
function indiceDeAlumno (nombre) {
    
        let indiceAlumno = -1;
    
        for(let i = 0; i < alumnos.length; i++) {
    
            if(alumnos[i].nombre === nombre) {
                indiceAlumno = i;
                break;
            }
        }
    
        return indiceAlumno;
    }

    function promedioAlumnos (indice) {


        let nota1 = parseInt(prompt ("Ingrese nota del primer parcial"))

        alumnos [indice].ingresoNota1(nota1);

        let nota2 = parseInt(prompt ("Ingrese nota del segundo parcial"))

        alumnos [indice].ingresoNota2(nota2);

        let nota3 = parseInt(prompt ("Ingrese nota del tercer parcial"))

        alumnos [indice].ingresoNota3(nota3);
        
        let resultado = (nota1 + nota2 + nota3) 
    
        let promedio = (resultado / 3)
    

        if (promedio < 7) {

            const estado ="Desaprobado"
            alumnos[indice].estadoAlumno(estado);
        
        } else if ( promedio >= 7) {

            const estado ="Aprobado"
            alumnos[indice].estadoAlumno(estado);


        } 
    
    }

    function ingresarAlumno(){
        
        let nombre = prompt ("Ingrese Nombre del Alumno")
        let indice = indiceDeAlumno (nombre)

        promedioAlumnos(indice)


    } 

    function estadoDeAlumnos(){
        const actualizado = alumnos.map ((el)=>{
            return{
                nombre: el.nombre,
                estado: el.estado,
            }
        })
    console.log (actualizado)
    }


//--------------------------------------------

//Paso 1
const alumnos = [

    new Alumno ("Luis", "Matematica", 0, 0, 0, "Cursando"),
    new Alumno ("Gonzalo", "Matematica", 0, 0, 0, "Cursando"),
    new Alumno ("Roberta", "Matematica", 0, 0, 0, "Cursando"),
    new Alumno ("Miercoles", "Matematica", 0, 0, 0, "Cursando"),

]

let operacion = prompt("Ingrese alguna operación: 1- Ingresar Alumno, 2- Salir");

while(operacion !== "Salir") {

    switch(operacion) {

        case "1":

            ingresarAlumno();
            break;

        case "2":
            estadoDeAlumnos();
            break;

        default:
            console.log("Opción incorrecta");
            break;
    }

     // Vuelvo a pedir que ingrese una operación
    operacion = prompt("Ingrese una nueva operación: 1- Ingresar Alumno, 2- Ver estado de los alumnos, 3- Salir");
}

console.log (alumnos)