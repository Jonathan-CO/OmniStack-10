const express = require('express');
const mongoose = require('mongoose');
const config = require('./src/config');

const app = express();
mongoose.connect(config.connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
 
app.use(express.json());
app.post('/users', (req, res)=>{ 
    console.log(req.body);
    // return res.send("Hello Word"); //send envia um texto
    return res.json({ message: "Hello Jonathan Helenium"}); //send envia um json
});

app.listen(3333); //define a porta do servidor

