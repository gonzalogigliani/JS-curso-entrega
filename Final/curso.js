const curso1 = document.getElementById ("curso1");
    curso1.innerText = "CURSO MATEMATICAS";

const precio1 = document.getElementById ("precio1");
    precio1.innerText = Number (2200);

const boton1 = document.getElementById ("boton1")


const boton2 = document.getElementById ("boton2")



const botonclass1 = document.getElementsByClassName ("boton1")

const botonclass2 = document.getElementsByClassName ("boton2")

const curso2 = document.getElementById ("curso2");
    curso2.innerText = "CURSO LENGUA";

const precio2 = document.getElementById ("precio2");
    precio2.innerText = Number (1700);


const botonSubmit = document.getElementById ("botonSubmit")
const limpiar = document.getElementById("limpiar")

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

function mostrarBienvenida (){

    const usuarioJSN = sessionStorage.getItem("usuario");
    const usuarioParseado = JSON.parse(usuarioJSN)

    const h2 = document.getElementById("bienvenido")
    h2.innerText= "Bienvenido "+ (usuarioParseado.nombre) + "!"

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


// --------------INCIO INDEX2--------------------------------------------

swal( "Bienvenido", "Comienza Tu Compra!", "success");

mostrarBienvenida()

setTimeout (()=>{
    Toastify({
        text: "No te olvides de chequear los nuevos cursos que estan por venir",
        duration: 10000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    
},10000)

const datosUsuario = []
const cursos = []
const listaDeCursoSeleccionado = []


let totalpreciocursos = 0;

let infoCurso1 = new Curso (curso1.innerText, precio1.innerText)
let infoCurso2 = new Curso (curso2.innerText, precio2.innerText)



cursos.push (infoCurso1, infoCurso2)

boton1.addEventListener ("click", clickEnBoton);
boton2.addEventListener ("click", clickEnBoton);


