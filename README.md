🚀 VueTaskFlow

VueTaskFlow is a full-stack task management application built with Vue.js (frontend) and Laravel REST API (backend).
It provides a simple, clean, and efficient way to manage daily tasks, track progress, and boost productivity.

📌 Features

✅ Add, edit, delete, and mark tasks as complete

✅ RESTful API integration between Vue.js and Laravel

✅ Responsive and minimal UI with Vue.js

✅ Scalable backend with Laravel REST API

✅ Easy to set up for learning or real-world usage

🛠️ Tech Stack

Frontend: Vue.js (Vite, Tailwind CSS optional)
Backend: Laravel REST API (MySQL / SQLite)
Others: Axios for API calls, Eloquent ORM, JSON responses

⚙️ Installation & Setup
1️⃣ Clone the repositories
# Clone frontend (Vue.js)
git clone https://github.com/julfikariu/vuetaskflow.git

# Clone backend (Laravel)
git clone https://github.com/julfikariu/vuetaskflow-backend.git

2️⃣ Backend (Laravel REST API) Setup
cd vuetaskflow-backend

# Install dependencies
composer install

# Copy environment file
cp .env.example .env

# Generate app key
php artisan key:generate

# Configure DB in .env
DB_DATABASE=your_db_name
DB_USERNAME=your_db_user
DB_PASSWORD=your_db_password

# Run migrations
php artisan migrate

# Start Laravel server
php artisan serve


Your backend API will run on:
👉 http://127.0.0.1:8000/api

3️⃣ Frontend (Vue.js) Setup
cd vuetaskflow

# Install dependencies
npm install

# Run the dev server
npm run dev


Frontend will run on:
👉 http://localhost:5173

4️⃣ Connect Frontend with Backend

In your Vue.js project (e.g., src/api.js or axios config):

import axios from "axios";

export default axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

📂 Project Structure
🔹 Frontend (Vue.js)
vuetaskflow-frontend/
 ┣ src/
 ┃ ┣ components/     # Vue components
 ┃ ┣ views/          # Pages
 ┃ ┗ main.js         # Entry file

🔹 Backend (Laravel)
vuetaskflow-backend/
 ┣ app/
 ┃ ┣ Http/Controllers/TaskController.php
 ┃ ┗ Models/Task.php
 ┣ routes/api.php
 ┗ database/migrations/xxxx_create_tasks_table.php

🚀 Future Enhancements

📅 Task due dates & reminders

🏷️ Task categories / tags

📊 Dashboard with task statistics

📜 License

This project is open-source and available under the MIT License.

👉 Tagline: “VueTaskFlow – Manage your tasks with flow, powered by Vue & Laravel.”