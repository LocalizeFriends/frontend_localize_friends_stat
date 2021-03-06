var express = require('express');
var app = express();
app.set('views', __dirname + '/app');
app.set('view engine', 'ejs');

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.render('app/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


