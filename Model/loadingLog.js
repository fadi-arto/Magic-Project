const loadingLogSchema = require("../entities/loadingLog");


const addloadingLog = async (data, result) => {
    loadingLogSchema.create(data)
    .then((results) => {
            result(null, results);
    })
    .catch((err) => {
        console.log(err)
            result(err, null);
    })
}
module.exports = { addloadingLog } ;