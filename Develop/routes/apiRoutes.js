const path = require('path');
const fs = require('fs');
const router = require('express').Router();
const notes = require('../db/db.json');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    if (typeof req.body !== 'object'){
        res.end();
        return;
    }
    let db = fs.readFileSync(notes);
    db.push(req.body)
    fs.writeFileSync(notes, '../db/db.json')
    res.json('../db/db.json');
});

module.exports = router; 