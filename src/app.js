const express = require('express');
const cors = require('cors'); // se nesecita instalarla npm i cors,  son politica de seguridad en la comunicacion http entre dominios en el navegador, con esto se permite que otros dominios se conecten a mi base de datos
const morgan = require('morgan');

//routes
const userRoutes = require('./routes/user.route');
const authRoutes = require('./routes/auth.route');
const repairsRoutes = require('./routes/repairs.route');

const app = express();

app.use(express.json()); //para permitir que envien archivos json a mi base de datos
app.use(cors()); //activamos cors
app.use(morgan('dev')); //activamos morgan con la configuracion que queremos

//routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/repairs', repairsRoutes);
app.use('/api/v1/auth', authRoutes);

module.exports = app;
