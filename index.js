const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();
const route = require('./src/route');
const app = express();
const cors = require('cors');
const db = require('./src/config')
const path = require('path');

// morgan: bắn ra log khi gửi yêu cầu lên server
app.use(morgan('dev'));
app.use(
    bodyParser.urlencoded({
        extended: false,
    }),
);
app.use(bodyParser.json());
app.use(express.json());


app.use(cors()); // Use this after the variable declaration

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
db.connect();
route(app);

app.get('/', function (req, res)  {
    res.send("hello");
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Example app listening on port ${process.env.PORT || 3000}`);
});