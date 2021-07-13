const controller = require('../controllers/mk.controllers');

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get('/attractions-by-park/:park_id', controller.AttractionsByPark);
    app.get('/attractions-by-location/:location_id', controller.AttractionsByLocation);
    app.get('/attraction/:attraction_id', controller.AttractionInfo);
};