import express from "express";
import pg from "pg";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;


const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

db.connect();
let quiz = [];


db.query("SELECT * FROM state_capital ",(err,res)=>{
    if(err){
        console.log("Error occured",err.stack);
    }
    else{
        quiz = res.rows;
    }
});

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

let totalCorrect = 0;
let currentQuestion = {};

app.get("/", async (req,res)=>{
     nextQuestion();
    res.render("index.ejs",{
        question : currentQuestion
    });
});

app.post("/submit", async (req,res)=>{
    let isCorrect = false;
    if(  req.body.answer.trim().toLowerCase() ===
  currentQuestion.capital.toLowerCase()){
        isCorrect = true;
        totalCorrect++;
    }
    nextQuestion();
    res.render("index.ejs",{
        question : currentQuestion,
        wasCorrect : isCorrect,
        totalScore : totalCorrect
    })
});

async function nextQuestion() {
  const randomState = quiz[Math.floor(Math.random() * quiz.length)];
  currentQuestion = randomState;
}

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})