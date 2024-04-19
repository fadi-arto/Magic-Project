const express = require('express');
var router = express.Router();
const {newMagicMover} = require('../Controller/addMagicMover');
const {updateMission} = require('../Controller/StartMission')
const {MissionEnd} = require('../Controller/endMission');

const {findMostActiveMovers} = require('../Controller/completMission');

router.post('/addMagicMover' , newMagicMover ); //done

router.put('/updateStart/:id' , updateMission ); //done

router.put('/endMission/:id' , MissionEnd ); //done

router.get('/getSimplelist' , findMostActiveMovers ); //done

module.exports = router;

