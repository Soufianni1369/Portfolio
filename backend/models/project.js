const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  naam: String,
  projecttext: String
});

module.exports = mongoose.model("Project", ProjectSchema);