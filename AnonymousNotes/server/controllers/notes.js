var mongoose = require('mongoose');
var Note = mongoose.model('Note');

module.exports = {

    // create: function(req,res){

    // },

    show: function(req,res) {
        Note.find({}).sort('-created_at').exec(function(err, notes) {
            if (err) {
                console.log("There was an error loading all notes.");
            } else {
                console.log(notes);
                res.json(notes);
            }
        });
    },

    create: function(req,res){
        note = new Note();
        myDate = new Date();
        note.content = req.body.content;
        note.created_at = myDate;
        note.save(function(err){
            if(err){
                res.json(err);
            } else {
                res.json(note);
            }
        });
    }
}