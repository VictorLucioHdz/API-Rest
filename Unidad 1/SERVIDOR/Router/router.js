const express = require('express');
const router = express.Router();

// Arreglo de mis tareas 
let tareas = [
  { id: 1, titulo: 'Hacer la tarea de Puerto', completado: true },
  { id: 2, titulo: 'Estudiar para el examen', completado: false }
];

// midd que valida que el título de la tarea no esté vacío
const validarTarea = (req, res, next) => {
  const { titulo } = req.body;

  if (!titulo || typeof titulo !== 'string' || titulo.trim() === '') {
    return res.status(400).json({ 
      error: 'El título es obligatorio.' 
    });
  }

  next();
};


router.get('/', (req, res) => {
  res.status(200).json(tareas);
});

router.get('/:id', (req, res) => {
  const idTarea = parseInt(req.params.id);
  const tarea = tareas.find(t => t.id === idTarea);

  if (!tarea) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  res.status(200).json(tarea);
});


router.post('/', validarTarea, (req, res) => {
  const nuevaTarea = {
    id: tareas.length ? tareas[tareas.length - 1].id + 1 : 1,
    titulo: req.body.titulo.trim(),
    completado: false
  };

  tareas.push(nuevaTarea);
  res.status(201).json(nuevaTarea);
});




module.exports = router;