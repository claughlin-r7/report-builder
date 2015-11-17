var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var articleSchema = new Schema({
    creationDate: { type: Date, required: true, default: Date.now },
    title: { type: String, required: true },
    content: { type: String, required: true }
}, { collection: 'articles' });

module.exports = mongoose.model('Article', articleSchema);