const path = require('path');
const express = require('express');

const app= express();

app.use(express.static(path.join(__dirname, 'public'))); //sirve para agregar el style.css

const adminRoutes = require('./routes/main');
const encRoutes = require('./routes/enc');
const loginRoutes = require('./routes/lgn');
const pagPueRoutes = require('./routes/catepuertas');
const pagCocRoutes = require('./routes/catecocina');
const pagCloRoutes = require('./routes/catecloset');
const pueUnoRoutes = require('./routes/puno');
const puesDosRoutes =require('./routes/pdos');
const coUnoRoutes =require('./routes/couno');
const coDosRoutes =require('./routes/codos');
const cloUnoRoutes = require('./routes/clouno');
const cloDosRoutes = require('./routes/clodos')


app.use('/',adminRoutes);
app.use('/',encRoutes);
app.use('/',loginRoutes);
app.use('/',pagPueRoutes);
app.use('/',pagCocRoutes);
app.use('/',pagCloRoutes);
app.use('/',pueUnoRoutes);
app.use('/',puesDosRoutes);
app.use('/',coUnoRoutes);
app.use('/',coDosRoutes);
app.use('/',cloUnoRoutes);
app.use('/',cloDosRoutes);

app.listen(5500);