const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const yogaRoutes = require('./controllers');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', yogaRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});