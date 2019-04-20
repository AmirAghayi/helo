const express = require('express');
require('dotenv').config();
const { decorate } = require('./middleware/decorate.middleware');
const { addRoutes } = require('./routers/routers');

const app = express();

require('./auth/passport.auth');

decorate(app);
addRoutes(app);

const { PORT } = process.env;

app.listen(PORT, () => {
    console.log(`App is listenning on port ${PORT}`)
});
