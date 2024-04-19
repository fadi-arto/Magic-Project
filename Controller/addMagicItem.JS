
const {addMagicItem} = require('../Model/MagicItem');

const newMagicItem = (req, res) => {
    const data = req.body;
    addMagicItem(data, (err, result) => {
        if (err) {
            console.log("errors")
            console.log(err)
        }
        else {
            console.log("send")
            res.send(result)
        }
    })

}

module.exports = { newMagicItem };