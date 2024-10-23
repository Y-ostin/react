const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 8080;
let ledState = "off";   // Estado del LED 1
let led2State = "off";  // Estado del LED 2

app.use(bodyParser.urlencoded({ extended: true }));

// Obtener el estado del LED 1
app.get('/led/status', (req, res) => {
    res.send(ledState);
});

// Encender el LED 1
app.get('/led/on', (req, res) => {
    ledState = "on";
    console.log('Estado del LED 1: ' + ledState);
    res.send('Estado del LED 1: ' + ledState);
});

// Apagar el LED 1
app.get('/led/off', (req, res) => {
    ledState = "off";
    console.log('Estado del LED 1: ' + ledState);
    res.send('Estado del LED 1: ' + ledState);
});

// Obtener el estado del LED 2
app.get('/led2/status', (req, res) => {
    res.send(led2State);
});

// Encender el LED 2
app.get('/led2/on', (req, res) => {
    led2State = "on";
    console.log('Estado del LED 2: ' + led2State);
    res.send('Estado del LED 2: ' + led2State);
});

// Apagar el LED 2
app.get('/led2/off', (req, res) => {
    led2State = "off";
    console.log('Estado del LED 2: ' + led2State);
    res.send('Estado del LED 2: ' + led2State);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log('Servidor escuchando en el puerto ' + port);
});
