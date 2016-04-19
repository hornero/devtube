var express = require('express'),
    app     = express(),
    port    = process.env.PORT || 3000;

// Sirve los contenidos estaticos    
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Home');
});

// Incia el web server.
app.listen(port, function () {
    console.log('server is running in port ' + port);
});