// Listas, array o arreglo
const lista = [1, "hola", true, undefined, null];
const lista2 = new Array(2, "hola", true, undefined, null);
const lista3 = new Array (3);
lista3[0] = "soy el primer elemento, index0";
const lista4 = [lista, lista2, lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

// Objetos 
const movil = {
    altura: 5,
    anchura: 10,
    marca: "Iphone",
    isWhite: false,
    contactos: ["Emi", "Mama", "Papa"],
    tarjeta: {
        marca: "Claro",
        almacenamiento: 64
    }
}
movil.año = 2020
movil.marca = "Samsung"

console.log(movil);

// Fechas 
// Libreria de apoyo Moment.js
const ahora = new Date()
console.log(ahora);

const fecha_milis = new Date(10); // Utilizando los milisegundos
console.log(fecha_milis);

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena)

const fecha_valores = new Date(2022, 0, 15);
console.log(fecha_valores);

const dia = ahora.getDate()
const mes = ahora.getMonth()+ 1;
const año =ahora.getFullYear();

console.log(dia, mes, año);