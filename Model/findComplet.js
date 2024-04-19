const MagicMover = require('../entities/magicMover');

const findMissionComplet = async ( result) => {
    MagicMover.find({'questState' : 'done'})
        .then((results) => {
            result(null , results)
            console.log(results, null)
        })
        .catch((err) => {
            result(err,null)
        })
}
module.exports = { findMissionComplet } 





