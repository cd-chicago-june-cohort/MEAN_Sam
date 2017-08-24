var mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
    name: String,
    position: String,
    game1: String,
    game2: String,
    game3: String
});

var Player = mongoose.model('Player', PlayerSchema);