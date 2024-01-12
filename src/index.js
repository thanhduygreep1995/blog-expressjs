// import { engine } from 'express-handlebars';
const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const route = require('./routes/index.route');
const db = require('./config/db');

// Connect to DB
db.connect();

// HTTP logger
app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// XMLHttpRequest, fetch, axios

// Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);

app.set('view engine', 'hbs');
app.set('views', './views');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () => console.log(`App listening on port ${port}`));

var array = [1, 2, 3];
