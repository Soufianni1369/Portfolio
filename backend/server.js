const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Skill = require("./models/skill"); 
const Project = require("./models/project"); 
const Review = require("./models/review");



const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/db1", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => console.log("MongoDB verbonden!"));

// API TEST
app.get("/api", (req, res) => {
  console.log('testing')
  res.json({ message: "Hallo vanaf de backend!" });
});

// API SKILLS
app.get("/skills", async (req, res) => {
  try {
    const skills = await Skill.find(); // Haal alle records op
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: "Fout bij ophalen van skills", error });
  }
});

// API PROJECTS
app.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find(); // Haal alle records op
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Fout bij ophalen van projects", error });
  }
});


// API REVIEWS
app.get("/reviews", async (req, res) => {
  try {
    const reviews = await Review.find(); // Haal alle records op
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Fout bij ophalen van reviews", error });
  }
});


// API REVIEWS - Nieuwe review toevoegen
app.post("/reviews", async (req, res) => {
  try {
    const { reviewtext } = req.body;

    // Controleer of de vereiste data aanwezig is
    if (!reviewtext) {
      return res.status(400).json({ message: "❌ Reviewtekst is verplicht!" });
    }

    // Nieuwe review aanmaken
    const newReview = new Review({ reviewtext });

    // Opslaan in de database
    await newReview.save();

    res.status(201).json({ message: "✅ Review toegevoegd!", review: newReview });
  } catch (error) {
    res.status(500).json({ message: "❌ Fout bij toevoegen van review", error });
  }
});



app.listen(5000, () => console.log("Server draait op poort 5000"));