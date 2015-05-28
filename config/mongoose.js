var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/orchestra');

module.exports = mongoose;
