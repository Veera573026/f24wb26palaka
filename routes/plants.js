const express = require('express');
const app = express();
const path = require('path');

// Set Pug as the view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Route to display plants page
app.get('/plants', (req, res) => {
  res.render('plants'); // Render the plants.pug template
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
