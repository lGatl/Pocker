var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser')

var app = express();
var nom
//app.use(morgan('combined'))

app.use(express.static(__dirname + '/public'));



app.use(bodyParser.urlencoded({extended:true}));
app.post('/fmlr',function(req,res){
nom = req.body.nom;
res.send(nom);

});
app.listen(8888);


