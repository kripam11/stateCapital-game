# 🏛️ State Capital Quiz

A simple quiz application built using **Node.js, Express.js, EJS, and PostgreSQL** that tests users on their knowledge of Indian state capitals.

This project was developed as a **mini backend project while learning PostgreSQL database integration, environment variables, Express routing, and server-side rendering with EJS.**

---

## 🚀 Features

* Random state generated from PostgreSQL database
* User enters the corresponding capital city
* Instant answer validation
* Real-time score tracking
* Game over on incorrect answer
* Dynamic UI rendering using EJS
* PostgreSQL database connectivity
* Environment variable support using `.env`
* Simple and responsive user interface

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* PostgreSQL
* EJS
* pg
* dotenv
* HTML5
* CSS3

---

## 📂 Project Structure

```text
stateCapital_game/
│
├── public/
│   └── styles/
│
├── views/
│   └── index.ejs
│
├── state_capital.csv
├── index.js
├── package.json
├── .env
└── .gitignore
```

---

## 🗄️ Database Schema

### Table: `state_capital`

| Column  | Type    |
| ------- | ------- |
| id      | SERIAL  |
| state   | VARCHAR |
| capital | VARCHAR |

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
```
