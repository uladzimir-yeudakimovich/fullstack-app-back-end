const feedbackRepo = require('./feedback.controller');

const getFeedbacks = () => feedbackRepo.getAll();
const addFeedback = (id, data) => feedbackRepo.addFeedback(id, data);
const editFeedback = (id, data) => feedbackRepo.updateFeedback(id, data);
const deleteFeedback = id => feedbackRepo.deleteFeedback(id);

module.exports = { getFeedbacks, addFeedback, editFeedback, deleteFeedback };
