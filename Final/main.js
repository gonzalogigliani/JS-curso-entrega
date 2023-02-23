
function clickEnlimpiar(){
    sessionStorage.clear ();
    localStorage.clear ();

    const h2 = document.getElementById("bienvenido")
    h2.innerText= ""
    verificarUsuario ()
}

function guardarUsuarioStorage (){


    let usuario = new Usuario (escucharNombre);

    const usuarioJSN = JSON.stringify(usuario);
    sessionStorage.setItem("usuario", usuarioJSN)
}

function inicio() {
    
    fetch ("./alumnos.json") 
    .then( (response) => {
        return response.json ();
    })
    .then ( (responseAlumnos) => {
    
        login(responseAlumnos) 
    
    })
}

function login (listadoAlumno) {
    
    //Traigo Valores de la API
    for (const list of listadoAlumno) {

        let nombreApi = list.nombre
        let passApi = list.pass

        
        if (nombreApi == escucharNombre && passApi== escucharPass) {
            
            guardarUsuarioStorage()

            window.location = "index2.html";
        }

    }
}

class Usuario {

    constructor (nombre, DNI){

        this.nombre = nombre;
    }

}

// INICIO DE PAGINA LOGIN

const nombre = document.getElementById ("nombre")
const pass = document.getElementById ("pass")

const evento = "click";


// verificarUsuario ()
let escucharNombre = ""
let escucharPass = 0;

nombre.addEventListener ("change", () => {escucharNombre = (nombre.value)})
pass.addEventListener ("change", () => { escucharPass = (pass.value)})

botonSubmit.addEventListener ("click", inicio);
limpiar.addEventListener ("click", clickEnlimpiar)
