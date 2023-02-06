// MODIFICACION DE DOM

const curso1 = document.getElementById ("curso1");
    curso1.innerText = "CURSO MATEMATICAS";

const precio1 = document.getElementById ("precio1");
    precio1.innerText = Number (2200);

const boton1 = document.getElementById ("boton1")


const boton2 = document.getElementById ("boton2")

const botonSubmit = document.getElementById ("botonSubmit")
const limpiar = document.getElementById("limpiar")
const nombreYApellido = document.getElementById ("text1")
const DNI = document.getElementById ("text2")

const botonclass1 = document.getElementsByClassName ("boton1")

const botonclass2 = document.getElementsByClassName ("boton2")

const curso2 = document.getElementById ("curso2");
    curso2.innerText = "CURSO LENGUA";

const precio2 = document.getElementById ("precio2");
    precio2.innerText = Number (1700);

// const tablaCursos = document.getElementById ("tablaCursos")


// FUNCIONES




//Funcion constructora


class Usuario {

    constructor (nombre, DNI){

        this.nombre = nombre;
        this.DNI = DNI;

    }

}

class Curso {

    constructor (curso, precio) {

        this.curso = curso;
        this.precio = precio;

    }
    
}

function clickEnBotonSubmit () {


    let usuario = new Usuario (escuchaNombreYApellido, escuchaDNI);

    const usuarioJSN = JSON.stringify(usuario);
    localStorage.setItem("usuario", usuarioJSN)

    mostrarBienvenida ()


}

function mostrarBienvenida (){

    const usuarioJSN = localStorage.getItem("usuario");
    const usuarioParseado = JSON.parse(usuarioJSN)

    const h2 = document.getElementById("bienvenido")
    h2.innerText= "Bienvenido "+ (usuarioParseado.nombre) + "!"

}



function clickEnlimpiar(){
    sessionStorage.clear ();
    localStorage.clear ();

    const h2 = document.getElementById("bienvenido")
    h2.innerText= ""
    verificarUsuario ()
}



function clickEnBoton (event) {

        const boton = event.target 



        if (boton.innerText == "comprar") {
            boton.className = "btn btn-primary"
 
            boton.innerText = "anular compra"

            agregarCursoALaLista (boton.id)

        }else if (boton.innerText !== "comprar") {
            boton.className = "btn btn-danger"
            boton.innerText = "comprar"

            sacarCursoDeLaLista (boton.id)
        }

        


    }


function agregarCursoALaLista (iDDelBoton){

   

    if (iDDelBoton == "boton1" ) {
        
        listaDeCursoSeleccionado.push (cursos[0])
     
        sumar (parseInt(infoCurso1.precio))

    } 
    
    else if (iDDelBoton == "boton2") {

        listaDeCursoSeleccionado.push (cursos[1])

        sumar (parseInt(infoCurso2.precio))

    }
    
renderizarListaDeCursoSeleccionado ()


}

function sacarCursoDeLaLista (iDDelBoton){

    
    if (iDDelBoton == "boton1" ) {

        const indicemat = listaDeCursoSeleccionado.indexOf (infoCurso1)

        listaDeCursoSeleccionado.splice(indicemat,1)

        resta (parseInt(infoCurso1.precio))
      
    } 
    
    else if (iDDelBoton == "boton2") {

            const indicemat = listaDeCursoSeleccionado.indexOf (infoCurso2)

           listaDeCursoSeleccionado.splice(indicemat,1)

           resta (parseInt(infoCurso2.precio))

    }

    renderizarListaDeCursoSeleccionado ()

}




function renderizarListaDeCursoSeleccionado () {

  

    const tbody = tablaCursos.querySelector("tbody");
    tbody.innerHTML = "";

  for (const curso of listaDeCursoSeleccionado){

    const tr = document.createElement("tr");

        const tdcurso = document.createElement("td");
        tdcurso.innerHTML = `${curso.curso}`;

        const tdprecio = document.createElement("td");
        tdprecio.innerHTML = `$${curso.precio}`;

        tr.append(tdcurso);
        tr.append(tdprecio);

        tbody.append(tr);

  }
//   guardarcursosseleccionados ();
//   recuperarCursos ();
}


function sumar (precio){


        let totalcursos = totalpreciocursos + Number (precio)
        totalpreciocursos = totalcursos

        mostrarTotal (totalcursos)
}


function resta (precio){


    let totalcursos = totalpreciocursos - Number (precio)
    totalpreciocursos = totalcursos

    mostrarTotal(totalcursos)
}


function mostrarTotal (valor) {

    const totalvalorcursos = document.getElementById ("total")
    totalvalorcursos.innerText = "Total: $ " + valor

}

// function guardarcursosseleccionados () {

//     sessionStorage.setItem("listarender", JSON.stringify(listaDeCursoSeleccionado));
// }

// function recuperarCursos () {

//     const arraySessionStorage = sessionStorage.getItem("array1");
//     const arrayParseado = JSON.parse(arraySessionStorage);
//     console.log (arrayParseado)
// }

function verificarUsuario (){

    const usuarioJSN = localStorage.getItem("usuario");

    if (usuarioJSN !== null ){
        mostrarBienvenida ()
    }else {
    const h2 = document.getElementById("bienvenido")
    h2.innerText= "Ingrese Usuario"
    }

}


const datosUsuario = []
const cursos = []
const listaDeCursoSeleccionado = []

let escuchaNombreYApellido = ""
let escuchaDNI = 0;

let totalpreciocursos = 0;

let infoCurso1 = new Curso (curso1.innerText, precio1.innerText)
let infoCurso2 = new Curso (curso2.innerText, precio2.innerText)



cursos.push (infoCurso1, infoCurso2)


const evento = "click";

verificarUsuario ()

nombreYApellido.addEventListener ("change", () => {escuchaNombreYApellido = (nombreYApellido.value)})
DNI.addEventListener ("change", () => { escuchaDNI = (DNI.value)})

botonSubmit.addEventListener ("click", clickEnBotonSubmit);
limpiar.addEventListener ("click", clickEnlimpiar);

boton1.addEventListener ("click", clickEnBoton);
boton2.addEventListener ("click", clickEnBoton);