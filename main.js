var path = require('path');
var express = require('express');
const app = express();
var http = require('http').Server(app);
var ejs = require('ejs');

const port = 3000;

app.set('port', port);

app.set('views', path.join(__dirname + '/public/views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));
// app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
// app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
// app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

// app.use('/', express.static(__dirname + '/public/img'));
// app.use('/', express.static(__dirname + '/public/img'));
// app.use(express.static(__dirname + '/public/img'));
// app.use(express.static(__dirname + '/public/modules'));
// app.use(express.static(__dirname + '/public/css'));

app.set('env', 'development');

// 라우팅
app.get('/', function(req, res) {
    res.render('index');
});
// app.get('/', function(req, res) {
//     res.render('login');//asdfasdf/a/sdfsdf
// });

http.listen(port, function(){
    console.log('main.js / listening on *:80');
});