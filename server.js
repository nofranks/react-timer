var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next){
    console.log('Port' + PORT);
    if(req.headers['x-forwarded-proto'] === 'https'){
        console.log('https');
        res.redirect('http://' + req.hostname + req.url);
    }else{
        console.log('http');

        next();
    }
});


app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
