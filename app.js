var express = require('express'),
    http    = require('http'),
    path    = require('path'),
    db      = require('./server/models'),
    passport = require('passport'),
    logfmt = require('logfmt'),
    security = require('./server/routes/security');

var app = express();

app.configure(function(){
    app.set('port', process.env.PORT || 8000);
    app.use(logfmt.requestLogger());
    app.set('views', path.join(__dirname, '/client/views'));
    app.set('view engine', 'ejs');
    app.use(express.favicon(__dirname + '/client/images/favicon.ico'));
    app.use(express.logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());
    app.use(express.multipart());
    app.use(express.cookieParser('qip secret'));
    app.use(express.session());
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'client')));
})

if ('development' === app.get('env')) {
  app.use(express.errorHandler())
}

require('./routes')(app);

/*var superagent = require('superagent');
var testUser = superagent.agent();
testUser
  .post('http://localhost:8000/api/register')
  .send({ id: 1, username: 'sattarab', password: '123' })
  .end(function(err, res) {
    console.log(err);
  });*/

db.sequelize
.sync({ force: false})
.complete(function(err) {
    if (err) {
      throw err
    } 
    else {
      http.createServer(app).listen(app.get('port'), function() {
        console.log('Express server listening on port ' + app.get('port'));
      })
    }
})
  