const express = require('express');
const router = express.Router();
const Fact = require('../models/facts');


// GET
router.get("/", (req, res) => {
    Fact.find({}).then(facts => {
        res.json({ 'list of available facts: ': facts });
    })
    .catch(err => {
        console.log(err.message);
        res.json({ 'no facts found, message: ': err.message });
    })
});


// ADD Fact
router.post("/add/fact", (req, res) => {

    const fact = new Fact(req.body);
    fact.save(function(err, fact) {
        console.log(req.body.text) 
        console.log(err)
        res.json({'added fact: ': 'success!', 'fact: ': fact})
    });
});

// DELETE Fact
router.delete("/delete", (req, res) => {
    Fact.findOneAndRemove({fact: req.params.fact}, (err, Fact) => {
        res.json({'delete:': 'fact removed', 'fact: ': req.params.fact})
    });
})

// UPDATE fact
router.post("/update/fact", (req, res) => {
    Fact.findOne({_id: req.body.id}).exec().then(function(fact) {
        fact.text = req.body.text;
        console.log(`updated fact: ${req.body.text}`)
        res.json({'update: ': 'success', 'fact updated: ': fact})
        return fact.save();
    }).catch(function(err) {
        console.log(err)
    });
})

module.exports = router;
