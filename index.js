const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8000;
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);

// mes routes...
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

// voici mes VUES / views
app.set('views', './views');
app.set('layout', 'layout');
app.set('view engine', 'ejs');

// mes fichiers statiques
app.use('/css', express.static('./css'));
app.use('/images', express.static('./images'));

mongoose.connect('mongodb://localhost/labo00');
// mongoose.connect('mongodb+srv://test:password@cluster0.yml6m.mongodb.net/SERVICES_TP1?retryWrites=true&w=majority');

let db = mongoose.connection;
db.on('error', (err) => { console.error('erreur de BD:', err)});
db.once('open', () => {console.log('connexion a la BD OK!!')});

app.listen(PORT, console.log(`Service Web demarre sur le port ${PORT}`));