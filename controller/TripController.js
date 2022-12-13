const Trip = require('../model/trip.js');

module.exports.add = async (req, res) => {
    try {
        const data = {
            trip: req.body.trip,
            date: req.body.date
        }
        
        const trip = await new Trip(data);
        await trip.save();
        res.json({
            message: "Flight successfully added",
            id: trip._id
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            messae: "Error",
         });
    }
}

module.exports.remove = async (req, res) => {
    try {
        const id = req.params.id;
        Trip.findByIdAndRemove(id)
                .then(() => {
                    res.json({
                        message: 'Success delete'
                    })
                })
    } catch (error) {
        res.status(500).json({
            messae: "Error",
         });
    }
}

module.exports.updateTrip = async (req, res) => {
    try {
        const id = req.params.id;
        Trip.updateOne(
            {_id: id},
            req.body,
            (err, result) => {
                res.send(
                    (err === null) ? {msg: 'Flight successfully update'} : {msg: err}
                );
            })
        console.log('sdfsd')
    } catch (error) {
        console.log(error)
        res.status(500).json({
            messae: "Error",
         });
    }
}

module.exports.getAll = async (req, res) => {
    try {
        Trip.find({}, function (err, trips) {
            res.send(trips);
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            messae: "Error",
         });   
    }
}