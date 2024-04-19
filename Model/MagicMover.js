const MagicMover = require("../entities/magicMover");


const addMagicMover = async (data, result) => {
    MagicMover.create(data)
    .then((results) => {
            result(null, results);
    })
    .catch((err) => {
        console.log(err)
            result(err, null);
    })
}
module.exports = { addMagicMover } ;