const {Router} = require('express');

const routes = Router();

routes.post('/users', (req, res)=>{ 
    console.log(req.body);
    // return res.send("Hello Word"); //send envia um texto
    return res.json({ message: "Hello Jonathan Helenium"}); //send envia um json
});

module.exports = routes;