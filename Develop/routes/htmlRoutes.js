const path = require('path');
const router = require('express').Router();

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/index.html'));
})

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/notes.html'));
});

module.exports = router;