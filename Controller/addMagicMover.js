
const {addMagicMover} = require('../Model/MagicMover');

const newMagicMover = (req, res) => {
    const data = req.body;
    addMagicMover(data, (err, result) => {
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

module.exports = { newMagicMover };