const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const routes = require('./routes')

const app = express();
mongoose.connect(config.connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
 
app.use(express.json());
app.use(routes);

app.listen(3333); //define a porta do servidor

