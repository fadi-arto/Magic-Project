const MagicMover = require('../entities/magicMover');
const loadingLogSchema = require('../entities/loadingLog');

const endMission = async (req, res) => {
  try {

    await MagicMover.findByIdAndUpdate(moverId, { questState: 'done' });
    await loadingLogSchema.deleteMany({ moverId });


    const loading = new loadingLogSchema({
      moverId,
      activity: 'Mission complete',
      timestamp: Date.now()
    });
    await loading.save();


    return res.status(200).json({ message: 'Mission completed successfully' });
  } catch (error) {

    console.error('Error ending mission:', error);
    return res.status(500).json({ error: 'Failed to complete mission' });
  }
};

module.exports = { endMission };


// const endMission = async (req, res) => {

//   try {
//     const magicMover = await MagicMover.find({ questState: 'done' });

//     // const loadingLog = new loadingLogSchema({
//     //   moverId,
//     //   activity: 'Mission complete',
//     //   timestamp: Date.now()
//   // });
//   // await loadingLog.save();

//   return { magicMover };

// }
// catch
//   (error) {
//     console.error('Error ending mission:', error);
//     throw new Error('Failed to complete mission');
// }
// };

// module.exports = { endMission };

// Import required modules

// Define the endpoint to end a mission
// endMission.js


// const endMission = async (moverId) => {
//   try {
//     // Find the Magic Mover by ID
//     const magicqMover = await MagicMover.findById(moverId);

//     // Check if the Magic Mover exists
//     if (!magicqMover) {
//       throw new Error('Magic Mover not found');
//     }

//     // Update the quest state to "done"
//     magicqMover.questState = 'done';
//     await magicqMover.save();

//     // Create a loading log for the mission completion
//     const loadingLog = new loadingLogSchema({
//       moverId: moverId,
//       activity: 'Mission complete'
//     });
//     await loadingLog.save();

//     return { message: 'Mission ended successfully' };
//   } catch (error) {
//     console.error('Error ending mission:', error);
//     throw new Error('Failed to end mission');
//   }
// };

// module.exports = {endMission}; // Correct export statement

