const path = require('path');
const express = require('express');

const app= express();
//const mongoConnect = require('./util/database');
const mongoose=require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();

app.use(express.static(path.join(__dirname, 'public'))); //sirve para agregar el style.css
app.use(express.json()); //sirve para que se pueda leer archivos .json
app.use(express.urlencoded({ extended: true })); //sirve para convertir los datos a js y poder manipularlo mejor
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


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
const cloDosRoutes = require('./routes/clodos');
const { callbackify } = require('util');
const singInRoutes = require('./routes/singInR');


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
app.use('/',singInRoutes)



//mongoConnect(() => {
   // app.listen(5500);});


mongoose.connect("mongodb+srv://jeniferchavez878:j7abjVGOA7pvEarW@democluster0.8xp485m.mongodb.net/?retryWrites=true&w=majority&appName=DemoCluster0"
)
.then(result =>{
    console.log("Conectado!!");
    app.listen(5500);
})
.catch(err =>{
    console.log(err);
});