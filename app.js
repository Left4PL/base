// Installing packages
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// Enabling packages
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(morgan('dev'));

// Routes
const postRoutes = require('./routes/posts');
const error404 = require('./controllers/404');
app.use(postRoutes);

app.use(error404.PageNotFound);

app.listen(3000);