const axios = require('axios');
const Dev = require('../models/Dev');

const parseStringAsArray = require('../utils/parseStringAsArray');


module.exports = {
    async index(req, res) {
        // Buscar todos os decs num raio de 10Km
        // filtrar pela techs
        const {latitude, longitude, techs} = req.query;
        const techsArray = parseStringAsArray(techs);
        
        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location:{
                $near:{
                    $geometry:{
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },

        });
        
        console.log(latitude, longitude, techsArray) ;
        return res.json({devs})
    }
}