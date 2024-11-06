const express = require('express');
const app = express();
const path = require('path');

// Set Pug as the view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Route to display plants page
app.get('/plants', (req, res) => {
  // Example plant data to pass to the view
  const results = [
    { plant_name: "Cactus", plant_type: "Succulent", plant_age: 5 },
    { plant_name: "Rose", plant_type: "Flower", plant_age: 2 },
    { plant_name: "Oak Tree", plant_type: "Tree", plant_age: 50 }
  ];
  
  // Pass the 'results' array to the plants.pug template
  res.render('plants', { results: results });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
