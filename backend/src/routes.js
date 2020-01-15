const {Router} = require('express');
const axios = require('axios');

const routes = Router();

routes.post('/devs', async (req, res)=>{ 
    // return res.send("Hello Word"); //send envia um texto
    const {github_username} = req.body;
    const response = await axios.get(`https://api.github.com/users/${github_username}`);
    console.log(response.data);
    return res.json({ message: "Hello Jonathan Helenium"}); //send envia um json
});

module.exports = routes;