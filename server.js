var express = require('express');

var app = express();

const PORT = process.env.PORT || 3000;

app.use(function (res, req, next){
  if(req.headers['x-fowarded-proto'] === 'http'){
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
})

app.use(express.static('public'));

app.listen(PORT, function() {
   console.log('Express is up');
});
