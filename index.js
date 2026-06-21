import express from "express";
import pg from "pg";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

const pool = new pg.Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : false,
});

let quiz = [];

async function getQuiz() {
  if (quiz.length === 0) {
    const result = await pool.query("SELECT * FROM state_capital");
    quiz = result.rows;
  }
  return quiz;
}

function pickRandom(questions) {
  return questions[Math.floor(Math.random() * questions.length)];
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", async (req, res) => {
  try {
    const questions = await getQuiz();
    const question = pickRandom(questions);
    res.render("index.ejs", { question, totalScore: 0 });
  } catch (err) {
    console.error("DB error:", err.stack);
    res.status(500).send("Failed to load quiz. Check database connection.");
  }
});

app.post("/submit", async (req, res) => {
  try {
    const questions = await getQuiz();
    const { answer, currentCapital, totalScore } = req.body;
    const score = parseInt(totalScore, 10) || 0;

    const isCorrect =
      answer.trim().toLowerCase() === currentCapital.trim().toLowerCase();
    const newScore = isCorrect ? score + 1 : score;

    const nextQuestion = pickRandom(questions);
    res.render("index.ejs", {
      question: nextQuestion,
      wasCorrect: isCorrect,
      totalScore: newScore,
    });
  } catch (err) {
    console.error("DB error:", err.stack);
    res.status(500).send("Failed to load quiz. Check database connection.");
  }
});

if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

export default app;
