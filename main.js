const http = require('http');
const url = require('url');
const querystring = require('querystring');
const fs = require('fs');
const calculadora = require('./calculadora');
const procesadorTexto = require('./procesadorTexto');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const query = querystring.parse(parsedUrl.query);

    if (parsedUrl.pathname === '/calculadora') {
        const numero1 = parseFloat(query.numero1);
        const numero2 = parseFloat(query.numero2);

        if (!isNaN(numero1) && !isNaN(numero2)) {
            // Realiza todas las operaciones de la calculadora
            const suma = numero1 + numero2;
            const resta = numero1 - numero2;
            const multiplicacion = numero1 * numero2;
            const division = numero1 / numero2;
            
            // Leer el contenido de calculadora.html
            fs.readFile('calculadora.html', 'utf8', (err, htmlContent) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error interno del servidor');
                    return;
                }

                // Reemplazar los marcadores de posición en el HTML con los resultados de la calculadora
                htmlContent = htmlContent.replace('{suma}', suma);
                htmlContent = htmlContent.replace('{resta}', resta);
                htmlContent = htmlContent.replace('{multiplicacion}', multiplicacion);
                htmlContent = htmlContent.replace('{division}', division);

                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(htmlContent);
            });
        } else {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Debes proporcionar dos números válidos en la URL');
        }
    } else if (parsedUrl.pathname === '/procesador') {
        const palabra = query.palabra;

        if (palabra) {
            // Procesa la palabra con el procesador de texto
            const resultadosTexto = procesadorTexto.procesar(palabra);
            
            // Leer el contenido de procesador.html
            fs.readFile('procesador.html', 'utf8', (err, htmlContent) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error interno del servidor');
                    return;
                }

                // Reemplazar los marcadores de posición en el HTML con los resultados del procesador de texto
                htmlContent = htmlContent.replace('{palabra}', palabra);
                htmlContent = htmlContent.replace('{dividirPalabra}', resultadosTexto.dividirPalabra);
                htmlContent = htmlContent.replace('{eliminarEspacios}', resultadosTexto.eliminarEspacios);
                htmlContent = htmlContent.replace('{capitalizada}', resultadosTexto.capitalizada);
                htmlContent = htmlContent.replace('{minusculas}', resultadosTexto.minusculas);
                htmlContent = htmlContent.replace('{mayusculas}', resultadosTexto.mayusculas);
                htmlContent = htmlContent.replace('{cantidadCaracteres}', resultadosTexto.cantidadCaracteres);

                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(htmlContent);
            });
        } else {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Debes proporcionar una palabra en la URL para el procesador de texto');
        }
    } else {
        // Manejar otras rutas o recursos
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Página no encontrada');
    }
});

const port = 8080;

server.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
