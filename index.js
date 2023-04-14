const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());

// Definire ruta pentru fisierele statice
app.use(express.static('assets'));

// Definire rute
app.get('/', (req, res) => {
    res.send('<h1>Hello from my web server</h1>');
});

app.get('/spring.html', (req, res) => {
    fs.readFile('spring.html', (err, data) => {
        if (err) {
            res.status(404).send('<h1>404 Not Found</h1>');
        } else {
            res.type('html').send(data);
        }
    });
});

app.get('/winter.html', (req, res) => {
    fs.readFile('winter.html', (err, data) => {
        if (err) {
            res.status(404).send('<h1>404 Not Found</h1>');
        } else {
            res.type('html').send(data);
        }
    });
});

// Pornire server
app.listen(8080, () => {
    console.log('Hello from my web server');
});
