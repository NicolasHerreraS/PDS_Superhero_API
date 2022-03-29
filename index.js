const express = require('express');
const app = express();

const mongoose = require('mongoose');
const routerApi = require('./src/routes');
require('dotenv').config();
const port = process.env.PORT;

app.listen(port, () => console.log('Active Port', port));

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => console.log('Successful conection with Mongo'))
  .catch((error) => console.log(error));
app.use(express.json());
routerApi(app);
