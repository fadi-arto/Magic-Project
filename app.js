var createError = require('http-errors');
var express = require('express');
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
var path = require('path');

var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var MagicMoverRouter = require('./routes/MoverRouter');
var MagicItemRouter = require('./routes/ItemRouter')
var loadingLogRouter = require('./routes/loadingLogRouter')



var app = express();

mongoose.set('strictQuery', false);







app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


const dbURI = 'mongodb+srv://task-project:task12345@cluster0.t0rjdo5.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("connection to mongoo");
  })
  .catch((err) => console.log(err));












// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
var corsOptions = {
  credentials: true,
  origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:8080']
}
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



//manage

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/manageMagicMover', MagicMoverRouter);
app.use('/manageMagicItem', MagicItemRouter);
app.use('/manageloadingLog', loadingLogRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
