var express = require('express'),
    app = express();
    
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Home');
});

app.listen(3000, function () {
    console.log('server is running in port 3000');
});