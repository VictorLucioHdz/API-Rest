const express = require('express');
const routerTareas = require('./router');
const cors = require('cors');

const app = express();
const PUERTO = 3000;
app.use('/api/tareas', routerTareas);
app.use(cors());
app.use(express.json());


app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] peticion: ${req.method} ${req.url}`);
  next();
});

app.use((req, res, next) => {
  res.status(404).json({ error: 'No se encontró la ruta solicitada' });
});


app.listen(PUERTO, () => {
  console.log(`Servidor escuchando en http://localhost:${PUERTO}`);
});