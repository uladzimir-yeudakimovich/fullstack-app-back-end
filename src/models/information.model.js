const uuid = require('uuid');
const { Schema, model } = require('mongoose');

const generalInformationSchema = new Schema(
  {
    _id: { type: String, default: uuid },
    general: {
      ru: { type: String, required: true },
      en: { type: String, required: true }
    }
  },
  { versionKey: false }
);

generalInformationSchema.statics.toResponse = info => {
  const { general } = info;
  return { general };
};

const Information = model('Information', generalInformationSchema);

module.exports = Information;
