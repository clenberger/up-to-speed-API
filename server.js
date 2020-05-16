require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./config/express');
const router = require('./controllers/index.js');
const bodyParser = require('body-parser');
require('./data/api-db');
mongoose.Promise = Promise;

// mongoose.connect(mongoUri)

app.use(router);

if (!module.parent) {
    const port = process.env.PORT
    app.listen(process.env.PORT, () => {
        console.log(`app listening on port ${port}`);
    });
}

module.exports = app;