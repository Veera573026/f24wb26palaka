const express = require('express');
const router = express.Router();  // Use express.Router() to create route handler

// Set the view engine to pug
router.set('view engine', 'pug');
router.set('views', './views');  // Ensure this matches your project structure

// Route for random item
router.get('/randomitem', (req, res) => {
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

module.exports = router;  // Export the router so it can be used in app.js
