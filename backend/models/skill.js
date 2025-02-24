const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({
  naam: String,
  level: Number,
  category: String
});

module.exports = mongoose.model("Skill", SkillSchema);