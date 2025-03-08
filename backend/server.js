//import alle requierments
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//import alle models
const Skill = require("./models/skill");
const Project = require("./models/project");
const Review = require("./models/review");

const app = express(); // Maak een Express-app
app.use(cors()); 
app.use(express.json()); // Sta JSON-verzoeken toe

// Verbind met MongoDB
mongoose.connect("mongodb://mongo:27017/db1", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => console.log("MongoDB verbonden!"));


// Skills api
app.get("/skills", async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: "Fout bij ophalen van skills" });
  }
});

// Projecten api
app.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Fout bij ophalen van projecten" });
  }
});

// Reviews api
app.get("/reviews", async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Fout bij ophalen van reviews" });
  }
});

// Review post api
app.post("/postreviews", async (req, res) => {
  try {
    const { reviewtext } = req.body;
    if (!reviewtext) return res.status(400).json({ message: "Reviewtekst ontbreekt!" });

    const newReview = new Review({ reviewtext });
    await newReview.save();

    res.status(201).json({ message: "Review toegevoegd!", review: newReview });
  } catch (error) {
    res.status(500).json({ message: "Fout bij toevoegen van review" });
  }
});

// Start de server
app.listen(5000, () => console.log("Server draait op poort 5000"));
