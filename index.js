const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const PORT = 3000;
const FILES_DIR = path.join(__dirname, 'files');

// Set view engine and middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Home route - Show all notes
app.get('/', (req, res) => {
    fs.readdir(FILES_DIR, (err, files) => {
        if (err) return res.send("❌ Error reading files folder.");
        res.render("index", { files });
    });
});

// View raw file data - used in modal
app.get('/files/:filename', (req, res) => {
    const filePath = path.join(FILES_DIR, req.params.filename);
    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) return res.status(404).send("File not found");
        res.send(data);  // Just send plain text for modal
    });
});

// Create a new note
app.post('/create', (req, res) => {
    const fileName = req.body.title.trim().replace(/[^a-z0-9 ]/gi, '_') + ".text";
    const filePath = path.join(FILES_DIR, fileName);
    fs.writeFile(filePath, req.body.details, (err) => {
        if (err) return res.send("❌ Error creating file.");
        res.redirect("/");
    });
});

// Delete a note
app.post('/delete/:filename', (req, res) => {
    const filePath = path.join(FILES_DIR, req.params.filename);
    fs.unlink(filePath, (err) => {
        if (err) return res.send("❌ Error deleting file.");
        res.redirect("/");
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
