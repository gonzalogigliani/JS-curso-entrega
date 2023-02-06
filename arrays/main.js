
// const nombres = ["Matias", "Rodrigo", "Manuel", "Camila", "Pablo"];

// Obtener índice dinámicamente
// const indice = parseInt(prompt("Ingrese un índice"));
//
// console.log(nombres[indice]);

// Recorrer array con un número fijo
// for(let i = 0; i < 5; i++) {
//
//     console.log(nombres[i]);
//
// }

// Recorrer array con la propiedad length
// for(let i = 0; i < nombres.length; i++) {
//     console.log(nombres[i]);
// }

/** Agregar y quitar elementos array */

// Agregar con push

// console.log(nombres);
//
// nombres.push("Miguel");
//
// console.log(nombres);

// Agregar con unshift

// console.log(nombres);
//
// nombres.unshift("Miguel");
//
// console.log(nombres);

// Quitar con pop

// const nombreEliminado = nombres.pop();

// Quitar con unshift
// const nombreEliminado = nombres.shift();
//
// console.log(nombres);
// console.log(nombreEliminado);

/** Splice */

// ["Matias", "Rodrigo", "Manuel", "Camila", "Pablo"]

// const elementosEliminados = nombres.splice(1, 3);
//
// console.log(nombres);
// console.log(elementosEliminados);

/** Join */

// const elementosSeparadosPorUnGuion = nombres.join(", ");
//
// console.log(elementosSeparadosPorUnGuion);

/** Concat */

// const nombres2 = ["Pilar", "Milagros"];
//
// const nuevosNombres = nombres.concat(nombres2);
//
// console.log(nuevosNombres);

// console.log(nombres);
// console.log(nombres2);

/** Slice */

// const nombresCopiados = nombres.slice(1, 4);
//
// console.log(nombresCopiados);
// console.log(nombres);

/** Index of */

// console.log(nombres);
//
// const indicePablo = nombres.indexOf(1238);
// console.log(indicePablo);

/** Includes */

// const existeMatias = nombres.includes(2871);
//
// console.log(existeMatias);

/** Reverse */

// console.log(nombres);
//
// nombres.reverse();
//
// console.log(nombres);

// const numeros = [2, 6, 8, 10, 15, 20];
//
// console.log(numeros[0]);
// numeros.reverse();
// console.log(numeros[0]);

/**
 * Ejemplo añadir y eliminar
 */

// const nombres = [];
// let nombre = prompt("Ingrese un nombre");
//
// while(nombre !== "Salir") {
//
//     if(nombres.includes(nombre)) {
//
//         const eliminar = prompt("Desea eliminar al elemento " + nombre + ". Si o No");
//
//         if(eliminar === "Si") {
//
//             const indiceNombre = nombres.indexOf(nombre);
//             nombres.splice(indiceNombre, 1);
//         }
//
//     } else {
//         nombres.push(nombre);
//     }
//
//     nombre = prompt("Ingrese un nombre o Salir");
// }
//
// console.log(nombres);

/** For of */

// const nombres = ["Martin", "Pedro", "Miguel"];
//
// for(const nombre of nombres) {
//
//     console.log(nombre);
//
// }

/**
 * Simulador homebanking
 */

