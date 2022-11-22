//hyper text transfer protocol
const http = require('http');
//import http from 'http'; does not work with node yet

//hostname is what the domain url will be
const hostname = 'localhost';
const port = 3000;

//or we couldve used http.createServer(function(req, res) { ... });} 
//the arrow is es6 syntax
const server = http.createServer((req, res) => {
    const { url } = req;

    console.log(url);

    if (url === '/translations') {
        const translations = { 1: 'one', 2: 'two', 3: 'three' };

        res.setHeader('Content-Type', 'application/json');

        res.write(JSON.stringify(translations));

        res.end();
    }

    res.end('Hello World!');
});

//
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`); // template literal
    //console.log('Server running at http://' + hostname + ':' + port + '/'); // old way
});

