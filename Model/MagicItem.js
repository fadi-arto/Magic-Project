const MagicItem = require("../entities/magicItem");


const addMagicItem = async (data, result) => {
    MagicItem.create(data)
    .then((results) => {
            result(null, results);
    })
    .catch((err) => {
        console.log(err)
            result(err, null);
    })
}
module.exports = { addMagicItem } ;