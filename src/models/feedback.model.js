const uuid = require('uuid');
const { Schema, model } = require('mongoose');

const feedbackSchema = new Schema(
  {
    _id: { type: String, default: uuid },
    name: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: Date, default: () => new Date() }
  },
  { versionKey: false }
);

feedbackSchema.statics.toResponse = feedback => {
  const { id, message, name, date } = feedback;
  return { id, message, name, date };
};

const Feedback = model('Feedback', feedbackSchema);

module.exports = Feedback;
