const express = require('express');
const routes = require('./controllers/');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// Setting handlebars as default template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
// turn on routes
app.use(routes);
app.get("/", ((req, res) => {
// res.render("home")
res.send("hello")
}))
// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening On PORT ' + PORT));
});


