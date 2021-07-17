const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlSchema = new Schema({
    targetUrl: {
        type: String,
        require: true
    }
});

var Url = mongoose.model('url',urlSchema);
module.exports = Url;