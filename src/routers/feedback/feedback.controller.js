const Feedback = require('../../models/feedback.model');

const getAll = async () => Feedback.find({});
const addFeedback = async (id, feedback) => {
  return Feedback.create(feedback);
};
const updateFeedback = async (id, feedback) => {
  await Feedback.findByIdAndUpdate(id, feedback, {
    runValidators: true,
    context: 'query'
  });
  return Feedback.findById(id);
};
const deleteFeedback = async id => Feedback.findByIdAndDelete(id);

module.exports = { getAll, addFeedback, updateFeedback, deleteFeedback };
