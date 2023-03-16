const express = require('express');

const app = express();

const database = require("./database/database");

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(express.json());

// Static Files
//app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/api/books' , require('./routes/book.routes'));

app.listen(app.get('port'), () => {
    console.log("Server listening on PORT " + app.get('port'));
})