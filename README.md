# 🏛️ State Capital Quiz

A simple quiz application built using **Node.js, Express.js, EJS, and PostgreSQL** that tests users on their knowledge of Indian state capitals.

This project was developed as a **mini backend project while learning PostgreSQL database integration, environment variables, Express routing, and server-side rendering with EJS.**

---

## 🚀 Features

* Random state generated from PostgreSQL database
* User enters the corresponding capital city
* Instant answer validation
* Real-time score tracking
* Game-over screen on incorrect answer
* Dynamic UI rendering using EJS
* PostgreSQL database integration
* Environment variables using `.env`
* Responsive and clean user interface

---

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js
* PostgreSQL
* pg
* dotenv

### Frontend

* HTML5
* CSS3
* EJS

### Tools

* Git
* GitHub
* Nodemon

---

## 📂 Project Structure

```text
stateCapital_game/
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

### Sample Data

| State       | Capital    |
| ----------- | ---------- |
| Punjab      | Chandigarh |
| Haryana     | Chandigarh |
| Maharashtra | Mumbai     |
| Karnataka   | Bengaluru  |
| Rajasthan   | Jaipur     |

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone <repository-url>
cd stateCapital_game
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
```

### Start PostgreSQL

Ensure PostgreSQL is running and the `state_capital` table is populated.

### Run the Application

```bash
nodemon index.js
```

or

```bash
node index.js
```

Application will run at:

```text
http://localhost:3000
```

---

## 🎮 How to Play

1. A random Indian state is displayed.
2. Enter the corresponding capital city.
3. Submit your answer.
4. Correct answers increase your score.
5. An incorrect answer ends the game.
6. Restart and try to beat your previous score.

---

## 📸 Screenshots

### Home Screen

Add your screenshot here:

```md
![Home Screen](./screenshots/home.png)
```

### Gameplay

```md
![Gameplay](./screenshots/gameplay.png)
```

---

## 🎯 Learning Outcomes

This project helped me learn:

* PostgreSQL database setup and management
* SQL queries and data retrieval
* Connecting PostgreSQL with Node.js using `pg`
* Environment variable management using `dotenv`
* Express.js routing and middleware
* Server-side rendering using EJS
* Form handling in Express
* Git and GitHub workflow
* Building full-stack applications with a database

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

**Kripa Nanda**
Backend Developer



