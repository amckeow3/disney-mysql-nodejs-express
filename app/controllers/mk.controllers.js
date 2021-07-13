const db = require("../config/db.config");

exports.getAllMKAttractions = (req, res) => {
    db.getConnection(function(err) {
        if (err) throw err;
        else {
            console.log("Successfully connected to mysql database!");
            //let location_id = req.params.location_id;
            db.query("SELECT * FROM attractions", function (err, data, fields) {
                if (err) {
                    return res.status(500).send(err);
                } else {
                    res.status(200).send({ data });
                }
            });
        }
    }); 
}

exports.MKAttractionsByLocation = (req, res) => {
    db.getConnection(function(err) {
        if (err) throw err;
        else {
            console.log("Successfully connected to mysql database!");
            let location_id = req.params.location_id;
            db.query("SELECT * FROM attractions a, inpark_location l WHERE '"+location_id+"' AND a.location_id = l.location_id", function (err, data, fields) {
                if (err) {
                    return res.status(500).send(err);
                } else {
                    res.status(200).send({ data });
                }
            });
        }
    }); 
}