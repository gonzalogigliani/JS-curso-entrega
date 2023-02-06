// localStorage.setItem("nombre", "Joaquin");

// const nombreUsuario = localStorage.getItem("nombre");
// console.log(nombreUsuario);

// Sia queremos obtener el valor de una clave que no existe nos devuelve NULL
// const vlorQueNoExiste = localStorage.getItem("edad");
// console.log(valorQueNoExiste);

// Obtener nombre de key con el método key y obtener su valor
// localStorage.setItem("edad", 20);
// localStorage.setItem("apellido", "Perez");
// localStorage.setItem("email", "asd@mail.com");
//
// const key = localStorage.key(3);
// const nombre = localStorage.getItem(key);

// Eliminar datos
// localStorage.removeItem("apellido"); // Elimina la key "apellido"
// localStorage.clear(); // Elimina el localStorage

// Los datos siempre se guardan como string
// localStorage.setItem("saludo", "Hola");
// localStorage.setItem("numero", 20);
//
// const numero = localStorage.getItem("numero");
// console.log(numero);

// const nombres = ["Pedro", "Martin", "Juan"];
// localStorage.setItem("lista_de_nombres", nombres);
//
// const stringListaDeNombres = localStorage.getItem("lista_de_nombres");
// const listaDeNombres = stringListaDeNombres.split(",");

// console.log(listaDeNombres);

// Split y Join

// const stringArray = "Pedro-Miguel-Juan";
// const nombres = stringArray.split("-");
// console.log(nombres);

// const nombres = ["Juan", "Pedro", "Miguel"];
// const stringNombres = nombres.join("-");
// console.log(stringNombres);
// const arrayNombres = stringNombres.split("-");
// console.log(arrayNombres);

// Almacenar objeto
// const persona = {
//     nombre: "Rodrigo",
//     edad: 20,
//     telefono: "11114444",
//     mostrarNombre: () => {
//         console.log("Mi nombre es Rodrigo");
//     }, // El método no lo puede transformar a string
//     email: "asd@mail.com",
// };
//
// const personaJSON = JSON.stringify(persona);
//
// localStorage.setItem("persona", personaJSON);
//
// // Obtener objeto en JSON
// const personaLocalStorage = localStorage.getItem("persona");
//
// const objetoPersona = JSON.parse(personaLocalStorage);
//
// console.log(objetoPersona);

// Almacenar arrays
// const array = [1, 2, 3];
//
// const arrayJSON = JSON.stringify(array);
//
// localStorage.setItem("array1", arrayJSON);
//
// const arrayLS = localStorage.getItem("array1");
// const arrayParseado = JSON.parse(arrayLS);
//
// console.log(arrayParseado);

/**
 * EJEMPLO STORAGE
 */

// Clases
class Producto {

    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Funciones

function obtenerCantidadDeProductoEnElCarrito (nombre) {

    let cantidad = 0;

    // Buscar el producto adentro del carrito
    const productoEnElCarrito = carrito.find( (productoCarrito) => productoCarrito.nombre === nombre);

    // Si el producto existe en el carrito, asignamos su cantidad a la variable cantidad
    if(productoEnElCarrito !== undefined) {
        cantidad = productoEnElCarrito.cantidad;
    }

    return cantidad;
}

function leerCarritoEnLS () {

    let devolverCarrito = [];

    const carritoLS = localStorage.getItem("carrito");

    // Si la key carrito existe en el LS
    if(carritoLS !== null) {
        devolverCarrito = JSON.parse(carritoLS);
    }

    return devolverCarrito;
}

function guardarCarritoEnLS () {

    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function renderizarCarrito () {

    // Limpio la tabla del carrito
    tbodyCarrito.innerHTML = "";

    carrito.forEach( (productoCarrito) => {

        // Creo fila
        const tr = document.createElement("tr");

        // Creo columnas de nombre y cantidad
        const tdNombre = document.createElement("td");
        tdNombre.innerHTML = `${productoCarrito.nombre}`;

        const tdCantidad = document.createElement("td");
        tdCantidad.innerHTML = `${productoCarrito.cantidad}`;

        // Agrego columnas a la fila
        tr.append(tdNombre, tdCantidad);

        // Agrego la fila al body del carrito
        tbodyCarrito.append(tr);
    });

}

function modificarCarrito (producto, cantidad) {

    // Obtengo el índice del producto en el carrito
    const indiceCarrito = carrito.findIndex( (productoCarrito) => productoCarrito.nombre === producto.nombre);

    // El producto no existe todavía en el carrito
    if(indiceCarrito === -1) {
        carrito.push({
            nombre: producto.nombre,
            cantidad: cantidad,
        });
    } else {
        // Si el producto existe, modifico su atributo cantidad
        carrito[indiceCarrito].cantidad = cantidad;
    }

    renderizarCarrito();
    guardarCarritoEnLS();
}

function renderizarProductos () {

    tbodyProductos.innerHTML = "";

    productos.forEach( (producto) => {

        const tr = document.createElement("tr");

        const tdNombre = document.createElement("td");
        tdNombre.innerHTML = `${producto.nombre}`;

        const tdPrecio = document.createElement("td");
        tdPrecio.innerHTML = `$${producto.precio}`;

        const tdAcciones = document.createElement("td");
        const inputNumber = document.createElement("input");
        inputNumber.type = "number";
        inputNumber.value = obtenerCantidadDeProductoEnElCarrito(producto.nombre);

        inputNumber.addEventListener("change", () => {

            modificarCarrito(producto, inputNumber.value);

        });

        tdAcciones.append(inputNumber);

        tr.append(tdNombre, tdPrecio, tdAcciones);

        tbodyProductos.append(tr);
    });

}

const productos = [
    new Producto("Fideos", 50),
    new Producto("Arroz", 30),
    new Producto("Yogurt", 20),
    new Producto("Café", 90),
    new Producto("Galletitas", 40),
];

// Obtenemos los productos que están en LS SI HAY (Si no hay nada en LS, se inicializa con un array vacío)
const carrito = leerCarritoEnLS();

const tbodyProductos = document.querySelector("#productos tbody");
const tbodyCarrito = document.querySelector("#carrito tbody");

renderizarProductos();
renderizarCarrito();
