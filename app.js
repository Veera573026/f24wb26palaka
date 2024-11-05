// app.js

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var createError = require('http-errors');

// Import the routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var pickRouter = require('./routes/pick'); // Import pick.js

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Use the pickRouter for the '/pick' route
app.use('/pick', pickRouter); // Fixed: Removed the extra 's'
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Plants route
app.get('/plants', (req, res) => {
  // Define the results array (Plant data)
  const results = [
    { plant_name: "Cactus", plant_type: "Succulent", plant_age: 5 },
    { plant_name: "Rose", plant_type: "Flower", plant_age: 2 },
    { plant_name: "Oak Tree", plant_type: "Tree", plant_age: 50 }
  ];

  // Render the 'plants.pug' page and pass 'results' to the template
  res.render('plants', { results: results });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
