const mongoose = require('mongoose');

const URI = "mongodb://0.0.0.0:27017/books";

mongoose.connect(URI)
    .then(db => console.log("Database is Connected!"))
    .catch(err => console.log(err))