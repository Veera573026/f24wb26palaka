const express = require('express');
const app = express();
const path = require('path');

// Set Pug as the view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Route for grid page
app.get('/grid', (req, res) => {
  // Extract query parameters
  let query = req.query;

  // Log the query values (for debugging)
  console.log(`rows ${query.rows}`);
  console.log(`cols ${query.cols}`);

  // Render the grid.pug template and pass the query data
  res.render('grid', { title: "Grid Display", query: query });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
