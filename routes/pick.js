// pick.js

const express = require('express');
const app = express();

// Set the view engine to pug
app.set('view engine', 'pug');
app.set('views', './views'); // Adjust this path based on your project

// Route for random item
app.get('/randomitem', (req, res) => {
  // Render randomitem.pug
  res.render('randomitem', {
    image_names: [
      'item1.jpg',
      'item2.jpg',
      'item3.jpg',
      'item4.jpg',
      'item5.jpg'
    ]
  });
});

// Other routes...
