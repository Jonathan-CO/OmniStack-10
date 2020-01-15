const axios = require('axios');
const Dev = require('../models/Dev');

const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(req, res){
        const devs = await Dev.find();
        return res.json(devs);
    },
    async create(req, res) {
        // return res.send("Hello Word"); //send envia um texto
        const { github_username, techs, latitude, longitude } = req.body;

        let dev = await Dev.findOne({ github_username });

        if (!dev) {

            const response = await axios.get(`https://api.github.com/users/${github_username}`);

            const { name = login, avatar_url, bio } = response.data;
            //  console.log(name, avatar_url, bio)
            //separa o array em tecnologia, removendo o espaço antes e depois
            const techArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techArray,
                location,
            });

        }

        return res.json(dev); //send envia um json
        // return res.json({ message: "Hello Jonathan Helenium"}); //send envia um json
    }
};