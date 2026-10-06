require('dotenv').config();
const express = require('express');
const routerTareas = require('./Router/router');
const cors = require('cors');
const pug = require('pug');
const path = require('path');
const basicAuth = require('express-basic-auth');


const apikey = process.env.API_KEY;
const app = express();
app.use(express.json());
app.use('/api/tareas', routerTareas);
app.use(cors());



const PUERTO = 3000;
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//app.use(basicAuth({
//    users: { 'admin': '1234' }
//}));
console.log("Tu API Key cargada es:", process.env.API_KEY);
app.get('/', (req, res) => {x
    res.render('vista', {
        titulo: 'Mi mini proyecto',
        mensaje: 'Bienvenido a mi aplicación'
    });
});

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