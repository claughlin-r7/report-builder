var http = require('http');
var express = require('express');
var config = require('./config.js');
var mongoose = require('mongoose');
var passport = require('passport');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var app = express();
var server = http.createServer(app);

app.use(morgan()); // logger
app.use(bodyParser());
app.use(passport.initialize());
app.use(express.static(config.server.distFolder));
app.use(errorHandler({ dumpExceptions: true, showStack: true }));


// Database connection
var MONGOLAB_URI = 'mongodb://' + config.mongo.dbUser + ':' + config.mongo.dbPassword + '@ds053184.mongolab.com:53184/' + config.mongo.dbName;
mongoose.connect(MONGOLAB_URI);
mongoose.connection.on('open', function() {console.info('Connected to Blog MongoDB successfully!')});
mongoose.connection.on('error', function(err) {console.error('ERROR connecting to: ' + '"' + MONGOLAB_URI + '" ' + err)});

// RESTful API Handlers
var handlers = {
    article: require('./routes/articles')
};

// Index
app.get('/', function (request, response){
        response.sendFile(path.resolve(publicPath, 'index.html'));
});

// Article RESTful
app.get('/articles', handlers.article.findAll);

// Start up the server on the port specified in the config
var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
    // configure stuff here
    server.listen(config.server.listenPort, 'localhost', 511, function() {
        // Once the server is listening we automatically open up a browser
        var open = require('open');
        open('http://localhost:' + config.server.listenPort + '/');
    });
    console.info('Blog Server - listening on port: ' + config.server.listenPort);
}

var env = process.env.NODE_ENV || 'production';
if ('production' == env) {
    // configure stuff here
    var port = process.env.PORT || 5000;
    app.listen(port, function() {
        console.info('Blog Server - listening on port: ' + config.server.listenPort);
    });
}
