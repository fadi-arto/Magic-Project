const express = require('express');
var router = express.Router();


const {newMagicItem} = require('../Controller/addMagicItem')

router.post('/addMagicItem' , newMagicItem ); //done



module.exports = router;