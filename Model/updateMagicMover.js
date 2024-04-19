
const MagicMover = require('../entities/magicMover')
const loadingLogSchema = require('../entities/loadingLog');

const UpdateTOStartMission = async (moverId) => {
    try {
        const magicMover = await MagicMover.findByIdAndUpdate(moverId, { questState: 'on a mission' });

        const loadingLog = new loadingLogSchema({
            moverId,
            activity: 'Start a Mission',
            timestamp: Date.now()
        });
        await loadingLog.save();

        return { magicMover };
    } catch (error) {
        console.error('Error starting mission:', error);
        throw new Error('Failed to start mission');
    }
};

module.exports = { UpdateTOStartMission };



