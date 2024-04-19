
const {UpdateTOStartMission} =require('../Model/updateMagicMover');

const updateMission = async (req, res) => {
    const id = req.params.id;

    try {
        const result = await UpdateTOStartMission(id, res);
        console.log(result);
        console.log("Update successful");
        res.send(result);
    } catch (error) {
        console.error("Update failed:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
};

module.exports = { updateMission };
