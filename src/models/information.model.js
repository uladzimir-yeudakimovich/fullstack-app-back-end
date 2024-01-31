const uuid = require('uuid');
const { Schema, model } = require('mongoose');

const generalInformationSchema = new Schema(
  {
    _id: { type: String, default: uuid },
    general: {
      ru: { type: String, required: true },
      en: { type: String, required: true }
    },
    education: {
      ru: { type: String, required: true },
      en: { type: String, required: true }
    },
    experience: {
      ru: { type: String, required: true },
      en: { type: String, required: true }
    },
    technology: {
      level: [{ type: Number, required: true }],
      technology: { type: String, required: true }
    }
  },
  { versionKey: false }
);

generalInformationSchema.statics.toResponse = info => {
  const { general, education, experience, technology } = info;
  return { general, education, experience, technology };
};

const Information = model('Information', generalInformationSchema);

module.exports = Information;
