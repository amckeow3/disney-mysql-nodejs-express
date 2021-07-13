const controller = require('../controllers/mk.controllers');

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get('/mk-attractions', controller.getAllMKAttractions);
    app.get('/mk-attractions-by-location/:location_id', controller.MKAttractionsByLocation);
};