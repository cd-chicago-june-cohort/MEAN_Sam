var mongoose = require('mongoose');
var Player = mongoose.model('Player');

module.exports = {

    show: function(req,res) {
        Player.find({}, function(err, players) {
            if (err) {
                console.log("There was an error loading all notes.");
            } else {
                console.log(players);
                res.json(players);
            }
        });
    },

    create: function(req,res){
        player = new Player();
        player.name = req.body.name
        player.position = req.body.position;
        player.game1 = 'Undecided'
        player.game2 = 'Undecided'
        player.game3 = 'Undecided'
        player.save(function(err){
            if(err){
                res.json(err);
            } else {
                res.json(player);
            }
        });
    },

    update: function(req,res){
        console.log(req.body.gamenum);
        if (req.body.gamenum == 1) {
            Player.update({_id: req.body.id}, {$set: {game1: req.body.status}}, function(err, player){
                if(err){
                    res.json(err);
                } else {
                    console.log(player);
                    res.json(player);
                }
            });
        } else if (req.body.gamenum == 2){
            Player.update({_id: req.body.id}, {$set: {game2: req.body.status}}, function(err, player){
                if(err){
                    res.json(err);
                } else {
                    res.json(player);
                }
            });
        } else {
            Player.update({_id: req.body.id}, {$set: {game3: req.body.status}}, function(err, player){
                if(err){
                    res.json(err);
                } else {
                    res.json(player);
                }
            });
        }
    }
}