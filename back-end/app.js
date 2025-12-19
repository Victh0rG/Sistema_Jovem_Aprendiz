const express = require('express');
const path = require('path');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


//my app express
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Config
app.use(logger('dev'));
app.use(express.json()); // Para ler o body JSON
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// routes
const indexRouter = require('./src/modules/routes/index.js');
const usersRouter = require('./src/modules/routes/users.route.js');
const pontoRouter = require('./src/modules/routes/ponto.route.js');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/ponto', pontoRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use((err, req, res, next)=> {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  //res.render('error');
  next();
});

module.exports = app;
