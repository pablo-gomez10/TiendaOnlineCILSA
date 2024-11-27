const express = require('express');
const db = require('../db/connection');

const router = express.Router();

// Obtener todos los cursos
router.get('/', (req, res) => {
    const query = 'SELECT * FROM cursos';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Agregar un nuevo curso
router.post('/', (req, res) => {
    const { nombre, descripcion, precio, categoria } = req.body;
    const query = 'INSERT INTO cursos (nombre, descripcion, precio, categoria) VALUES (?, ?, ?, ?)';
    db.query(query, [nombre, descripcion, precio, categoria], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Curso agregado', id: results.insertId });
    });
});

// Eliminar un curso
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM cursos WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Curso eliminado' });
    });
});

module.exports = router;
