const caja = document.getElementById("caja");

/** addEventListener */

const evento = "click";

// Forma 1 pasando la función
// function clickEnCajita () {
//     conso"le.log("Click en cajita);
// }
// ntListener("click", clickEnCajita);
caja.addEve
// Forma 2 usando función flecha
// caja.addEventListener(evento, () => {
//     console.log("click en cajita");
// });

/** Prefijo "on" */

// caja.onclick = () => {
//     console.log("Click en la caja");
// }

/** Eventos del ratón */

// caja.addEventListener("mousedown", () => {
//     caja.className = "caja caja-azul";
// });
//
// caja.addEventListener("mouseup", () => {
//     caja.className = "caja caja-verde";
// });

// caja.addEventListener("mouseover", () => {
//     caja.className = "caja caja-azul";
// });
//
// caja.addEventListener("mouseout", () => {
//     caja.className = "caja caja-verde";
// });

// let width = 75;
// let height = 75;
//
// caja.addEventListener("mousemove", () => {
//     width += 0.1;
//     height += 0.1;
//
//     caja.style.width = `${width}px`;
//     caja.style.height = `${height}px`;
// });

/** Eventos del teclado */

const inputNombre = document.getElementById("nombre");

// inputNombre.addEventListener("keydown", () => {
//     console.log("keydown");
// });
//
// inputNombre.addEventListener("keyup", () => {
//     console.log("keyup");
// });

// inputNombre.addEventListener("change", () => {
//     console.log("change");
// });
//
// inputNombre.addEventListener("input", () => {
//     console.log("input");
// });

// const select = document.getElementById("select");
// select.addEventListener("change", () => {
//     console.log(select.value);
// });

/** Objeto event */

// const input = document.getElementById("nombre");
// input.addEventListener("input", (event) => {
//     console.log(event);
// })

/** Formulario */

// const formulario = document.getElementById("formulario");
//
// formulario.addEventListener("submit", (event) => {
//
//     const inputNombre = document.getElementById("nombre");
//     const inputEdad = document.getElementById("edad");
//
//     const edad = parseInt(inputEdad.value);
//
//     if(edad < 18) {
//         event.preventDefault();
//         alert("La edad tiene que ser mayor a 18");
//     }
// });

/** Ejemplo completo */

// Clases
class Producto {

    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Funciones
function renderizarTabla (productosARenderizar) {

    // Limpiamos la tabla
    const tbody = tablaProductos.querySelector("tbody");
    tbody.innerHTML = "";

    // Recorremos los productos
    for(const producto of productosARenderizar) {

        const tr = document.createElement("tr");

        const tdNombre = document.createElement("td");
        tdNombre.innerHTML = `${producto.nombre}`;

        const tdPrecio = document.createElement("td");
        tdPrecio.innerHTML = `$${producto.precio}`;

        // Agregar td's al tr
        tr.append(tdNombre);
        tr.append(tdPrecio);

        // Agregar el tr al tbody
        tbody.append(tr);
    }

}

// Inicio de programa
const productos = [];

// DOM
const tablaProductos = document.getElementById("tablaProductos");
const inputNombreProducto = document.getElementById("nombreProducto");
const inputPrecioProducto = document.getElementById("precioProducto");
const inputBuscarProducto = document.getElementById("buscarProducto");

const formAgregarProducto = document.getElementById("agregarProducto");
formAgregarProducto.addEventListener("submit", (event) => {

    // Frenamos el flow del evento
    event.preventDefault();

    // Obtengo el nombre y precio de los inputs
    const nombre = inputNombreProducto.value;
    const precio = inputPrecioProducto.value;

    // Limpio los inputs
    inputNombreProducto.value = "";
    inputPrecioProducto.value = "";

    // Creo producto y lo agrego a la lista
    productos.push(new Producto(nombre, precio));

    renderizarTabla(productos);
});

inputBuscarProducto.addEventListener("input", () => {

    // Obtengo el value del input
    const productoABuscar = inputBuscarProducto.value;

    // Obtener productos que contienen el valor del input
    const productosFiltrados = productos.filter( (producto) => {
        return producto.nombre.toLowerCase().includes(productoABuscar.toLowerCase());
    });

    renderizarTabla(productosFiltrados);
});

