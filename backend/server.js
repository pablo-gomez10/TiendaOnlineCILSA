const express = require('express');
const app = express();
const cors = require('cors');

// Configuración de CORS para permitir solicitudes del frontend
app.use(cors());
app.use(express.json());

// Ejemplo de base de datos en memoria
const cursos = [
    { id: 1, nombre: 'Excel para Económicas', descripcion: 'Curso avanzado de Excel.' },
    { id: 2, nombre: 'Análisis de Datos en Power BI', descripcion: 'Aprende a usar Power BI.' },
];

// Ruta para obtener los cursos
app.get('/api/courses', (req, res) => {
    res.json(cursos);
});

// app.get('/', (req, res) => {
//     res.send('Bienvenido a la API de TiendaOnlineCILSA');
// });


// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});

const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'dbCodigoArgentino',
});

db.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err.message);
        return;
    }
    console.log('Conexión a la base de datos exitosa.');
});

module.exports = db;