var express = require('express'); // Importa la libreria express
var app = express(); // ejecuta la librería
var path = require('path'); // esta librería la trae node incluida, acá se require
var body_parser = require('body-parser'); 
var cors = require('cors');
var api = require('./controllers/main');


app.use(cors());

app.set('views', path.join(__dirname ,'/views'));

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true}));

app.use('/', express.static(path.resolve(__dirname + '/views/build/')));

// conexión a la db
require('./config/connectionDatabase');

app.use('/api', api);

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname + '/views/build/index.html'));
});
app.listen(process.env.PORT || 5000, function () {
    console.log('escuchando en '+ (process.env.PORT || 5000));
});