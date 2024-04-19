
const {addloadingLog} = require('../Model/loadingLog');

const creatloadingLog = (req, res) => {
    const data = req.body;
    addloadingLog(data, (err, result) => {
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

module.exports = { creatloadingLog };