const express = require('express');
const routes = require('./controllers/');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
<<<<<<< HEAD
const helpers = require('./utils/helpers');
=======
const helpers = require('./utils/helpers')
>>>>>>> develop
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;
const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store)

const sess = {
  secret: 'yoga is the secret sauce',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
}
const hbs = exphbs.create({ helpers }); 
// Setting handlebars as default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
<<<<<<< HEAD
app.use(express.static(path.join(__dirname, "public")));
=======
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess))

>>>>>>> develop
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
