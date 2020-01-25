require('../models/model')

const mongoose = require('mongoose'),
    finance = mongoose.model("finance");

    module.exports = {

        index: function (request, response) {
            finance.find()
                .then(finances => response.json({ results: finances }))
                .catch(err => response.json({ error: err.error }))
        },
        show: function (request, response) {
            finance.findOne({ _id: request.params.id })
                .then(finance => response.json({ results: finance }))
                .catch(err => response.json({ error: err.error }))
        },
        create: function (request, response) {
            finance.create(request.body)
                .then(finance => response.json({ results: finance }))
                .catch(err => response.json({ error: err.error }))
        },
        destroy: function (request, response) {
            finance.remove({ _id: request.params.id })
                .then(finance => response.json({ results: finance }))
                .catch(err => response.json({ error: err.error }))
        },
        update: function (request, response) {
            console.log(request.body)
            finance.updateOne({_id:request.params.id}, request.body)
                .then(result =>  response.json({ results: result }))
                .catch(err => response.json({ error: err.error }))
        }
    };