// Clases
// class Cliente {
//
//     constructor(nombre, dni, saldo) {
//         this.nombre = nombre;
//         this.dni = dni;
//         this.saldo = saldo;
//     }
//
//     retirar (monto) {
//         this.saldo = this.saldo - monto;
//     }
//
//     depositar (monto) {
//         this.saldo = this.saldo + monto;
//     }
// }
//
// // Funciones
// function obtenerIndiceDeClientePorDNI (dni) {
//
//     let indiceCliente = -1;
//
//     for(let i = 0; i < clientes.length; i++) {
//
//         if(clientes[i].dni === dni) {
//             indiceCliente = i;
//             break;
//         }
//     }
//
//     return indiceCliente;
// }
//
// function clienteExiste (dni) {
//
//     let encontrado = false;
//
//     for(const cliente of clientes) {
//
//         if(cliente.dni === dni) {
//             encontrado = true;
//             break;
//         }
//
//     }
//
//     return encontrado;
// }
//
// function depositar () {
//
//     let DNI = prompt("Ingrese el DNI del cliente que quiere depositar");
//
//     while(!clienteExiste(DNI)) {
//
//         DNI = prompt("DNI incorrecto, ingrese el DNI del cliente que quiere depositar");
//
//     }
//
//     // Obtener índice del cliente encontrado
//     const indiceCliente = obtenerIndiceDeClientePorDNI(DNI);
//
//     let monto = parseInt(prompt("Ingrese el monto a depositar"));
//     clientes[indiceCliente].depositar(monto);
//
//     console.log("Se depositaron $" + monto + " del cliente " + clientes[indiceCliente].nombre);
// }
//
// function transferir () {
//     let DNIDesde = prompt("Ingrese el DNI del cliente desde donde quiere transferir");
//
//     while(!clienteExiste(DNIDesde)) {
//
//         DNIDesde = prompt("DNI incorrecto, ingrese el DNI del cliente desde donde quiere transferir");
//     }
//
//     let DNIHasta = prompt("Ingrese el DNI del cliente al que quiere transferir");
//
//     while(!clienteExiste(DNIHasta)) {
//
//         DNIHasta = prompt("DNI incorrecto, ingrese el DNI del cliente al que quiere transferir");
//     }
//
//     // Obtengo los índices del cliente DESDe y HASTA
//     const indiceClienteDesde = obtenerIndiceDeClientePorDNI(DNIDesde);
//     const indiceClienteHasta = obtenerIndiceDeClientePorDNI(DNIHasta);
//
//     // Pedimos el monto a transferir
//     let monto = parseInt(prompt("Ingrese el monto a transferir"));
//
//     // Retiramos del cliente DESDE y asignamos ese monto al cliente HASTA
//     clientes[indiceClienteDesde].retirar(monto);
//     clientes[indiceClienteHasta].depositar(monto);
//
//     console.log("Se transfirió $" + monto + " desde " + clientes[indiceClienteDesde].nombre + " a " + clientes[indiceClienteHasta].nombre);
// }
//
// function retirar () {
//
//     let DNI = prompt("Ingrese el DNI del cliente que quiere retirar");
//
//     while(!clienteExiste(DNI)) {
//
//         DNI = prompt("DNI incorrecto, ingrese el DNI del cliente que quiere retirar");
//
//     }
//
//     // Obtener índice del cliente encontrado
//     const indiceCliente = obtenerIndiceDeClientePorDNI(DNI);
//
//     let monto = parseInt(prompt("Ingrese el monto a retirar"));
//     clientes[indiceCliente].retirar(monto);
//
//     console.log("Se retiraron $" + monto + " del cliente " + clientes[indiceCliente].nombre);
// }
//
// // Lista de clientes
// const clientes = [
//     new Cliente("Pedro", "111222333", 500),
//     new Cliente("Miguel", "222333444", 800),
//     new Cliente("Agustina", "555666777", 1000),
// ];
//
// let operacion = prompt("Ingrese alguna operación: 1- Retirar, 2- Transferir, 3- Depositar, 4- Salir");
//
// while(operacion !== "Salir") {
//
//     switch(operacion) {
//
//         case "1":
//
//             retirar();
//             break;
//
//         case "2":
//             transferir();
//             break;
//
//         case "3":
//             depositar();
//             break;
//
//         default:
//             console.log("Opción incorrecta");
//             break;
//     }
//
//     // Vuelvo a pedir que ingrese una operación
//     operacion = prompt("Ingrese una nueva operación: 1- Retirar, 2- Transferir, 3- Depositar, 4- Salir");
// }
//
//
// console.log(clientes);


