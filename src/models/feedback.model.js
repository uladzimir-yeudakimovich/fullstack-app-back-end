const uuid = require('uuid');
const { Schema, model } = require('mongoose');

const feedbackSchema = new Schema(
  {
    _id: { type: String, default: uuid },
    name: { type: String, required: true },
    message: { type: String, required: true },
    time: { type: Date, required: true }
  },
  { versionKey: false }
);

feedbackSchema.statics.toResponse = feedback => {
  const { id, message, name, time } = feedback;
  return { id, message, name, time };
};

const Feedback = model('Feedback', feedbackSchema);

module.exports = Feedback;
