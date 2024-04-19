const { endMission } = require('../Model/EndMission');

const MissionEnd = async (req, res) => {
    const id = req.params.id;

    try {
        const result = await endMission(id, res);
        console.log(result);
        console.log("Update successful");
        if (!res.headersSent) {
        }
    } catch (error) {
        console.error("Update failed:", error);
        if (!res.headersSent) {
            res.status(500).send({ error: "Internal Server Error" });
        }
    }
};

module.exports = { MissionEnd };
