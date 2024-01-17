const uuid = require('uuid');
const { Schema, model } = require('mongoose');

const projectSchema = new Schema(
  {
    _id: { type: String, default: uuid },
    click: String,
    en: String,
    images: Array,
    link: String,
    name: String,
    ru: String
  },
  { versionKey: false }
);

projectSchema.statics.toResponse = projects => {
  const { click, en, images, link, name, ru } = projects;
  return { click, en, images, link, name, ru };
};

const Projects = model('Projects', projectSchema);

module.exports = Projects;
