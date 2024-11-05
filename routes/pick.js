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
      'img1.jpeg',
      'img2.png',
      'img3.webp',
      'img4.jpg',
      'img5.jpeg'
    ]
  });
});

// Other routes...
