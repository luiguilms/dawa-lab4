// procesadorTexto.js
module.exports = {
    procesar: (palabra) => {
        return {
            dividirPalabra: palabra.split(' ').join(', '), // Dividir la palabra por espacios
            eliminarEspacios: palabra.replace(/\s+/g, ''), // Eliminar espacios en blanco
            capitalizada: palabra.charAt(0).toUpperCase() + palabra.slice(1), // Capitalizar la palabra
            minusculas: palabra.toLowerCase(), // Convertir a minúsculas
            mayusculas: palabra.toUpperCase(), // Convertir a mayúsculas
            cantidadCaracteres: palabra.length, // Contar la cantidad de caracteres
        };
    },
};
