# 📝 Notes App

A full-stack Notes Application built using **Node.js**, **Express**, **EJS**, and **TailwindCSS**. This app allows users to create, read, and manage notes stored as files on the server — with a sleek modern UI and dark mode toggle.

---

## 🚀 Features

- 📄 Create and save notes as `.text` files.
- 🔍 View notes in a popup modal (without reloading the page).
- 🌓 Toggle between Light & Dark mode.
- 🎨 TailwindCSS-powered clean and responsive UI.
- ⚡ Instant file access via Express + EJS rendering.

---

## 🛠️ Tech Stack

| Category    | Tech       |
|-------------|------------|
| Backend     | Node.js, Express.js |
| Templating  | EJS        |
| Styling     | TailwindCSS |
| File System | Node.js `fs` module |

---

⚙️ How it Works
Notes are stored in /files folder as .text files

Each file is dynamically listed on the homepage

Clicking "Read" uses AJAX to fetch and show content in a modal

Dark mode is toggled via localStorage + Tailwind dark class

## 📦 Installation
1. Clone the Repository

```bash
git clone https://github.com/harsh6183/Notes_app.git
cd Notes_app

2. Install Dependencies
npm install

3. Run the App
node index.js

The app runs on:
🌐 http://localhost:3000

📁 Project Structure
Notes_app/
│
├── views/                
│   └── index.ejs
│
├── files/                 
│
├── .gitignore
├── index.js          
├── package.json
└── README.md

📸 UI Preview
![image](https://github.com/user-attachments/assets/0321d46c-a8ec-4a76-b7a6-71f127554403)
