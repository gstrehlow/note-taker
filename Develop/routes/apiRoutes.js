const path = require('path');
const fs = require('fs');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
});

router.post('/notes', (req, res) => {
    if (typeof req.body === 'object'){
        let db = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8');
        db = JSON.parse(db);
        let postedAlready = false;
        if (req.body.title){
            for (let i = 0; i < db.length; i++){
                if (db[i].title === req.body.title){
                    postedAlready = true;
                    break;
                }
            }
        }
        else postedAlready = true;
        if (!postedAlready){
            req.body.id = generateID();
            db.unshift(req.body);
            console.log(db);
            fs.writeFileSync(path.join(__dirname, '../db/db.json'),JSON.stringify(db));
        }
        res.sendFile(path.join(__dirname, '../db/db.json'));
    }
    else{
        res.status(400);
        res.end();
    }
});

module.exports = router; 