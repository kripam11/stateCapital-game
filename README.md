# 🏛️ State Capital Quiz

A quiz application built using **Node.js, Express.js, EJS, and PostgreSQL** that tests users on their knowledge of Indian state capitals.

This project was developed as a **mini backend project while learning PostgreSQL database integration, environment variables, Express routing, and server-side rendering with EJS.** It is deployed on **Vercel** with a cloud PostgreSQL database via **Neon**.

---

## 🚀 Features

* Random state generated from PostgreSQL database
* User enters the corresponding capital city
* Instant answer validation
* Game-over screen on incorrect answer
* Dynamic UI rendering using EJS
* PostgreSQL database integration via Neon
* Stateless architecture — works with Vercel serverless functions
* Environment variables using `.env`
* Responsive and clean user interface

---

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js
* PostgreSQL (Neon for cloud hosting)
* pg
* dotenv

### Frontend

* HTML5
* CSS3
* EJS

### Tools

* Git & GitHub
* Nodemon
* Vercel (deployment)

---

## 📂 Project Structure

```text
stateCapital-game/
│
├── public/
│   └── styles/
│       └── main.css
│
├── views/
│   └── index.ejs
│
├── state_capital.csv
├── index.js
├── package.json
├── package-lock.json
├── vercel.json
├── .env
└── .gitignore
```

---

## 🗄️ Database Schema

### Table: `state_capital`

| Column  | Type               |
| ------- | ------------------ |
| id      | SERIAL PRIMARY KEY |
| state   | VARCHAR(100)       |
| capital | VARCHAR(100)       |

### Create & Seed (run in Neon SQL Editor or local psql)

```sql
CREATE TABLE state_capital (
  id SERIAL PRIMARY KEY,
  state VARCHAR(100),
  capital VARCHAR(100)
);

INSERT INTO state_capital (id, state, capital) VALUES
(1, 'Andhra Pradesh', 'Amaravati'),
(2, 'Arunachal Pradesh', 'Itanagar'),
(3, 'Assam', 'Dispur'),
(4, 'Bihar', 'Patna'),
(5, 'Chhattisgarh', 'Raipur'),
(6, 'Goa', 'Panaji'),
(7, 'Gujarat', 'Gandhinagar'),
(8, 'Haryana', 'Chandigarh'),
(9, 'Himachal Pradesh', 'Shimla'),
(10, 'Jharkhand', 'Ranchi'),
(11, 'Karnataka', 'Bengaluru'),
(12, 'Kerala', 'Thiruvananthapuram'),
(13, 'Madhya Pradesh', 'Bhopal'),
(14, 'Maharashtra', 'Mumbai'),
(15, 'Manipur', 'Imphal'),
(16, 'Meghalaya', 'Shillong'),
(17, 'Mizoram', 'Aizawl'),
(18, 'Nagaland', 'Kohima'),
(19, 'Odisha', 'Bhubaneswar'),
(20, 'Punjab', 'Chandigarh'),
(21, 'Rajasthan', 'Jaipur'),
(22, 'Sikkim', 'Gangtok'),
(23, 'Tamil Nadu', 'Chennai'),
(24, 'Telangana', 'Hyderabad'),
(25, 'Tripura', 'Agartala'),
(26, 'Uttar Pradesh', 'Lucknow'),
(27, 'Uttarakhand', 'Dehradun'),
(28, 'West Bengal', 'Kolkata');
```

---

## ⚙️ Local Setup

### Clone the Repository

```bash
git clone <repository-url>
cd stateCapital-game
```

### Install Dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env` file in the root directory:

```env
DB_USER=postgres
DB_HOST=localhost
DB_NAME=world1
DB_PASSWORD=your_password
DB_PORT=5432
DB_SSL=false
```

### Run the Application

```bash
npm run dev
```

or

```bash
npm start
```

Application runs at `http://localhost:3000`

---

## ☁️ Deploying to Vercel

### 1. Set up a cloud PostgreSQL database (Neon)

1. Sign up at [neon.tech](https://neon.tech) (free tier available)
2. Create a new project
3. Open the **SQL Editor** and run the CREATE TABLE + INSERT script above
4. Note your **connection parameters** (host, user, database, password)

### 2. Deploy to Vercel

Push the repo to GitHub, then:

1. Go to [vercel.com](https://vercel.com) → Import your GitHub repository
2. Under **Settings → Environment Variables**, add:

| Key | Value |
|-----|-------|
| `DB_HOST` | your Neon host |
| `DB_USER` | your Neon username |
| `DB_NAME` | your Neon database name |
| `DB_PASSWORD` | your Neon password |
| `DB_PORT` | `5432` |
| `DB_SSL` | `true` |

3. Click **Deploy**

Or deploy from the CLI:

```bash
npm install -g vercel
vercel --prod
```

---

## 🎮 How to Play

1. A random Indian state is displayed.
2. Enter the corresponding capital city.
3. Submit your answer.
4. Correct answers increase your score.
5. An incorrect answer ends the game.
6. Restart and try to beat your previous score!

---

## 🎯 Learning Outcomes

This project helped me learn:

* PostgreSQL database setup and management
* SQL queries and data retrieval
* Connecting PostgreSQL with Node.js using `pg`
* Environment variable management using `dotenv`
* Express.js routing and middleware
* Server-side rendering using EJS
* Stateless web architecture (client-side state via hidden form fields)
* Deploying Node.js apps to Vercel
* Cloud database hosting with Neon
* Git and GitHub workflow

---

## 🔮 Future Improvements

* Multiple difficulty levels
* Timer-based quiz mode
* Leaderboard system
* High score persistence using PostgreSQL
* User authentication
* Hints for difficult states
* Support for Union Territories
* Responsive mobile-first design

---

## 👨‍💻 Author

**Shubham Nanda**
