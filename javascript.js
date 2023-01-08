
function promedioAlumnos () {

    let nombre = prompt ("Ingrese nombre y apellido del alumno")

    let nota1 = parseInt(prompt ("Ingrese nota del primer parcial"))
    let nota2 = parseInt(prompt ("Ingrese nota del segundo parcial"))
    let nota3 = parseInt(prompt ("Ingrese nota del tercer parcial"))
    
    let resultado = (nota1 + nota2 + nota3) 

    let promedio = (resultado / 3)

    if (promedio < 7) {

        console.log ("El alumno " + nombre + " tiene un promedio de " + promedio + " y esta desaprobado" )
    } else if (promedio >= 7){
        console.log ("El alumno " + nombre + " tiene un promedio de " + promedio + " y esta aprobado")
    } 

}



let cantidadTotalDeAlumnos = parseInt (prompt("Ingrese la cantidad total de alumnos en este curso"))

for (let i = 0; i < cantidadTotalDeAlumnos; i++) {
    
    promedioAlumnos ()
}






