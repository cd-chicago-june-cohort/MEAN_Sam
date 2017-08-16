// var mongoose = require('mongoose');
// var Note = mongoose.model('Note');
var notes = require('../controllers/notes.js');
var path = require('path');

module.exports = function(app) {

    app.get("/api/show", function (req,res, next){
        notes.show(req,res);
    });

    app.post('/create', function(req, res){
        console.log("route log: ")
        console.log(req.body)
        notes.create(req, res);
    });

    app.all('*', function(req,res){
        res.sendFile(path.resolve('./Notes/dist/index.html'));
    });

}