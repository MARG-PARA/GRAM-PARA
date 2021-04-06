const express = require('express');
const app = express();
const port = 5555;
const db = require('./database/config.js');
const routes = require('./database/routers/index.js');
var cookieParser = require('cookie-parser')

app.use(cookieParser())
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist/gram-para'));

app.use('/product', routes.product);
app.use('/user', routes.user);
app.use('/session', routes.session);

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });
