var express = require('express'),
    app = express();

// Sirve los contenidos estaticos    
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Home');
});

// Incia el web server.
app.listen(3000, function () {
    console.log('server is running in port 3000');
});