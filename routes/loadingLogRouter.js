const express = require('express');
var router = express.Router();
const {creatloadingLog} = require('../Controller/addloadingLog')

router.post('/creatload' ,creatloadingLog )




module.exports = router;