
const {findMissionComplet} = require('../Model/findComplet');



const findMostActiveMovers =async (req, res) => {

  findMissionComplet((err,result) => {
    if (err) {
        console.log(err)
        res.send(err)
    }
    else {

        console.log(result)
        res.send(result)
    }
})

}


  module.exports = { findMostActiveMovers };