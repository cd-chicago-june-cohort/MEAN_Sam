var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
    content: String,
    created_at: Date
});

var Note = mongoose.model('Note', NoteSchema);