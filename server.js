var express = require('express'),
    store = require('./server/store').store;

var app = express();

app.configure(function(){
    app.use(express.bodyParser());
});

app.use(express.static(__dirname + '/app'));
require('./server/routes')(app, store);

app.listen(process.env.PORT || 3000);
