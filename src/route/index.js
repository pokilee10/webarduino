const dataRouter = require('./data');

const route = (app) => {
    app.use('/data', dataRouter);
};
module.exports = route;