// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Usuario y contraseña de prueba (en un entorno real, usarías una base de datos)
const usuarios = {
    "admin": "1234",
    "usuario": "password"
};

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (usuarios[username] && usuarios[username] === password) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
});
