const db = require("../config/db.config");

exports.AttractionsByPark = (req, res) => {
    db.getConnection(function(err) {
        if (err) throw err;
        else {
            console.log("Successfully connected to mysql database!");
            db.query("SELECT a.name, p.park_name FROM attractions a, inpark_location l, park p WHERE a.location_id = l.location_id AND l.park_id = p.park_id AND p.park_id = ?", req.params.park_id, function (err, data, fields) {
                if (err) {
                    return res.status(500).send(err);
                } else {
                    res.status(200).send({ data });
                }
            });
        }
    }); 
}

exports.AttractionsByLocation = (req, res) => {
    db.getConnection(function(err) {
        if (err) throw err;
        else {
            console.log("Successfully connected to mysql database!");
            db.query("SELECT * FROM attractions where location_id = ?", req.params.location_id, function (err, data, fields) {
                if (err) {
                    return res.status(500).send(err);
                } else {
                    res.status(200).send({ data });
                }
            });
        }
    }); 
}

exports.AttractionInfo = (req, res) => {
    db.getConnection(function(err) {
        if (err) throw err;
        else {
            console.log("Successfully connected to mysql database!");
            db.query("SELECT * FROM attractions WHERE attraction_id = ?", req.params.attraction_id, function (err, data, fields) {
                if (err) {
                    return res.status(500).send(err);
                } else {
                    res.status(200).send({ data });
                }
            });
        }
    })
}