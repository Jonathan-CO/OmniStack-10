const mongoose = require('mongoose');

const DevSechema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: Strinf,
    avatar_url: String,
    techs:[String],
});

module.exports = mongoose.model('Dev', DevSchema);