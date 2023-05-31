const express = require('express');
const app = express();

const plamoRoute = express.Router();
let plamo = require('../model/plamo');

//Add Plamo
plamoRoute.route('/add-plamo').post((req, res, next) => {
    plamo.create(req.body).then((data) => {
        res.json(data)
    }).catch((error) => {
        return next(error)
    })
})

//Get All Plamo
plamoRoute.route('/').get((req, res) => {
    plamo.find().then((data) => {
        res.json(data)
    }).catch((error) => {
        return next(error)
    })
})

//Get Plamo by ID
plamoRoute.route('/get-plamo/:id').get((req, res, next) => {
    plamo.findById(req.params.id).then((data) => {
        res.json(data)
    }).catch((error) => {
        return next(error)
    })
})

//Update Plamo
plamoRoute.route('/update-plamo/:id').put((req, res, next) => {
    plamo.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }).then((data) => {
        res.json(data)
        console.log('Plamo successfully updated!')
    }).catch((error) => {
        console.log(error)
        return next(error)
    })
})

//Delete Plamo by ID
plamoRoute.route('/delete-plamo/:id').delete((req, res, next) => {
    plamo.findByIdAndRemove(req.params.id).then((data) => {
        res.status(200).json({
            msg: data
        })
    }).catch((error) => {
        return next(error)
    })
})

module.exports = plamoRoute;
